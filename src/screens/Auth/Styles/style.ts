import styled from 'styled-components/native'
import { Button as ButtonMUI } from '@react-native-material/core'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const Button = styled(ButtonMUI)`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  padding: 10px;
`

export const Paragraph = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY}
`

export const FlexWrapper = styled.View`
  flex: 0.5;
  width: 100%;
  padding: 10px;
`

export const BoxTitle = styled.View`
  flex: 1;
  justify-content: center;
  padding: 50px 0;
  margin-bottom: 10px;
`

export const BoxWrapper = styled.View`
  flex: 1;
  padding: 10px;
`

export const BoxGroup = styled.View`
  width: 100%;
  margin: 5px 0;
`

export const Title = styled.Text`
  font-size: 34px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`

export const ForgotPassword = styled.Text`
  font-size: 14px;
  text-align: right;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY_1};
  margin: 20px 0;
`

export const BoxButton = styled.View`
  margin-top: 25px;
`
