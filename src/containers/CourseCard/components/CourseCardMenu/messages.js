import { StrictDict } from 'utils';

export const messages = StrictDict({
  unenroll: {
    id: 'learner-dash.courseCardMenu.unenroll',
    description: 'Course unenroll menu button',
    defaultMessage: '退選',
  },
  dropdownAlt: {
    id: 'learner-dash.courseCardMenu.dropdownAlt',
    description: 'Course action menu alt-text',
    defaultMessage: '課程操作下拉選單',
  },
  emailSettings: {
    id: 'learner-dash.courseCardMenu.emailSettings',
    description: 'Course email settings menu button',
    defaultMessage: '電子郵件設定',
  },
  shareToFacebook: {
    id: 'learner-dash.courseCardMenu.shareToFacebook',
    description: 'Course Facebook Sharing button',
    defaultMessage: '分享到 Facebook',
  },
  shareToTwitter: {
    id: 'learner-dash.courseCardMenu.shareToTwitter',
    description: 'Course Twitter Sharing button',
    defaultMessage: '分享到 Twitter',
  },
  shareQuote: {
    id: 'learner-dash.courseCardMenu.shareQuote',
    description: 'Social sharing quote',
    defaultMessage: '我正在和 {socialBrand} 一起在線上學習 {courseName}。快來看看吧！',
  },
});

export default messages;
