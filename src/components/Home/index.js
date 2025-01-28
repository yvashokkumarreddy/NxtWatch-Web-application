import {Component} from 'react'

import Cookies from 'js-cookie'

import {IoMdClose} from 'react-icons/io'

import {FaSearch} from 'react-icons/fa'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import HomeVideoItem from '../HomeVideoItem'

import NextWatchReactContext from '../../context/NextWatchReactContext'

import {
  HeaderBottomSectionWholeContainer,
  HomeVideoContainer,
  HomeBannerSection,
  HomeBannerSectionLogo,
  HomeBannerSectionPara,
  HomeBannerSectionButton,
  HomeBannerSectionCloseBtn,
  HomeInputSearchContainer,
  HomeInputSearch,
  HomeSearchBtn,
  HomeVideosListContainer,
  HomeFailureContainer,
  HomeFailureImg,
  HomeFailureHeading,
  HomeFailurePara,
  HomeFailureRetryBtn,
  HomePageContainer,
} from './styledComponents'

import SideBar from '../SideBar'

const HomeApiConstansts = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    isCrossShown: true,
    searchInput: '',
    SI: '',
    apiStatus: HomeApiConstansts.success,
    HomeVideosList: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: HomeApiConstansts.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {SI} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${SI}`
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
        apiStatus: HomeApiConstansts.success,
        HomeVideosList: updatedData,
      })
    } else {
      this.setState({apiStatus: HomeApiConstansts.failure})
    }
  }

  renderHomeSuccessView = isDark => {
    const {HomeVideosList = {}} = this.state
    const {total, videos = []} = HomeVideosList
    return (
      <>
        {total !== 0 ? (
          <HomeVideosListContainer>
            {videos.map(eachVideo => (
              <HomeVideoItem videoDetails={eachVideo} key={eachVideo.id} />
            ))}
          </HomeVideosListContainer>
        ) : (
          <HomeFailureContainer>
            <HomeFailureImg
              src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
              alt='no videos'
            />
            <HomeFailureHeading isDark={isDark}>
              No Search results found
            </HomeFailureHeading>
            <HomeFailurePara isDark={isDark}>
              Try different key words or remove search filter
            </HomeFailurePara>
            <HomeFailureRetryBtn onClick={this.onClickRetry}>
              Retry
            </HomeFailureRetryBtn>
          </HomeFailureContainer>
        )}
      </>
    )
  }

  onClickRetry = () => {
    this.getVideosList()
  }

  renderHomeFailureView = isDark => {
    const logoUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <HomeFailureContainer>
        <HomeFailureImg src={logoUrl} alt='failure view' />
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
      <div className='loader-container' data-testid='loader'>
        <Loader type='ThreeDots' color=' #4f46e5' height='50' width='50' />
      </div>
    </HomeFailureContainer>
  )

  onChangeisCrossShown = () => {
    this.setState({isCrossShown: false})
  }

  onSearchIconClick = () => {
    const {searchInput} = this.state
    this.setState({SI: searchInput}, this.getVideosList)
  }

  onSearchResultChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {isCrossShown, apiStatus, searchInput} = this.state

    return (
      <NextWatchReactContext.Consumer>
        {value => {
          const {isDark} = value
          let videoItemviews
          switch (apiStatus) {
            case HomeApiConstansts.success:
              videoItemviews = this.renderHomeSuccessView(isDark)
              break
            case HomeApiConstansts.inProgress:
              videoItemviews = this.renderLoaderView()
              break
            case HomeApiConstansts.failure:
              videoItemviews = this.renderHomeFailureView(isDark)
              break
            default:
              return null
          }
          return (
            <HomePageContainer data-testid='home'>
              <Header />
              <HeaderBottomSectionWholeContainer>
                <SideBar />
                <HomeVideoContainer isDark={isDark}>
                  {isCrossShown ? (
                    <HomeBannerSection data-testid='banner'>
                      <div>
                        <HomeBannerSectionLogo
                          src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                          alt='nxt watch logo'
                        />
                        <HomeBannerSectionPara>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </HomeBannerSectionPara>
                        <HomeBannerSectionButton>
                          GET IT NOW
                        </HomeBannerSectionButton>
                      </div>
                      <HomeBannerSectionCloseBtn
                        onClick={this.onChangeisCrossShown}
                        data-testid='close'
                      >
                        <IoMdClose />
                      </HomeBannerSectionCloseBtn>
                    </HomeBannerSection>
                  ) : null}
                  <HomeInputSearchContainer>
                    <HomeInputSearch
                      type='search'
                      placeholder='Search'
                      onChange={this.onSearchResultChange}
                      value={searchInput}
                    />
                    <HomeSearchBtn
                      onClick={this.onSearchIconClick}
                      data-testid='searchButton'
                    >
                      <FaSearch />
                    </HomeSearchBtn>
                  </HomeInputSearchContainer>
                  {videoItemviews}
                </HomeVideoContainer>
              </HeaderBottomSectionWholeContainer>
            </HomePageContainer>
          )
        }}
      </NextWatchReactContext.Consumer>
    )
  }
}
export default Home
