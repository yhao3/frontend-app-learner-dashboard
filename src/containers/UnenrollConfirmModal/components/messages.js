/* eslint-disable quotes */
import { StrictDict } from 'utils';

export const messages = StrictDict({
  confirmHeader: {
    id: 'learner-dash.unenrollConfirm.confirm.header',
    description: 'Header for confirm unenroll modal',
    defaultMessage: '退選課程？',
  },
  confirmCancel: {
    id: 'learner-dash.unenrollConfirm.confirm.cancel',
    description: 'Cancel action for confirm unenroll modal',
    defaultMessage: '不用了',
  },
  confirmUnenroll: {
    id: 'learner-dash.unenrollConfirm.confirm.unenroll',
    description: 'Confirm action for confirm unenroll modal',
    defaultMessage: '退選',
  },
  reasonHeading: {
    id: 'learner-dash.unenrollConfirm.confirm.reason.heading',
    description: 'Heading for unenroll reason modal',
    defaultMessage: '您退選的主要原因是什麼？',
  },
  reasonSkip: {
    id: 'learner-dash.unenrollConfirm.confirm.reason.skip',
    description: 'Skip action for unenroll reason modal',
    defaultMessage: '跳過調查',
  },
  reasonSubmit: {
    id: 'learner-dash.unenrollConfirm.confirm.reason.submit',
    description: 'Submit action for unenroll reason modal',
    defaultMessage: '提交原因',
  },
  finishHeading: {
    id: 'learner-dash.unenrollConfirm.confirm.finish.heading',
    description: 'Heading for unenroll finish modal',
    defaultMessage: '您已退選',
  },
  finishThanksText: {
    id: 'learner-dash.unenrollConfirm.confirm.finish.thanks-text',
    description: 'Thank you message on unenroll modal for providing a reason',
    defaultMessage: '感謝您分享退選的原因。',
  },
  finishText: {
    id: 'learner-dash.unenrollConfirm.confirm.finish.text',
    description: 'Text for unenroll finish modal',
    defaultMessage: '此課程將從您的儀表板中移除。',
  },
  finishReturn: {
    id: 'learner-dash.unenrollConfirm.confirm.finish.return',
    description: 'Return action for unenroll finish modal',
    defaultMessage: '返回儀表板',
  },
});

export default messages;
