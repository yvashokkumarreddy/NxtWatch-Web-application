import styled from 'styled-components'

export const TrendingVideoItemListContainer = styled.li`
  display: flex;
  width: 100%;
`
export const TrendingVideoItemImage = styled.img`
  width: 30%;
  margin-right: 20px;
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

export const HomeChannelViewsTimmeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
