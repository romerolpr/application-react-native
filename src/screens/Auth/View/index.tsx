import { 
  Container, 
  FlexWrapper, 
  BoxWrapper, 
  BoxTitle,
  Title, 
  BoxGroup, 
  ForgotPassword,
  BoxButton,
  Button
} from '../Styles/style'
import { TextInput } from "@react-native-material/core";
import { useForm } from 'react-hook-form'
import { authInputFormDataInitial } from '../Model/auth';

type authInputFormData = {
  username: string
  password: string
}

const initialAuthInputFormData = {
  username: '',
  password: ''
}

export function Auth() {
  const methods = useForm<authInputFormData>({
    defaultValues: authInputFormDataInitial()
  })

  const { register, setValue, handleSubmit, control } = methods

  function Validation(data: authInputFormData) {

  }

  return (
    <Container>
      <FlexWrapper>
        <BoxTitle>
          <Title>Hello.</Title>
          <Title>Welcome Back</Title>
        </BoxTitle>
        <BoxWrapper>
          <BoxGroup>
            <TextInput label="Username" variant="standard"/>
          </BoxGroup>
          <BoxGroup>
            <TextInput label="Password" variant="standard"/>
            <ForgotPassword>Forgot Password?</ForgotPassword>
          </BoxGroup>
          <BoxButton>
            <BoxGroup>
              <Button title='Login' onPress={handleSubmit(Validation)}/>
            </BoxGroup>
            <BoxGroup>
              <Button title='Create Account' variant='text'/>
            </BoxGroup>
          </BoxButton>
        </BoxWrapper>
      </FlexWrapper>
    </Container>
  )
}