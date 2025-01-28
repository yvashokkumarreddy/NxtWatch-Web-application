import styled from 'styled-components'

export const VideoListItemContainer = styled.li`
  width: 100%;
`

export const VideoListItemThumbnail = styled.img`
  width: 100%;
`
export const VideoItemBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const HomeChannelImg = styled.img`
  width: 10%;
  margin-top: 10px;
  align-self: flex-start;
  margin-right: 10px;
`
export const HomeChannelTitle = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  width: 85%;
  font-size: 15px;
  font-family: Roboto;
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
