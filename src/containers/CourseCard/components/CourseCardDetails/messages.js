import { StrictDict } from 'utils';

export const messages = StrictDict({
  accessExpired: {
    id: 'learner-dash.courseCard.CourseCardDetails.accessExpired',
    description: 'Course access expiration date message on course card for expired access.',
    defaultMessage: '訪問已過期 {accessExpirationDate}',
  },
  accessExpires: {
    id: 'learner-dash.courseCard.CourseCardDetails.accessExpires',
    description: 'Course access expiration date message on course card.',
    defaultMessage: '訪問將於 {accessExpirationDate} 過期',
  },
  courseEnded: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseEnded',
    description: 'Course ended message on course card.',
    defaultMessage: '課程已結束 {endDate}',
  },
  courseEnds: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseEnds',
    description: 'Course ending message on course card.',
    defaultMessage: '課程將於 {endDate} 結束',
  },
  courseStarts: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseStarts',
    description: 'Course start date message on course card.',
    defaultMessage: '課程將於 {startDate} 開始',
  },
  unknownProviderName: {
    id: 'learner-dash.courseCard.CourseCardDetails.unknownProviderName',
    description: 'Provider name display when name is unknown',
    defaultMessage: '未知',
  },
  changeOrLeaveSessionButton: {
    id: 'learner-dash.courseCard.CourseCardDetails.changeOrLeaveSessionButton',
    description: 'Button for trigger change or leave session for entitlement course',
    defaultMessage: '更改或離開課程',
  },
});

export default messages;
