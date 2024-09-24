import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  ViewAs: {
    id: 'MasqueradeBar.ViewAs',
    defaultMessage: '以此身份檢視: ',
    description: 'Label for the View as',
  },
  ViewingAs: {
    id: 'MasqueradeBar.ViewingAs',
    defaultMessage: '檢視身份: ',
    description: 'Label for the Viewing as',
  },
  SubmitButton: {
    id: 'MasqueradeBar.SubmitButton',
    defaultMessage: '提交',
    description: 'Label for the Submit button',
  },
  StudentNameInput: {
    id: 'MasqueradeBar.StudentNameInput',
    defaultMessage: '用戶名或電子郵件',
    description: 'Label for the Student Name or email input',
  },
  NoStudentFound: {
    id: 'MasqueradeBar.NoStudentFound',
    defaultMessage: '找不到具有此用戶名或電子郵件的學生',
    description: 'Error message when no student is found',
  },
  UnknownError: {
    id: 'MasqueradeBar.UnknownError',
    defaultMessage: '發生未知錯誤',
    description: 'Error message when an unknown error occurs',
  },
});

export default messages;
