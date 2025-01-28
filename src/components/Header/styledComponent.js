import styled from 'styled-components'

export const HeaderWholeContainer = styled.div`
  padding: 20px;
  width: 100%;
  background-color: ${props => (props.isDark ? '#424242' : '#ffffff')};
`

export const HeaderListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  justify-content: space-between;
`
export const HeaderWebLogo = styled.img`
  width: 30%;
`

export const ProfileLogo = styled.img`
  width: 13%;
`

export const HeaderListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  width: 15%;
`

export const LogOutBtn = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 2px solid #3b82f6;
  color: #3b82f6;
  padding: 5px;
  border-radius: 5px;
  font-family: Roboto;
`
export const ThemeButton = styled.button`
  outline: none;
  cursor: pointer;
  border: 0px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  background-color: transparent;
  font-size: 20px;
`
export const PopupContainer = styled.div`
  background-color: #424242;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 0px;
`
export const PopupContainerPara = styled.p`
  color: #ffffff;
  font-family: Roboto;
`
export const PopupContainerBtn = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  padding: 10px;
  border-radius: 5px;
  border: ${props => (props.outline ? '1px' : '0px')} solid #ffffff;
  color: #ffffff;
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
`

export const PopupBtnContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`
