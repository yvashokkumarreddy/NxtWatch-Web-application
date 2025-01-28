import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import styled from 'styled-components'

import NextWatchReactContext from '../../context/NextWatchReactContext'

import {
  TrendingVideoItemListContainer,
  TrendingVideoItemImage,
  HomeChannelTitle,
  HomeChannelName,
  HomeChannelViewsTimmeContainer,
} from './styledComponents'

const StyledVideoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 90%;
  margin-bottom: 40px;
`

const SavedVideoDetails = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} =
    videoDetails
  const {name} = channel
  const postedTime = formatDistanceToNow(new Date(publishedAt))

  return (
    <NextWatchReactContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <StyledVideoLink to={`/videos/${id}`}>
            <TrendingVideoItemListContainer>
              <TrendingVideoItemImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <div>
                <HomeChannelTitle isDark={isDark}>{title}</HomeChannelTitle>
                <HomeChannelName isDark={isDark}>{name}</HomeChannelName>
                <HomeChannelViewsTimmeContainer>
                  <HomeChannelName>{viewCount} views</HomeChannelName>
                  <HomeChannelName>{postedTime}</HomeChannelName>
                </HomeChannelViewsTimmeContainer>
              </div>
            </TrendingVideoItemListContainer>
          </StyledVideoLink>
        )
      }}
    </NextWatchReactContext.Consumer>
  )
}

export default SavedVideoDetails
