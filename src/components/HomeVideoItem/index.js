import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import styled from 'styled-components'

import NextWatchReactContext from '../../context/NextWatchReactContext'

import {
  VideoListItemContainer,
  VideoListItemThumbnail,
  VideoItemBottomContainer,
  HomeChannelImg,
  HomeChannelTitle,
  HomeChannelName,
  HomeChannelViewsTimmeContainer,
} from './styledComponents'

const StyledVideoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 30%;
  margin-right: 20px;
  margin-bottom: 40px;
`

const HomeVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} =
    videoDetails
  const {name, profileImageUrl} = channel
  const postedTime = formatDistanceToNow(new Date(publishedAt))
  return (
    <NextWatchReactContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <StyledVideoLink to={`/videos/${id}`}>
            <VideoListItemContainer>
              <VideoListItemThumbnail
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <VideoItemBottomContainer>
                <HomeChannelImg src={profileImageUrl} alt="channel logo" />
                <div>
                  <HomeChannelTitle isDark={isDark}>{title}</HomeChannelTitle>
                  <HomeChannelName>{name}</HomeChannelName>
                  <HomeChannelViewsTimmeContainer>
                    <HomeChannelName>{viewCount} views</HomeChannelName>
                    <HomeChannelName>{postedTime}</HomeChannelName>
                  </HomeChannelViewsTimmeContainer>
                </div>
              </VideoItemBottomContainer>
            </VideoListItemContainer>
          </StyledVideoLink>
        )
      }}
    </NextWatchReactContext.Consumer>
  )
}
export default HomeVideoItem
