import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  url: yup.string().required(),
  preview: yup.string(),
  published: yup.boolean(),
  company_id: yup.string().nullable(),
});
