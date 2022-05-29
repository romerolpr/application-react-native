import styled from "styled-components/native";
import { TextInput } from '@react-native-material/core'

export const InputContainer = styled.View`
  flex: 1
`

export const Label = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`

export const InputForm = styled(TextInput)``