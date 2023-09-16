import { ChangeEventHandler, useState } from 'react'

const validation = {
    email: {
        regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: 'Preencha um email válido'
    }
}

const useForm = (type?: 'email') => {
    const [value, setValue] = useState('')
    const [error, setError] = useState<string | null>(null)

    const validate = (value: string) => {
       
        if(value.length === 0){
            setError('Preencha um valor.')
            return false
        }
        
        if(type && validation[type] && !validation[type].regex.test(value)){
            setError(validation[type].message)
            return false
        } else {
            setError(null)
            return true
        }
    }

    const onChange: ChangeEventHandler<HTMLInputElement> = ({target}) => {
        validate(target.value)
        setValue(target.value)
    }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm