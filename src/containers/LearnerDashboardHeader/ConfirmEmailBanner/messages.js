import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  confirmNowButton: {
    id: 'leanerDashboard.confirmEmailBanner',
    description: 'Button for sending confirm email and open modal',
    defaultMessage: '立即確認',
  },
  confirmEmailTextReminderBanner: {
    id: 'leanerDashboard.confirmEmailTextReminderBanner',
    description: 'Text for reminding user to confirm email',
    defaultMessage: '記得確認您的電子郵件，以便您可以繼續在 edX 上學習！{confirmNowButton}。',
  },
  verifiedConfirmEmailButton: {
    id: 'leanerDashboard.verifiedConfirmEmailButton',
    description: 'Button for verified confirming email',
    defaultMessage: '我已確認我的電子郵件',
  },
  confirmEmailModalHeader: {
    id: 'leanerDashboard.confirmEmailModalHeader',
    description: 'title for confirming email modal',
    defaultMessage: '確認您的電子郵件',
  },
  confirmEmailModalBody: {
    id: 'leanerDashboard.confirmEmailModalBody',
    description: 'text hint for confirming email modal',
    defaultMessage: '我們已經向您發送了一封驗證帳戶的電子郵件。請檢查您的收件箱並點擊大紅按鈕以確認並繼續學習。',
  },
  confirmEmailImageAlt: {
    id: 'leanerDashboard.confirmEmailImageAlt',
    description: 'text alt confirm email image',
    defaultMessage: '確認電子郵件背景',
  },
});

export default messages;
