import styled from 'styled-components'

export const LoginFormWholebgContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#313131' : '#f9f9f9')};
`

export const LoginFormCard = styled.div`
  box-shadow: 1px 1px 1px 1px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f8fafc')};
`
export const LoginFormLogo = styled.img`
  width: 40%;
  align-self: center;
  margin-bottom: 30px;
`
export const InputLabel = styled.label`
  color: #64748b;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const InputEle = styled.input`
  width: 100%;
  border: 1px solid #475569;
  outline: none;
  color: #475569;
  border-radius: 5px;
  padding: 10px;
`
export const LoginBtn = styled.button`
  width: 100%;
  background-color: #3b82f6;
  outline: none;
  cursor: pointer;
  border: 0px;
  padding: 10px;
  color: #ffffff;
  font-family: Roboto;
  border-radius: 5px;
`

export const ErrorMsgPara = styled.p`
  color: #ff0000;
  font-family: Roboto;
`
