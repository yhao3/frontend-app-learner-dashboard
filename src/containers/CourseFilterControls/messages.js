import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  inProgress: {
    id: 'learner-dash.courseListFilters.inProgress',
    description: 'in-progress filter checkbox label for course list filters',
    defaultMessage: '進行中',
  },
  notStarted: {
    id: 'learner-dash.courseListFilters.notStarted',
    description: 'Not-Started filter checkbox label for course list filters',
    defaultMessage: '未開始',
  },
  done: {
    id: 'learner-dash.courseListFilters.done',
    description: 'done filter checkbox label for course list filters',
    defaultMessage: '已完成',
  },
  notEnrolled: {
    id: 'learner-dash.courseListFilters.notEnrolled',
    description: 'not-enrolled filter checkbox label for course list filters',
    defaultMessage: '未註冊',
  },
  upgraded: {
    id: 'learner-dash.courseListFilters.upgraded',
    description: 'upgraded filter checkbox label for course list filters',
    defaultMessage: '已升級',
  },
  clearAll: {
    id: 'learner-dash.courseListFilters.clearAll',
    description: 'clear all filters button text',
    defaultMessage: '清除全部',
  },
  sort: {
    id: 'learner-dash.courseListFilters.sort',
    description: 'Sort radio form heading',
    defaultMessage: '排序',
  },
  sortLastEnrolled: {
    id: 'learner-dash.courseListFilters.sortLastEnrolled',
    description: 'Last enrolled sort option text',
    defaultMessage: '最新註冊',
  },
  sortTitle: {
    id: 'learner-dash.courseListFilters.sortTitle',
    description: 'Title sort option text',
    defaultMessage: '標題 (A-Z)',
  },
  refine: {
    id: 'learner-dash.courseListFilters.refine',
    description: 'Filter button container text',
    defaultMessage: '篩選',
  },
});

export default messages;
