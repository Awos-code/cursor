import React from "react";
import { useTranslation } from "react-i18next";
import { GradientButton } from "./ui/gradient-button";

export default function InviteBotButton({ className = "" }) {
  const { t } = useTranslation();
  return (
    <GradientButton
      variant="variant"
      asChild
      className={className}
    >
      <a
        href="https://discord.com/oauth2/authorize?client_id=1374414380137185312&permissions=2150985024&integration_type=0&scope=bot"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('hero.invite')}
      </a>
    </GradientButton>
  );
} 