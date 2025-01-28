import {Component} from 'react'

import {FaFire} from 'react-icons/fa'
import Header from '../Header'

import NextWatchReactContext from '../../context/NextWatchReactContext'

import SavedVideoDetails from '../SavedVideoDetails'

import {
  SavedVideosPageContainer,
  SavedVideosBottomSectionWholeContainer,
  SavedVideosVideoContainer,
  TrendingBottomSectionTopContainer,
  TrendingBottomSectionFireLogo,
  TrendingBottomSectionTopContainerHeading,
  TrendingBottomListContainer,
  SavedNoVideosWholeContainer,
  SavedNoVideosImg,
  SavedNoVideosPara,
} from './styledComponents'

import SideBar from '../SideBar'

class SavedVideos extends Component {
  render() {
    return (
      <NextWatchReactContext.Consumer>
        {value => {
          const {isDark, savedVideos = []} = value

          return (
            <SavedVideosPageContainer>
              <Header />
              <SavedVideosBottomSectionWholeContainer>
                <SideBar />
                <SavedVideosVideoContainer isDark={isDark}>
                  {savedVideos.length !== 0 ? (
                    <>
                      <TrendingBottomSectionTopContainer isDark={isDark}>
                        <TrendingBottomSectionFireLogo isDark={isDark}>
                          <FaFire />
                        </TrendingBottomSectionFireLogo>
                        <TrendingBottomSectionTopContainerHeading
                          isDark={isDark}
                        >
                          Saved Videos
                        </TrendingBottomSectionTopContainerHeading>
                      </TrendingBottomSectionTopContainer>
                      <TrendingBottomListContainer>
                        {savedVideos.map(eachVideo => (
                          <SavedVideoDetails
                            videoDetails={eachVideo}
                            key={eachVideo.id}
                          />
                        ))}
                      </TrendingBottomListContainer>
                    </>
                  ) : (
                    <SavedNoVideosWholeContainer>
                      <SavedNoVideosImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <TrendingBottomSectionTopContainerHeading isDark={isDark}>
                        No saved videos found
                      </TrendingBottomSectionTopContainerHeading>
                      <SavedNoVideosPara isDark={isDark}>
                        You can save your videos while watching them
                      </SavedNoVideosPara>
                    </SavedNoVideosWholeContainer>
                  )}
                </SavedVideosVideoContainer>
              </SavedVideosBottomSectionWholeContainer>
            </SavedVideosPageContainer>
          )
        }}
      </NextWatchReactContext.Consumer>
    )
  }
}

export default SavedVideos
