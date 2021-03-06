import React, { ChangeEvent } from 'react'
import { CheckBox } from 'components/inputs/CheckBox'
import { TFormik } from '@/types/formik'
import { getFieldError } from '@/utils/getFieldError'
import useTranslation from 'next-translate/useTranslation'
import { TCheckBoxProps } from '../types'

type TProps = {
  formik: TFormik
} & TCheckBoxProps

export const FormikCheckbox: React.FC<TProps> = ({ formik, ...props }) => {
  const { t } = useTranslation('common')
  const field = formik.getFieldProps(props.name)
  const { touched, error } = formik.getFieldMeta(props.name)

  const handlerChange = (e: ChangeEvent) => {
    field.onChange(e)

    // clear error
    if (error) return
    formik.setFieldError(props.name, '')
  }

  const fieldError = getFieldError({ touched, error, t })

  return <CheckBox {...props} {...field} onChange={handlerChange} error={fieldError} />
}
