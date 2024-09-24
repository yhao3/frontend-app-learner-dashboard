import { StrictDict } from 'utils';

export const messages = StrictDict({
  auditAccessExpired: {
    id: 'learner-dash.courseCard.banners.auditAccessExpired',
    description: 'Audit access expiration banner message',
    defaultMessage: '您的旁聽訪問已過期。',
  },
  upgradeToAccess: {
    id: 'learner-dash.courseCard.banners.upgradeToAccess',
    description: 'Upgrade prompt for audit-expired learners that can still upgrade',
    defaultMessage: '立即升級以再次訪問您的課程。',
  },
  findAnotherCourse: {
    id: 'learner-dash.courseCard.banners.findAnotherCourse',
    description: 'Action prompt taking learners to course exploration',
    defaultMessage: '尋找其他課程',
  },
  upgradeDeadlinePassed: {
    id: 'learner-dash.courseCard.banners.upgradeDeadlinePassed',
    description: 'Audit upgrade deadline passed banner message',
    defaultMessage: '您的課程升級截止日期已過。要升級，請註冊一個更遠的課程。',
  },
  exploreCourseDetails: {
    id: 'learner-dash.courseCard.banners.exploreCourseDetails',
    description: 'Action prompt taking learners to course details page',
    defaultMessage: '探索課程詳情。',
  },
  certRestricted: {
    id: 'learner-dash.courseCard.banners.certificateRestricted',
    description: 'Restricted certificate warning message',
    defaultMessage: '您的成績證書正在等待確認中。',
  },
  certRestrictedNoEmail: {
    id: 'learner-dash.courseCard.banners.certificateRestrictedNoEmail',
    description: 'Restricted certificate warning message',
    defaultMessage: '您的成就證書正在等待確認，以確保證書的發放符合美國對伊朗、古巴、敘利亞和蘇丹的嚴格禁運。如果您認為我們的系統錯誤地將您識別為與這些國家之一有關，請告訴我們。',
  },
  certRefundContactBilling: {
    id: 'learner-dash.courseCard.banners.certificateRefundContactBilling',
    description: 'Message to learners to contact billing for certificate refunds',
    defaultMessage: '如果您希望退還成就證書，請聯繫我們的賬單地址 {billingEmail}',
  },
  certRefundContactBillingNoEmail: {
    id: 'learner-dash.courseCard.banners.certificateRefundContactBillingNoEmail',
    description: 'Message to learners to contact billing for certificate refunds',
    defaultMessage: '如果您希望退還成就證書，請聯繫我們。',
  },
  passingGrade: {
    id: 'learner-dash.courseCard.banners.passingGrade',
    description: 'Message to learners with minimum passing grade for the course',
    defaultMessage: '通過課程所需的成績：{minPassingGrade}\u200f%',
  },
  notEligibleForCert: {
    id: 'learner-dash.courseCard.banners.notEligibleForCert',
    description: 'Certificate inelligibility message',
    defaultMessage: '您不符合獲得證書的資格。',
  },
  viewGrades: {
    id: 'learner-dash.courseCard.banners.viewGrades',
    description: 'Gradses link text',
    defaultMessage: '查看成績。',
  },
  certReady: {
    id: 'learner-dash.courseCard.banners.certReady',
    description: 'Certificate ready message',
    defaultMessage: '恭喜。您的證書已準備好。',
  },
  viewCertificate: {
    id: 'learner-dash.courseCard.banners.viewCertificate',
    description: 'Certificate link text',
    defaultMessage: '查看證書。',
  },
  certMinGrade: {
    id: 'learner-dash.courseCard.banners.certMinGrade',
    description: 'Passing grade requirement message',
    defaultMessage: '獲得證書所需的成績：{minPassingGrade}\u200f%',
  },
  downloadCertificate: {
    id: 'learner-dash.courseCard.banners.downloadCertificate',
    description: 'Certificate download link text',
    defaultMessage: '下載證書。',
  },
  gradeAndCertReadyAfter: {
    id: 'learner-dash.courseCard.banners.gradseAndCertReadyAfter',
    description: 'Grade and certificate availability date message',
    defaultMessage: '您的成績和證書將在 {availableDate} 之後準備好。',
  },
  entitlementUnavailable: {
    id: 'learner-dash.courseCard.banners.entitlementUnavailable',
    description: 'Entitlement course message when no sessions are available',
    defaultMessage: '目前沒有可用的課程。課程團隊將很快創建新的課程。如果沒有顯示課程，請聯繫 {emailLink} 獲取信息。',
  },
  entitlementExpiringSoon: {
    id: 'learner-dash.courseCard.banners.entitlementExpiringSoon',
    description: 'Entitlement course message when the entitlement is expiring soon.',
    defaultMessage: '您必須在 {changeDeadline} 之前 {selectSessionButton} 以訪問課程。',
  },
  entitlementExpired: {
    id: 'learner-dash.courseCard.banners.entitlementExpired',
    description: 'Entitlement course message when the entitlement is expired.',
    defaultMessage: '您無法再更改課程。',
  },
  selectSession: {
    id: 'learner-dash.courseCard.banners.selectSession',
    description: 'Entitlement session selection link text',
    defaultMessage: '選擇課程',
  },
  prerequisitesNotMet: {
    id: 'learner-dash.courseCard.banners.prerequisitesNotMet',
    description: 'Message to learners with unmet prerequisites',
    defaultMessage: '您尚未滿足先決條件，因此無法訪問此課程。',
  },
  courseHasNotStarted: {
    id: 'learner-dash.courseCard.banners.courseHasNotStarted',
    description: 'Course has not started message',
    defaultMessage: '您尚未能訪問此課程，因為課程尚未開始。課程將於 {startDate} 開始。',
  },
});

export default messages;
