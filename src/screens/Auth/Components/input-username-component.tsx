import { useEffect, useState } from "react"
import { FieldValues, UseFormSetValue, Controller, Control } from "react-hook-form"
import { InputForm, Label, InputContainer } from "../../../shared/style/style"

type InputUsernameProps = {
  name: string
  label: string
  placeholder?: string
  defaultUsername?: string
  required?: boolean
  
  control: Control<FieldValues, any>
  setValue: UseFormSetValue<FieldValues>
}

export default function InputUsername(props: InputUsernameProps) {
  const [username, setUsername] = useState<string>('')

  useEffect(() => {
    if (props.setValue !== undefined) {
      props.setValue(props.name, props.defaultUsername!)
    }
    setUsername(props.defaultUsername!)
  }, [props.defaultUsername])

  return (
    <InputContainer>
      <Label>{props.label}</Label>
      <InputForm placeholder={props.placeholder || 'Informe esse campo...'}/>
      <Controller
        name={props.name}
        control={props.control}
        rules={{
          required: props.placeholder || 'Informe esse campo...'
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <InputForm
              onChange={onChange}
              defaultValue={value || name}
              label={props.label}
              variant='outlined'
            />
          )
        }}
      ></Controller>
    </InputContainer>
  )
}