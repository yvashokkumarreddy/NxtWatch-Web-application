import styled from 'styled-components'

export const SideBarWholeContainer = styled.div`
  width: 200px;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#424242' : '#ffffff')};
  flex-shrink: 0;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 83vh;
`

export const SideBarListContainer = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  width: 100%;
  list-style-type: none;
`

export const LinkListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: ${props =>
    props.isActive ? '#ff0000' : props.isDark ? '#cccccc' : '#181818'};
  margin-bottom: 20px;
  min-width: 50%;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  background-color: ${props =>
    props.isActive ? (props.isDark ? '#909090' : '#cbd5e1') : 'transparent'};
  padding: 10px;
  border-radius: 5px;
`

export const SidebarBottomContainer = styled.div`
  padding: 10px;
`

export const SideBarContactUsPara = styled.p`
  font-weight: bold;
  color: ${props => (props.isDark ? '#cccccc' : '#181818')};
  padding: 10px;
`
export const SocialMediaLogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

export const SocialMediaLogo = styled.img`
  width: 20%;
`

export const SocialMediaPara = styled.p`
  font-weight: bold;
  color: ${props => (props.isDark ? '#cccccc' : '#181818')};
  padding: 10px;
  font-size: 13px;
`
