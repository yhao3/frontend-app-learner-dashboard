/* eslint-disable quotes */
import { StrictDict } from 'utils';

export const messages = StrictDict({
  header: {
    id: 'learner-dash.emailSettings.header',
    description: 'Header for email settings modal',
    defaultMessage: '接收課程郵件？',
  },
  emailsOff: {
    id: 'learner-dash.emailSettings.emailsOff',
    description: 'Toggle text for email settings modal when email is disabled',
    defaultMessage: '課程郵件已關閉',
  },
  emailsOn: {
    id: 'learner-dash.emailSettings.emailsOn',
    description: 'Toggle text for email settings modal when email is enabled',
    defaultMessage: '課程郵件已開啟',
  },
  description: {
    id: 'learner-dash.emailSettings.description',
    description: 'Description for email settings modal',
    defaultMessage: '課程郵件包含來自講師的課程重要資訊。',
  },
  nevermind: {
    id: 'learner-dash.emailSettings.nevermind',
    description: 'Cancel action for email settings modal',
    defaultMessage: '不用了',
  },
  save: {
    id: 'learner-dash.emailSettings.save',
    description: 'Save action for email settings modal',
    defaultMessage: '保存設置',
  },
});

export default messages;
