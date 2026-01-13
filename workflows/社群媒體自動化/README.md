# 📱 社群媒體自動化系列

> 自動化社群經營，節省 80% 發文時間，提升互動效率

本系列專注於 Instagram、Facebook、Threads 等社群平台的自動化解決方案，包含自動發文、智能回覆、內容同步等功能。

---

## 📋 工作流列表

### 1. IG & FB 自動發文
**檔案**: `IG & FB 自動發文-g5d0g7VUIM87J3X8.json`

**功能說明**:
- 跨平台同步發布內容
- 支援圖文並茂貼文
- 排程自動發文
- 統一管理多個社群帳號

**適用場景**:
- 品牌社群經營
- 內容創作者
- 電商行銷

**技術亮點**:
- Meta Graph API 整合
- 批次處理發文
- 錯誤重試機制

**難度**: ⭐⭐⭐ (進階)

---

### 2. IG 串接自動回覆
**檔案**: `ig 串接 自動回覆-At6wOrd76e24HvPB.json`

**功能說明**:
- Instagram 留言自動回覆
- 私訊智能處理
- 關鍵字觸發回覆
- AI 生成個性化回覆

**適用場景**:
- 品牌客戶服務
- 粉絲互動管理
- 活動留言處理

**技術亮點**:
- Instagram Graph API
- Webhook 即時通知
- AI 智能回覆

**難度**: ⭐⭐⭐ (進階)

---

### 3. Threads 自動發文
**檔案**: `threadsAUTO-S4DLz2IyXi3th9RZ.json`

**功能說明**:
- Meta Threads 平台自動發文
- 支援文字與圖片
- 排程發布功能
- 發文數據追蹤

**適用場景**:
- 新興平台搶佔先機
- 跨平台內容分發
- 品牌曝光擴展

**技術亮點**:
- Threads API 串接
- 內容格式優化
- 發文時機控制

**難度**: ⭐⭐⭐ (進階)

---

### 4. Threads AUTO LINE
**檔案**: `threadsAUTO LINE-pnS1THZ7AKj4hEP6.json`

**功能說明**:
- Threads 與 LINE 跨平台整合
- 留言通知到 LINE
- LINE 觸發 Threads 發文
- 雙向訊息同步

**適用場景**:
- 社群管理員工具
- 即時互動通知
- 內容分發管理

**技術亮點**:
- 跨平台 API 整合
- 即時通知機制
- 雙向資料流

**難度**: ⭐⭐⭐ (進階)

---

### 5. 網站發文系統
**檔案**: `網站發文-3muwgkW0nOWyWI9H.json`

**功能說明**:
- 部落格自動更新
- 社群同步發布
- SEO 優化處理
- 內容版本管理

**適用場景**:
- 內容行銷
- 部落格經營
- 新聞媒體

**難度**: ⭐⭐ (中級)

---

### 6. Meta 權杖更新
**檔案**: `Mata 權杖更新-XSMDRRV595gOhgzB.json`

**功能說明**:
- 自動更新 Meta Access Token
- Token 過期提醒
- 無縫續期機制
- 多帳號管理

**適用場景**:
- 長期運行的自動化系統
- 維護多個 Meta 帳號
- 企業級應用

**技術亮點**:
- OAuth2 Token 刷新
- 自動化憑證管理
- 過期監控告警

**難度**: ⭐⭐ (中級)

---

## 🛠️ 共通技術棧

### 核心節點
- **Webhook Trigger** - 接收平台通知
- **HTTP Request** - API 呼叫
- **Schedule Trigger** - 排程任務
- **Code Node** - 資料處理
- **Google Sheets** - 內容管理

### 外部服務
- Meta Graph API (Facebook, Instagram, Threads)
- LINE Messaging API
- Google Sheets API
- WordPress REST API
- OpenAI API (內容優化)

---

## 🚀 快速開始

### 前置需求

#### 1. Meta Developer Account
1. 前往 [Meta for Developers](https://developers.facebook.com/)
2. 建立應用程式
3. 加入 Instagram Basic Display / Instagram Graph API
4. 取得以下憑證：
   - App ID
   - App Secret
   - Access Token
   - Instagram Business Account ID

#### 2. Instagram Business Account
- 必須是商業帳號（不支援個人帳號）
- 連結到 Facebook 粉絲專頁
- 完成 Meta Business Suite 設定

#### 3. Threads Account
- 使用 Instagram 帳號登入 Threads
- 確認 Threads API 權限

---

## 📦 Meta API 設定指南

### Step 1: 建立 Meta App

```bash
1. 前往 https://developers.facebook.com/apps/
2. 點選「建立應用程式」
3. 選擇「商業」類型
4. 填寫應用程式資訊
5. 新增產品：Instagram Basic Display
```

### Step 2: 設定 Instagram 權限

需要的權限：
- `instagram_basic`
- `instagram_content_publish`
- `instagram_manage_comments`
- `instagram_manage_messages`
- `pages_show_list`
- `pages_read_engagement`

### Step 3: 取得長期 Token

```javascript
// 短期 Token 換長期 Token
GET https://graph.facebook.com/oauth/access_token?
  grant_type=fb_exchange_token&
  client_id={app-id}&
  client_secret={app-secret}&
  fb_exchange_token={short-lived-token}
```

### Step 4: 設定 Webhook

```
Webhook URL: https://your-n8n.com/webhook/instagram
Verify Token: your_verify_token
訂閱欄位: comments, messages, mentions
```

---

## 💡 使用技巧

### Tip 1: 內容排程策略

使用 Google Sheets 管理發文內容：

| 發布時間 | 平台 | 文字內容 | 圖片URL | Hashtags | 狀態 |
|---------|------|---------|---------|----------|------|
| 2025-01-14 09:00 | IG,FB | 早安文案 | https://... | #早安 #正能量 | 待發布 |
| 2025-01-14 12:00 | Threads | 午餐推薦 | https://... | #美食 | 待發布 |

### Tip 2: Hashtag 優化

```javascript
// 自動加入相關 Hashtags
function addHashtags(content, platform) {
  const hashtags = {
    'IG': '#instagood #photooftheday',
    'FB': '#Facebook #社群經營',
    'Threads': '#ThreadsApp #MetaThreads'
  };

  return `${content}\n\n${hashtags[platform]}`;
}
```

### Tip 3: 圖片處理

```javascript
// 確保圖片符合平台規範
const imageSpecs = {
  'IG': { width: 1080, height: 1080, ratio: '1:1' },
  'FB': { width: 1200, height: 630, ratio: '1.91:1' },
  'Threads': { width: 1080, height: 1350, ratio: '4:5' }
};
```

### Tip 4: 最佳發文時間

```javascript
// 根據受眾活躍時間發文
const bestTimes = {
  'weekday': ['09:00', '12:00', '18:00', '21:00'],
  'weekend': ['10:00', '14:00', '20:00']
};
```

---

## 📊 自動化效益

### 發文效率提升
- ✅ 節省 **80%** 手動發文時間
- ✅ 支援 **批次處理** 多則貼文
- ✅ **跨平台同步**，一次發布多處

### 互動管理優化
- ✅ **即時回覆** 粉絲留言
- ✅ **24/7** 自動客服
- ✅ 提升粉絲滿意度 **50%+**

### 數據追蹤
- ✅ 發文效果自動記錄
- ✅ 互動數據分析
- ✅ ROI 追蹤報表

---

## 🔧 進階自訂

### 自動回覆範本

```javascript
// IG 留言自動回覆邏輯
const comment = $json.text.toLowerCase();

if (comment.includes('價格') || comment.includes('多少錢')) {
  return {
    reply: '感謝您的詢問！私訊小編為您報價 😊',
    action: 'send_dm'
  };
}

if (comment.includes('哪裡買') || comment.includes('連結')) {
  return {
    reply: '購買連結：https://yourshop.com 🛒',
    action: 'reply_comment'
  };
}

// 使用 AI 生成回覆
return {
  reply: await generateAIReply(comment),
  action: 'reply_comment'
};
```

### 內容 A/B 測試

```javascript
// 測試不同版本的文案
const versions = [
  { text: '版本A文案', image: 'imageA.jpg' },
  { text: '版本B文案', image: 'imageB.jpg' }
];

// 隨機選擇版本
const selectedVersion = versions[Math.floor(Math.random() * versions.length)];
```

---

## ⚠️ 注意事項

### API 限制
- Instagram Graph API: 200 calls/hour per user
- Facebook Graph API: 200 calls/hour per user
- Threads API: 依照 Meta 最新限制

### 內容政策
- ✅ 遵守各平台社群守則
- ✅ 避免垃圾訊息
- ✅ 不濫用自動化功能
- ✅ 保持內容品質

### 安全建議
- 🔒 使用環境變數儲存 API Keys
- 🔒 定期更新 Access Tokens
- 🔒 啟用 Two-Factor Authentication
- 🔒 監控異常活動

---

## 🐛 常見問題

### Q1: Access Token 過期怎麼辦？
**解決方案**:
使用「Meta 權杖更新」workflow 自動續期

### Q2: 無法發布到 Instagram？
**檢查清單**:
- [ ] 帳號類型是否為商業帳號
- [ ] 是否已連結 Facebook 粉絲專頁
- [ ] 圖片格式是否符合規範
- [ ] API 權限是否正確設定

### Q3: Webhook 沒有收到留言通知？
**解決方案**:
1. 確認 Webhook 訂閱設定
2. 檢查 Verify Token 正確性
3. 測試 Webhook URL 可訪問性

### Q4: 發文失敗率高？
**優化建議**:
- 加入重試機制
- 檢查內容是否違反政策
- 確認網路連線穩定
- 分散發文時間避免 Rate Limit

---

## 📚 延伸學習

### 官方文件
- [Meta Graph API 文件](https://developers.facebook.com/docs/graph-api/)
- [Instagram API 文件](https://developers.facebook.com/docs/instagram-api/)
- [Threads API 文件](https://developers.facebook.com/docs/threads/)

### 最佳實踐
- [Instagram 發文最佳時間研究](https://later.com/blog/best-time-to-post-on-instagram/)
- [Facebook 演算法優化](https://www.facebook.com/business/news/insights/)
- [Hashtag 策略指南](https://www.instagram.com/business/)

---

## 🎯 實戰案例

### 案例 1: 電商品牌每日發文
**成果**:
- 每日自動發布 3-5 則貼文
- 互動率提升 120%
- 節省社群小編 4 小時/天

### 案例 2: KOL 多平台經營
**成果**:
- 同步管理 IG、FB、Threads
- 粉絲增長 300%/月
- 留言回覆時效 < 5 分鐘

---

## 📞 需要協助？

**Nick Chang** | ZN Studio
- 📧 nickleo051216@gmail.com
- 📱 0932-684-051
- 💬 [LINE 客服](https://lin.ee/Faz0doj)
- 🧵 [Threads @nickai216](https://www.threads.com/@nickai216)

---

**最後更新**: 2025-01-13
**版本**: v1.0.0
