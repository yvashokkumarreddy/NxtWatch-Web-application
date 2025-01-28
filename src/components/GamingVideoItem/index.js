import {Link} from 'react-router-dom'

import styled from 'styled-components'

import NextWatchReactContext from '../../context/NextWatchReactContext'

import {
  GamingVideoItemListItemContainer,
  GamingVideoItemImg,
  HomeChannelTitle,
  HomeChannelName,
} from './styledComponents'

const StyledVideoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 20%;
  margin-right: 20px;
  margin-bottom: 20px;
`

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <NextWatchReactContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <StyledVideoLink to={`/videos/${id}`}>
            <GamingVideoItemListItemContainer>
              <GamingVideoItemImg src={thumbnailUrl} alt="video thumbnail" />
              <HomeChannelTitle isDark={isDark}>{title}</HomeChannelTitle>
              <HomeChannelName isDark={isDark}>
                {viewCount} Watching Worldwide
              </HomeChannelName>
            </GamingVideoItemListItemContainer>
          </StyledVideoLink>
        )
      }}
    </NextWatchReactContext.Consumer>
  )
}

export default GamingVideoItem
