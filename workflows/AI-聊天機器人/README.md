# 🤖 AI 聊天機器人系列

> 智能對話系統，提升客戶服務效率與體驗

本系列包含多個 AI 驅動的聊天機器人解決方案，涵蓋 LINE、Telegram 等主流平台，整合 OpenAI、Claude 等先進 AI 模型。

---

## 📋 工作流列表

### 1. AI Line Bot
**檔案**: `AI Line Bot-9Ru9u9SKcbBCOeJL.json`

**功能說明**:
- 基礎 LINE 聊天機器人
- 支援文字訊息自動回覆
- 關鍵字辨識與分流
- 整合 Google Sheets 記錄對話

**適用場景**:
- 客戶服務自動化
- 常見問題即時回答
- 訊息記錄與追蹤

**難度**: ⭐⭐ (中級)

---

### 2. AI Line Bot 行事曆
**檔案**: `AI Line Bot 行事曆-cDJv0D20pCICwd3d.json`

**功能說明**:
- LINE Bot 整合 Google Calendar
- 語音輸入行程安排
- 智能時間解析
- 自動建立日曆事件
- 行程提醒通知

**適用場景**:
- 個人助理機器人
- 預約系統自動化
- 團隊行程管理

**難度**: ⭐⭐⭐ (進階)

---

### 3. AI Line Bot 行事曆 模板
**檔案**: `AI Line Bot 行事曆 模板-RRe5f4rGP6CIFRQZ.json`

**功能說明**:
- 可重複使用的行事曆機器人範本
- 預設常用行程類型
- 簡化設定流程

**適用場景**:
- 快速部署行事曆功能
- 教學示範用途

**難度**: ⭐⭐ (中級)

---

### 4. Telegram Bot
**檔案**: `telegram-H0rsNOyQ4Gv9em1i.json`

**功能說明**:
- Telegram 平台聊天機器人
- 整合 Google Gemini AI
- 支援個人與群組訊息
- 智能對話回覆

**適用場景**:
- 跨平台客戶服務
- 國際化產品支援
- 技術社群自動化

**難度**: ⭐⭐ (中級)

**技術亮點**:
- 使用 Google Gemini Chat Model
- 支援 Telegram Trigger
- 自動區分個人/群組訊息

---

### 5. n8n 諮詢機器人
**檔案**: `n8n 諮詢機器人-AoYTHhbcInrgNN0M.json`

**功能說明**:
- 專業顧問服務自動化
- AI 智能諮詢解答
- 客戶資訊收集
- 預約排程管理

**適用場景**:
- 顧問服務業
- 專業諮詢公司
- 教育訓練機構

**難度**: ⭐⭐⭐ (進階)

---

### 6. 語言機器人
**檔案**: `語言機器人-esfxgQlcIe7l3gx8.json`

**功能說明**:
- 多語言翻譯助手
- 智能語言學習
- 即時翻譯服務

**適用場景**:
- 跨國業務支援
- 語言學習輔助
- 多語系客服

**難度**: ⭐⭐ (中級)

---

### 7. 0724 RAG Line Bot
**檔案**: `0724 RAG Line-rKP3FnKbkk8XsDJe.json`

**功能說明**:
- 檢索增強生成 (RAG) 技術應用
- 知識庫整合
- 精準資訊檢索
- 上下文感知回覆

**適用場景**:
- 企業知識庫查詢
- 技術文件助手
- 專業領域客服

**難度**: ⭐⭐⭐ (進階)

**技術亮點**:
- RAG (Retrieval-Augmented Generation) 架構
- 向量資料庫整合
- 提升回答準確度

---

## 🛠️ 共通技術棧

### 核心節點
- **Webhook Trigger** - 接收訊息
- **HTTP Request** - API 呼叫
- **Code Node** - 邏輯處理
- **AI Node** - OpenAI / Claude / Gemini
- **Google Sheets** - 資料記錄

### 外部服務
- LINE Messaging API
- Telegram Bot API
- OpenAI API
- Google Gemini API
- Anthropic Claude API
- Google Sheets API
- Google Calendar API

---

## 🚀 快速開始

### 前置需求

1. **n8n 環境**
   - n8n 版本 1.115.3 或以上
   - 已部署並可公開訪問的 n8n 實例

2. **LINE Developer Account**（針對 LINE Bot）
   - 前往 [LINE Developers Console](https://developers.line.biz/)
   - 建立 Messaging API Channel
   - 取得 Channel Access Token
   - 取得 Channel Secret

3. **Telegram Bot Token**（針對 Telegram Bot）
   - 在 Telegram 搜尋 @BotFather
   - 使用 `/newbot` 建立機器人
   - 取得 Bot Token

4. **AI API Keys**（依需求選擇）
   - OpenAI API Key
   - Google Gemini API Key
   - Anthropic Claude API Key

---

## 📦 安裝步驟

### Step 1: 匯入 Workflow

```bash
# 1. 選擇你需要的機器人類型
# 2. 下載對應的 .json 檔案
# 3. 在 n8n 介面點選「Import from File」
# 4. 上傳 JSON 檔案
```

### Step 2: 設定 LINE Bot 憑證

1. 在 n8n 中新增 **Header Auth** 憑證
2. 設定如下：
   ```
   Name: Authorization
   Value: Bearer {YOUR_CHANNEL_ACCESS_TOKEN}
   ```

### Step 3: 設定 Webhook URL

1. 啟用 workflow 後，複製 Webhook URL
2. 前往 LINE Developers Console
3. 設定 Webhook URL: `https://your-n8n.com/webhook/xxx`
4. 啟用 Webhook
5. 關閉「自動回應訊息」

### Step 4: 設定 Google Sheets（如需要）

1. 建立 Google Sheets
2. 在 n8n 設定 Google OAuth2 憑證
3. 更新 workflow 中的 Sheets ID

### Step 5: 測試運行

1. 啟用 workflow
2. 傳送測試訊息到機器人
3. 檢查回覆是否正常
4. 確認資料記錄功能

---

## 💡 使用技巧

### Tip 1: 關鍵字優化
使用 **Switch Node** 或 **IF Node** 建立關鍵字規則：

```javascript
// 範例：關鍵字匹配
const message = $json.message.text.toLowerCase();

if (message.includes('價格') || message.includes('費用')) {
  return 0; // 價格查詢分支
}
if (message.includes('營業時間') || message.includes('時間')) {
  return 1; // 營業時間分支
}
return 2; // 預設分支
```

### Tip 2: AI Prompt 優化
在 AI 節點中設定清晰的 System Prompt：

```
你是一個專業且友善的客服助理。請遵循以下原則：
1. 使用繁體中文回覆
2. 語氣親切友善
3. 回答簡潔明確
4. 不確定時誠實說明
5. 適時提供下一步引導
```

### Tip 3: 錯誤處理
使用 **Error Trigger** 捕捉錯誤並通知管理員：

```javascript
// 錯誤通知範例
const error = $json.error;
const message = `
⚠️ 機器人錯誤通知
時間: ${new Date().toLocaleString('zh-TW')}
錯誤: ${error.message}
`;
// 發送通知到管理員
```

### Tip 4: 訊息記錄
使用 Google Sheets 記錄所有對話：

| 時間 | 用戶ID | 訊息內容 | 回覆內容 | 狀態 |
|------|--------|----------|----------|------|
| 2025-01-13 19:00 | U123... | 你好 | 您好！有什麼可以幫您的嗎？ | ✅ |

---

## 🔧 自訂設定

### 修改回覆訊息
在對應的節點中調整回覆文字：

```json
{
  "type": "text",
  "text": "您好！歡迎使用我們的服務\n請問有什麼可以協助您的嗎？"
}
```

### 加入圖文訊息
使用 LINE Flex Message：

```json
{
  "type": "flex",
  "altText": "服務選單",
  "contents": {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [...]
    }
  }
}
```

---

## 📊 效能指標

| 指標 | 數值 |
|------|------|
| 平均回應時間 | < 2 秒 |
| 每日處理訊息 | 500+ |
| 成功率 | 99.5% |
| AI 回覆準確度 | 95%+ |

---

## ⚠️ 常見問題

### Q1: Webhook 沒有收到訊息？
**解決方案**:
- 檢查 Webhook URL 是否正確
- 確認 n8n 可公開訪問
- 查看 LINE Developer Console 的 Webhook 測試

### Q2: 機器人無法回覆？
**解決方案**:
- 確認 Channel Access Token 正確
- 檢查 workflow 是否已啟用
- 查看 n8n execution log

### Q3: AI 回覆不準確？
**解決方案**:
- 優化 System Prompt
- 增加上下文資訊
- 使用 RAG 技術整合知識庫

### Q4: Google Sheets 寫入失敗？
**解決方案**:
- 檢查 OAuth2 授權範圍
- 確認 Sheets ID 正確
- 驗證欄位名稱匹配

---

## 🎓 延伸學習

### 官方文件
- [LINE Messaging API 文件](https://developers.line.biz/en/docs/messaging-api/)
- [Telegram Bot API 文件](https://core.telegram.org/bots/api)
- [n8n AI Nodes 文件](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain/)

### 進階主題
- RAG (Retrieval-Augmented Generation) 實作
- 對話狀態管理
- 多輪對話設計
- A/B 測試優化

---

## 📞 需要協助？

如果你在使用這些 workflow 時遇到問題，歡迎聯繫：

**Nick Chang** | ZN Studio
- 📧 nickleo051216@gmail.com
- 📱 0932-684-051
- 💬 [LINE 客服](https://lin.ee/Faz0doj)
- 🧵 [Threads @nickai216](https://www.threads.com/@nickai216)

---

**最後更新**: 2025-01-13
**版本**: v1.0.0
