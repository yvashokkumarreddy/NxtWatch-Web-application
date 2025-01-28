import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {FaFire} from 'react-icons/fa'
import Header from '../Header'

import TrendingVideoItem from '../TrendingVideoItem'

import NextWatchReactContext from '../../context/NextWatchReactContext'

import {
  TrendingPageContainer,
  TrendingBottomSectionWholeContainer,
  TrendingVideoContainer,
  TrendingBottomSectionTopContainer,
  TrendingBottomSectionFireLogo,
  TrendingBottomSectionTopContainerHeading,
  TrendingBottomListContainer,
  HomeFailureContainer,
  HomeFailureImg,
  HomeFailureHeading,
  HomeFailurePara,
  HomeFailureRetryBtn,
} from './styledComponents'

import SideBar from '../SideBar'

const trendingApiConstansts = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingApiStatus: trendingApiConstansts.success,
    trendingVideosList: {},
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({trendingApiStatus: trendingApiConstansts.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
          channel: {
            name: eachVideo.channel.name,
            profileImageUrl: eachVideo.channel.profile_image_url,
          },
          viewCount: eachVideo.view_count,
          publishedAt: eachVideo.published_at,
        })),
      }
      this.setState({
        trendingApiStatus: trendingApiConstansts.success,
        trendingVideosList: updatedData,
      })
    } else {
      this.setState({trendingApiStatus: trendingApiConstansts.failure})
    }
  }

  renderTrendingSuccessView = isDark => {
    const {trendingVideosList = {}} = this.state
    const {videos = []} = trendingVideosList
    return (
      <>
        <TrendingBottomSectionTopContainer isDark={isDark}>
          <TrendingBottomSectionFireLogo isDark={isDark}>
            <FaFire />
          </TrendingBottomSectionFireLogo>
          <TrendingBottomSectionTopContainerHeading isDark={isDark}>
            Trending
          </TrendingBottomSectionTopContainerHeading>
        </TrendingBottomSectionTopContainer>
        <TrendingBottomListContainer>
          {videos.map(eachVideo => (
            <TrendingVideoItem videoDetails={eachVideo} key={eachVideo.id} />
          ))}
        </TrendingBottomListContainer>
      </>
    )
  }

  onClickRetry = () => {
    this.getTrendingVideosList()
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
    const {trendingApiStatus} = this.state
    return (
      <NextWatchReactContext.Consumer>
        {value => {
          const {isDark} = value
          let videoItemviews
          switch (trendingApiStatus) {
            case trendingApiConstansts.success:
              videoItemviews = this.renderTrendingSuccessView(isDark)
              break
            case trendingApiConstansts.inProgress:
              videoItemviews = this.renderLoaderView()
              break
            case trendingApiConstansts.failure:
              videoItemviews = this.renderTrendingFailureView(isDark)
              break
            default:
              return null
          }
          return (
            <TrendingPageContainer>
              <Header />
              <TrendingBottomSectionWholeContainer>
                <SideBar />
                <TrendingVideoContainer isDark={isDark}>
                  {videoItemviews}
                </TrendingVideoContainer>
              </TrendingBottomSectionWholeContainer>
            </TrendingPageContainer>
          )
        }}
      </NextWatchReactContext.Consumer>
    )
  }
}

export default Trending
