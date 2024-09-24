import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  enterpriseDialogHeader: {
    id: 'leanerDashboard.enterpriseDialogHeader',
    defaultMessage: '您可以訪問 {label} 儀表板',
    description: 'title for enterpise dashboard dialog',
  },
  enterpriseDialogBody: {
    id: 'leanerDashboard.enterpriseDialogBody',
    defaultMessage: '要訪問通過 {label} 提供給您的課程，請立即訪問 {label} 儀表板。',
    description: 'Body text for enterpise dashboard dialog',
  },
  enterpriseDialogDismissButton: {
    id: 'leanerDashboard.enterpriseDialogDismissButton',
    defaultMessage: '取消',
    description: 'Dismiss button to cancel visiting dashboard',
  },
  enterpriseDialogConfirmButton: {
    id: 'leanerDashboard.enterpriseDialogConfirmButton',
    defaultMessage: '前往儀表板',
    description: 'Confirm button to go to the dashboard url',
  },
});

export default messages;
