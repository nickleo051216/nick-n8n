import {
    Workflow,
    Bot,
    Database,
    Smartphone,
    Code,
    Globe,
    Wrench
} from 'lucide-react';

// 技能標籤 - 完整版
export const skills = [
    {
        name: "n8n / Make / Zapier",
        icon: Workflow,
        level: "Expert",
        details: "複雜流程設計、Error Handling、Webhook 串接、Zeabur 部署"
    },
    {
        name: "AI 工具 / API",
        icon: Bot,
        level: "Expert",
        details: "ChatGPT, Claude, Gemini, Whisper, GPT Vision, Threads API, Meta API"
    },
    {
        name: "Bot 開發",
        icon: Smartphone,
        level: "Advanced",
        details: "Line Bot, Line OA, Telegram Bot, Flex Message UI"
    },
    {
        name: "Database & Backend",
        icon: Database,
        level: "Advanced",
        details: "Supabase, Firebase, Google Sheets/Forms/Docs API, Outlook, Calendar"
    },
    {
        name: "Scripting",
        icon: Code,
        level: "Intermediate",
        details: "Python（基礎）, Google Apps Script (GAS), HTML"
    },
    {
        name: "領域專長",
        icon: Wrench,
        level: "Expert",
        details: "環境監測、報價/投標/請款流程、跨部門溝通協調、系統設計"
    }
];
