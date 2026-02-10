import {
    Calendar,
    Mail,
    ExternalLink,
    Cpu,
    Database,
    Bot,
    MessageSquare,
    Bell,
    FileText,
    CreditCard,
    Image,
    Mic,
    Globe,
    Send,
    Users,
    Newspaper,
    BookOpen,
    ShoppingCart,
    Search,
    Video,
    PartyPopper,
    Smartphone,
    Workflow
} from 'lucide-react';

// 專案作品 - 完整 33+ 項
export const projects = [
    // ▌智能助理與聊天機器人
    {
        id: 1,
        title: "智能行事曆幫手",
        category: "chatbot",
        description: "Line Bot 上傳海報、輸入語音、文字訊息都可立即新增活動在行事曆，支援查詢與刪除。",
        tags: ["GPT Vision", "Whisper", "n8n", "Calendar", "Line Bot"],
        icon: Calendar
    },
    {
        id: 2,
        title: "AI 多模態聊天機器人",
        category: "chatbot",
        description: "GPT-4o + Whisper + Line Bot，支援語音、圖片、文字多種輸入模式的全能聊天機器人。",
        tags: ["GPT-4o", "Whisper", "Line Bot", "多模態"],
        icon: Bot
    },
    {
        id: 3,
        title: "Line Bot 動態綁定 Google Sheets 查詢系統",
        category: "chatbot",
        description: "支援 Flex Message UI、用戶個人綁定試算表、多工作表智能搜尋、分頁導航、自動偵測欄位設定。",
        tags: ["GAS", "Line Bot", "Google Sheets API", "Flex Message"],
        icon: Database
    },
    {
        id: 4,
        title: "Telegram 機器人智能聊天",
        category: "chatbot",
        description: "支援通知串接功能的 Telegram 智能聊天機器人。",
        tags: ["Telegram Bot", "AI", "通知系統"],
        icon: MessageSquare
    },

    // ▌社群媒體自動化
    {
        id: 5,
        title: "跨平台自動發文系統",
        category: "social",
        description: "一鍵同步發布至 Threads、IG、FB 粉專。包含 Meta 權杖自動更新機制。",
        tags: ["GPT", "Threads API", "Meta API", "Line Bot"],
        icon: ExternalLink
    },
    {
        id: 6,
        title: "Threads 自動回覆留言",
        category: "social",
        description: "根據留言內容智能回覆，實現社群互動自動化。",
        tags: ["Threads API", "AI", "自動回覆"],
        icon: MessageSquare
    },
    {
        id: 7,
        title: "IG 自動回覆私訊",
        category: "social",
        description: "根據關鍵字觸發自動寄信，將社群互動轉化為商業機會。",
        tags: ["Meta API", "IG", "自動化", "Email"],
        icon: Send
    },
    {
        id: 8,
        title: "WordPress 自動發文",
        category: "social",
        description: "支援草稿或直接發布，自動化內容管理流程。",
        tags: ["WordPress API", "n8n", "CMS"],
        icon: Globe
    },

    // ▌企業流程自動化
    {
        id: 9,
        title: "報價系統",
        category: "business",
        description: "串接後段資料庫，自動化報價流程，支援雲端同步、即時計算篩選並調整報價狀態。",
        tags: ["n8n", "PDF Generation", "CRM", "Line Bot"],
        icon: FileText
    },
    {
        id: 10,
        title: "報名系統串金流綠界",
        category: "business",
        description: "自動開訂單，含審核機制，串接綠界金流系統。",
        tags: ["綠界", "金流", "n8n", "審核機制"],
        icon: ShoppingCart
    },
    {
        id: 11,
        title: "客戶送樣品分析自動通知系統",
        category: "business",
        description: "根據是否有報價予以不同通知，從 Line OA 一次完成資料填寫、AI 檢查、收樣確認與回覆。",
        tags: ["Line OA", "n8n", "AI 檢查", "自動通知"],
        icon: Bell
    },
    {
        id: 12,
        title: "Line 選單串接業務系統",
        category: "business",
        description: "整合業務流程於 Line OA，即時更新案件進度，7/24 進度狀態查詢。",
        tags: ["Line OA", "業務系統", "n8n"],
        icon: Smartphone
    },
    {
        id: 13,
        title: "陌生開發信自動寄信並通知",
        category: "business",
        description: "自動化行銷流程，批量寄送開發信並追蹤回覆。",
        tags: ["Email", "n8n", "行銷自動化"],
        icon: Mail
    },
    {
        id: 14,
        title: "政府採購網爬蟲",
        category: "crawler",
        description: "自動抓取政府採購資訊，即時回報並回應給客戶。",
        tags: ["Web Scraping", "n8n", "政府開放資料"],
        icon: Search
    },

    // ▌資料處理與整合
    {
        id: 15,
        title: "AI 名片掃描與整理",
        category: "data",
        description: "Line Bot 上傳名片照片，自動辨識並記錄到 Google Sheets。",
        tags: ["GPT Vision", "n8n", "Google Sheets", "Line Bot"],
        icon: Image
    },
    {
        id: 16,
        title: "信用卡消費通知彙整系統",
        category: "data",
        description: "自動抓取 Outlook 消費通知，彙整至 Google Sheets 並推播至 Line。",
        tags: ["Outlook", "n8n", "Google Sheets", "Line Bot"],
        icon: CreditCard
    },
    {
        id: 17,
        title: "海報活動自動排程",
        category: "data",
        description: "上傳海報圖片，AI 自動辨識活動資訊並排入行事曆。",
        tags: ["GPT Vision", "Calendar", "Line Bot"],
        icon: Calendar
    },
    {
        id: 18,
        title: "無字幕影片自動上字幕",
        category: "data",
        description: "上傳影片後透過 AI 自動辨識語音並回傳有字幕影片。",
        tags: ["Whisper", "n8n", "影片處理"],
        icon: Video
    },

    // ▌學習與通知系統
    {
        id: 19,
        title: "iPAS 模擬考每日題目系統",
        category: "learning",
        description: "每日自動出題練習，支援更新到 Discord、Line 社群、模擬考系統。",
        tags: ["GPT", "n8n", "Google Sheets/Form", "Line Bot"],
        icon: BookOpen
    },
    {
        id: 20,
        title: "每天生成 10 個多益英文題目",
        category: "learning",
        description: "自動化英文學習系統，每日 AI 生成多益模擬題。",
        tags: ["GPT", "n8n", "英文學習"],
        icon: BookOpen
    },
    {
        id: 21,
        title: "每日氣象推播",
        category: "learning",
        description: "每天自動推播天氣資訊到 Line。",
        tags: ["GAS", "Line Bot", "氣象 API"],
        icon: Bell
    },
    {
        id: 22,
        title: "每天發布科技新聞",
        category: "learning",
        description: "GAS 自動發布在 Line 社群，支援追蹤點擊數。",
        tags: ["GAS", "Line 社群", "新聞爬蟲"],
        icon: Newspaper
    },

    // ▌Vibe Coding 系統
    {
        id: 23,
        title: "AI 考試模擬系統",
        category: "vibe",
        description: "練習資策會、經濟部 AI 顧問考題的完整模擬考系統。",
        tags: ["React", "AI", "模擬考", "Vibe Coding"],
        icon: BookOpen
    },
    {
        id: 24,
        title: "環境監測系統平台",
        category: "vibe",
        description: "空氣/噪音/水質儀表板，行程安排顯示的全方位監測平台。",
        tags: ["React", "儀表板", "環境監測", "Vibe Coding"],
        icon: Cpu
    },
    {
        id: 25,
        title: "業務系統",
        category: "vibe",
        description: "自動抓取政府開放資料，即時回報並回應給客戶、結合 Line Bot 達到 7/24 進度查詢。",
        tags: ["React", "Line Bot", "CRM", "Vibe Coding"],
        icon: Users
    },
    {
        id: 26,
        title: "愛情互動網站",
        category: "vibe",
        description: "留言、照片、紀念日與時間軸同步的互動平台。",
        tags: ["React", "互動設計", "Vibe Coding"],
        icon: PartyPopper
    }
];

// 專案分類
export const categories = [
    { id: 'all', name: '全部', count: 26 },
    { id: 'chatbot', name: '智能助理', count: 4 },
    { id: 'social', name: '社群自動化', count: 4 },
    { id: 'business', name: '企業流程', count: 6 },
    { id: 'data', name: '資料處理', count: 4 },
    { id: 'learning', name: '學習通知', count: 4 },
    { id: 'crawler', name: '爬蟲', count: 1 },
    { id: 'vibe', name: 'Vibe Coding', count: 4 }
];
