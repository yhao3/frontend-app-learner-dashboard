import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  recommendationsFeatureText: {
    id: 'RecommendationsPanel.recommendationsFeatureText',
    defaultMessage: '個人化推薦功能尚未開放。我們正在努力將其帶到您的學習者主頁。',
    description: 'recommendations feature text',
  },
  recommendationsAlertText: {
    id: 'RecommendationsPanel.recommendationsAlertText',
    defaultMessage: '當它可用時，您想收到通知嗎？',
    description: 'recommendations alerted text',
  },
  recommendationsModalHeading: {
    id: 'RecommendationsPanel.recommendationsModalHeading',
    defaultMessage: '感謝您的關注！',
    description: 'Heading of modal',
  },
  modalSkipButton: {
    id: 'RecommendationsPanel.modalSkipButton',
    defaultMessage: '暫時跳過',
    description: 'button for Skip for now',
  },
  modalCountMeButton: {
    id: 'RecommendationsPanel.modalCountMeButton',
    defaultMessage: '算我一份！',
    description: 'button for Count me in!',
  },
  recommendedForYou: {
    id: 'learnerVariantDashboard.recommendedForYou',
    defaultMessage: '為您推薦',
    description: 'Header link for recommended page.',
  },
  seeAllRecommendationsButton: {
    id: 'RecommendationsPanel.seeAllRecommendationsButton',
    defaultMessage: '查看所有推薦',
    description: 'Button to see all recommendations',
  },
});

export default messages;
