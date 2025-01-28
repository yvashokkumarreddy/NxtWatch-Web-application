import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'

import SideBar from '../SideBar'

import GamingVideoItem from '../GamingVideoItem'

import NextWatchReactContext from '../../context/NextWatchReactContext'

import {
  GamingPageContainer,
  GamingBottomSectionWholeContainer,
  GamingVideoContainer,
  GamingBottomSectionTopContainer,
  GamingBottomSectionFireLogo,
  GamingBottomSectionTopContainerHeading,
  GamingVideoListContainer,
  HomeFailureContainer,
  HomeFailureImg,
  HomeFailureHeading,
  HomeFailurePara,
  HomeFailureRetryBtn,
} from './styledComponents'

const gamingApiConstansts = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideos: {},
    apiStatus: gamingApiConstansts.success,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: gamingApiConstansts.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        total: data.total,
        videos: data.videos.map(eachVideo => ({
          id: eachVideo.id,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          viewCount: eachVideo.view_count,
        })),
      }
      this.setState({
        gamingVideos: updatedData,
        apiStatus: gamingApiConstansts.success,
      })
    } else {
      this.setState({apiStatus: gamingApiConstansts.failure})
    }
  }

  renderGamingSuccessView = isDark => {
    const {gamingVideos = {}} = this.state
    const {videos = []} = gamingVideos
    return (
      <>
        <GamingBottomSectionTopContainer isDark={isDark}>
          <GamingBottomSectionFireLogo isDark={isDark}>
            <SiYoutubegaming />
          </GamingBottomSectionFireLogo>
          <GamingBottomSectionTopContainerHeading isDark={isDark}>
            Gaming
          </GamingBottomSectionTopContainerHeading>
        </GamingBottomSectionTopContainer>
        <GamingVideoListContainer>
          {videos.map(eachObj => (
            <GamingVideoItem videoDetails={eachObj} key={eachObj.id} />
          ))}
        </GamingVideoListContainer>
      </>
    )
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  renderTrendingFailureView = isDark => {
    const logoUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <HomeFailureContainer>
        <HomeFailureImg src={logoUrl} />
        <HomeFailureHeading isDark={isDark}>
          Oops! Something Went Wrong
        </HomeFailureHeading>
        <HomeFailurePara isDark={isDark}>
          We are having some trouble to complete your request.
          <br />
        </HomeFailurePara>
        <HomeFailurePara isDark={isDark}>Please try again.</HomeFailurePara>
        <HomeFailureRetryBtn onClick={this.onClickRetry}>
          Retry
        </HomeFailureRetryBtn>
      </HomeFailureContainer>
    )
  }

  renderLoaderView = () => (
    <HomeFailureContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
      </div>
    </HomeFailureContainer>
  )

  render() {
    const {apiStatus} = this.state
    return (
      <NextWatchReactContext.Consumer>
        {value => {
          const {isDark} = value
          let videoItemviews
          switch (apiStatus) {
            case gamingApiConstansts.success:
              videoItemviews = this.renderGamingSuccessView(isDark)
              break
            case gamingApiConstansts.inProgress:
              videoItemviews = this.renderLoaderView()
              break
            case gamingApiConstansts.failure:
              videoItemviews = this.renderTrendingFailureView(isDark)
              break
            default:
              return null
          }
          return (
            <GamingPageContainer>
              <Header />
              <GamingBottomSectionWholeContainer>
                <SideBar />
                <GamingVideoContainer isDark={isDark}>
                  {videoItemviews}
                </GamingVideoContainer>
              </GamingBottomSectionWholeContainer>
            </GamingPageContainer>
          )
        }}
      </NextWatchReactContext.Consumer>
    )
  }
}

export default Gaming
