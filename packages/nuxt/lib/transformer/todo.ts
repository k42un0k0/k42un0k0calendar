import * as yup from 'yup'
export const cardSchema = yup.object({
  title: yup.string().required().default(''),
  detail: yup.string().default(''),
})
