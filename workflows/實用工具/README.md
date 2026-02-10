# 🛠️ 實用工具系列

> 開發者必備工具，提升開發與維護效率

## 📋 工作流與工具列表

### 1. 備份系統
**檔案**: `備份-GqYIkKW6lCrJ91cW.json`
- 自動化資料備份
- 定時備份任務
- 多重備份策略

**難度**: ⭐⭐ (中級)

### 2. Workflow 清理腳本
**檔案**: `sanitize-workflow.js`
- 移除敏感資訊
- API Key 清理
- 批次處理工作流

**使用方法**:
```bash
node sanitize-workflow.js
```

---

## 🎯 功能說明

### 清理腳本功能
- ✅ 自動移除 API Keys
- ✅ 清除 Webhook IDs
- ✅ 移除憑證資訊
- ✅ 保留工作流邏輯

### 已清理的欄位
- `credentials` - API 憑證
- `webhookId` - Webhook ID
- `chatId` - 聊天室 ID（非表達式）
- `apiKey`, `token`, `secret` 等敏感欄位

---

**Nick Chang** | ZN Studio
📧 nickleo051216@gmail.com
