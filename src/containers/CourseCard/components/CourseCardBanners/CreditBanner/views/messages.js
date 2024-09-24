import { StrictDict } from 'utils';

export const messages = StrictDict({
  approved: {
    id: 'learner-dash.courseCard.banners.credit.approved',
    description: '',
    defaultMessage: '{congratulations} {providerName} 已經批准了您的課程學分申請。要查看您的課程學分，請訪問 {linkToProviderSite} 網站。',
  },
  congratulations: {
    id: 'learner-dash.courseCard.banners.credit.congratulations',
    description: '',
    defaultMessage: '恭喜！',
  },
  eligible: {
    id: 'learner-dash.courseCard.banners.credit.eligible',
    description: '',
    defaultMessage: '您已完成此課程，並有資格購買課程學分。選擇 {getCredit} 開始。',
  },
  eligibleFromProvider: {
    id: 'learner-dash.courseCard.banners.credit.eligibleFromProvider',
    description: '',
    defaultMessage: '您現在有資格獲得 {providerName} 的學分。恭喜！',
  },
  getCredit: {
    id: 'learner-dash.courseCard.banners.credit.getCredit',
    description: '',
    defaultMessage: '獲取學分',
  },
  mustRequest: {
    id: 'learner-dash.courseCard.banners.credit.mustRequest',
    description: '',
    defaultMessage: '感謝您的付款。要獲得課程學分，您必須在 {linkToProviderSite} 網站申請學分。選擇 {requestCredit} 開始。',
  },
  received: {
    id: 'learner-dash.courseCard.banners.credit.received',
    description: '',
    defaultMessage: '{providerName} 已收到您的課程學分申請。我們將在學分處理完成後通知您。',
  },
  rejected: {
    id: 'learner-dash.courseCard.banners.credit.rejected',
    description: '',
    defaultMessage: '{providerName} 未批准您的課程學分申請。欲了解更多信息，請直接聯繫 {linkToProviderSite}。',
  },
  requestCredit: {
    id: 'learner-dash.courseCard.banners.credit.requestCredit',
    description: '',
    defaultMessage: '申請學分',
  },
  viewCredit: {
    id: 'learner-dash.courseCard.banners.credit.viewCredit',
    description: '',
    defaultMessage: '查看學分',
  },
  viewDetails: {
    id: 'learner-dash.courseCard.banners.credit.viewDetails',
    description: '',
    defaultMessage: '查看詳情',
  },
});

export default messages;
