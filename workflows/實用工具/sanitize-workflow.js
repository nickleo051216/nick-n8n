const fs = require('fs');
const path = require('path');

// 需要清理的敏感字段
const SENSITIVE_FIELDS = {
  // 清理凭证ID
  credentials: true,
  // 清理webhook ID
  webhookId: true,
  // 保留其他字段但可以选择性清理某些值
};

// 需要清理的特定参数
const SENSITIVE_PARAMS = [
  'chatId',        // Telegram chat ID
  'apiKey',        // API keys
  'accessToken',   // Access tokens
  'secretKey',     // Secret keys
  'password',      // Passwords
  'token',         // Tokens
  'secret',        // Secrets
];

function sanitizeObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeObject(item));
  }

  const sanitized = {};

  for (const [key, value] of Object.entries(obj)) {
    // 完全移除凭证信息
    if (key === 'credentials') {
      sanitized[key] = '[REMOVED]';
      continue;
    }

    // 移除webhook ID
    if (key === 'webhookId') {
      sanitized[key] = '[REMOVED]';
      continue;
    }

    // 清理敏感参数
    if (SENSITIVE_PARAMS.includes(key)) {
      if (typeof value === 'string') {
        // 如果是表达式，保留表达式结构
        if (value.startsWith('={{') || value.startsWith('{{')) {
          sanitized[key] = value;
        } else {
          sanitized[key] = '[REMOVED]';
        }
      } else {
        sanitized[key] = '[REMOVED]';
      }
      continue;
    }

    // 递归处理嵌套对象
    if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeObject(value);
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
}

function sanitizeWorkflow(filePath) {
  try {
    console.log(`处理文件: ${filePath}`);

    // 读取工作流文件
    const content = fs.readFileSync(filePath, 'utf8');
    const workflow = JSON.parse(content);

    // 清理敏感数据
    const sanitized = sanitizeObject(workflow);

    // 写回文件
    fs.writeFileSync(
      filePath,
      JSON.stringify(sanitized, null, 2),
      'utf8'
    );

    console.log(`✓ 已清理: ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`✗ 处理失败 ${filePath}:`, error.message);
  }
}

function sanitizeAllWorkflows(directory) {
  console.log('开始清理 n8n 工作流中的敏感数据...\n');

  // 读取目录中的所有 JSON 文件
  const files = fs.readdirSync(directory)
    .filter(file => file.endsWith('.json'))
    .map(file => path.join(directory, file));

  if (files.length === 0) {
    console.log('未找到任何 JSON 工作流文件');
    return;
  }

  console.log(`找到 ${files.length} 个工作流文件\n`);

  // 处理每个文件
  files.forEach(sanitizeWorkflow);

  console.log('\n清理完成！');
  console.log('\n已移除的敏感信息包括：');
  console.log('- 凭证 ID (credentials)');
  console.log('- Webhook ID');
  console.log('- Chat ID (非表达式)');
  console.log('- API Keys, Tokens, Secrets');
}

// 执行清理
const targetDir = process.argv[2] || __dirname;
sanitizeAllWorkflows(targetDir);
