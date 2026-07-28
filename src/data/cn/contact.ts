import type { ContactFormContent } from '../types';

export const contactForm: ContactFormContent = {
  nameLabel: '姓名',
  organisationLabel: '组织 / 公司',
  emailLabel: '电子邮箱',
  projectTypeLabel: '项目类型',
  projectTypePlaceholder: '请选择项目类型',
  projectTypeOptions: [
    {
      value: 'circular-product-redesign',
      label: '循环产品再设计',
    },
    {
      value: 'sustainable-strategy',
      label: '可持续战略',
    },
    {
      value: 'workshops-and-training',
      label: '工作坊与培训',
    },
    {
      value: 'other',
      label: '其他',
    },
  ],
  messageLabel: '留言',
  requiredHint: '所有字段均为必填项。',
  submitLabel: '发送咨询',
  submittingLabel: '正在发送…',
  closeLabel: '关闭表单',
  successMessage: '感谢您的留言。咨询已成功发送。',
  errorMessage: '发送失败，请稍后重试。',
};
