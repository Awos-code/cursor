import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Здесь можно заменить на реальный API Discord или свой backend
const API_URL = "https://discord-status-api-mock.vercel.app/api/neurotune";

export default function DiscordStatus() {
  const { t } = useTranslation();
  const [data, setData] = useState({ status: "offline", guilds: 0, users: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      const res = await fetch("/api/bot-status");
      if (res.ok) {
        const json = await res.json();
        setData(json);
        setLoading(false);
      }
    }
    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-4 justify-center py-4 animate-fade-in-up">
      <span className={`w-3 h-3 rounded-full ${data.status === "online" ? "bg-green-400 shadow-[0_0_8px_2px_rgba(34,197,94,0.7)]" : "bg-gray-500"} inline-block`} title={data.status === "online" ? "Online" : "Offline"} />
      <span className="text-white font-semibold text-base">{loading ? t('discord.loading') : data.status === "online" ? t('discord.online') : t('discord.offline')}</span>
      <span className="text-purple-400">{data.guilds} {t('discord.servers')}</span>
      <span className="text-blue-400">{data.users} {t('discord.users')}</span>
    </div>
  );
} 