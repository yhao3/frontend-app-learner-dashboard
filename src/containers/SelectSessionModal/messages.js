/* eslint-disable quotes */
import { StrictDict } from 'utils';

export const messages = StrictDict({
  changeOrLeaveHeader: {
    id: 'learner-dash.selectSession.changeOrLeaveHeader',
    description: 'Header for session that allow leave option',
    defaultMessage: '更改或離開課程？',
  },
  selectSessionHeader: {
    id: 'learner-dash.selectSession.selectSessionHeader',
    description: 'Header for unfulfilled entitlement',
    defaultMessage: '選擇課程',
  },
  changeOrLeaveHint: {
    id: 'learner-dash.selectSession.changeOrLeaveHint',
    description: 'Hint for session that allow leave option',
    defaultMessage: '當您更改為不同的課程時，您當前課程的任何進度或成績都將丟失。',
  },
  selectSessionHint: {
    id: 'learner-dash.selectSession.selectSessionHint',
    description: 'Hint for session that does not allow leave option',
    defaultMessage: '請記住，如果您改變主意，您有2週的時間可以退選並選擇不同的課程。',
  },
  leaveSessionOption: {
    id: 'learner-dash.selectSession.leaveSessionOption',
    description: 'Radio option for leave session',
    defaultMessage: '離開課程',
  },
  nevermind: {
    id: 'learner-dash.selectSession.nevermind',
    description: 'Cancel action for select session modal',
    defaultMessage: '沒關係',
  },
  confirmSession: {
    id: 'learner-dash.selectSession.confirmSession',
    description: 'Confirm action for select session modal',
    defaultMessage: '確認課程',
  },
});

export default messages;
