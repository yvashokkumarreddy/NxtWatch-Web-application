import styled from 'styled-components'

export const GamingVideoItemListItemContainer = styled.li`
  width: 100%;
`

export const GamingVideoItemImg = styled.img`
  width: 100%;
`
export const HomeChannelTitle = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  width: 85%;
  font-size: 15px;
  font-family: Roboto;
  width: 100%;
`

export const HomeChannelName = styled.p`
  color: ${props => (props.isDark ? '#909090' : '#475569')};
  font-size: 13px;
  font-family: Roboto;
`
