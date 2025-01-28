import {Component} from 'react'

import Cookies from 'js-cookie'

import {BiDislike, BiLike} from 'react-icons/bi'

import {AiOutlineSave} from 'react-icons/ai'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'
import SideBar from '../SideBar'

import Header from '../Header'

import NextWatchReactContext from '../../context/NextWatchReactContext'

import {
  GamingBottomSectionWholeContainer,
  GamingPageContainer,
  GamingVideoContainer,
  VideoDetailViewTitle,
  VideoDetailViewName,
  VideoDetailedViewListContainer,
  VideoDetailedViewListItem,
  VideoDetailViewLike,
  VideoDetailViewDisLike,
  VideoDetailViewSaved,
  VideoDetailedViewLikeBtn,
  VideoDetailedViewDisLikeBtn,
  VideoDetailedViewSavedBtn,
  VideoDetailedViewHr,
  VideoDetailedViewChannelContainer,
  VideoDetailedViewChannelLogo,
  HomeFailureContainer,
  HomeFailureImg,
  HomeFailureHeading,
  HomeFailurePara,
  HomeFailureRetryBtn,
} from './styledComponents'

const apiStatusConstansts = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstansts.success,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstansts.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }

      this.setState({
        apiStatus: apiStatusConstansts.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstansts.failure})
    }
  }

  renderVideoItemDetailsSuccessView = (
    isDark,
    obj,
    addToSavedVideos,
    addToLikedVideos,
    like,
    addToDisLikedVideos,
    unLike,
  ) => {
    const {videoDetails} = this.state
    const {
      id,
      title,
      videoUrl,
      viewCount,
      publishedAt = 'Nov 29, 2016',
      description,
      channel = {},
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const postedAt = formatDistanceToNow(new Date(publishedAt))
    const isSaved = obj !== undefined
    const isLiked = like !== undefined
    const isDisLiked = unLike !== undefined
    return (
      <>
        <ReactPlayer url={videoUrl} width={1100} height={400} />
        <VideoDetailViewTitle isDark={isDark}>{title}</VideoDetailViewTitle>
        <VideoDetailedViewListContainer>
          <VideoDetailedViewListItem>
            <VideoDetailViewName>{viewCount} views</VideoDetailViewName>
            <VideoDetailViewName>{postedAt}</VideoDetailViewName>
          </VideoDetailedViewListItem>
          <VideoDetailedViewListItem>
            <VideoDetailViewLike isLiked={isLiked}>
              <VideoDetailedViewLikeBtn
                isLiked={isLiked}
                onClick={() => {
                  addToLikedVideos(id)
                }}
              >
                <BiLike /> Like
              </VideoDetailedViewLikeBtn>
            </VideoDetailViewLike>
            <VideoDetailViewDisLike isDisLiked={isDisLiked}>
              <VideoDetailedViewDisLikeBtn
                isDisLiked={isDisLiked}
                onClick={() => {
                  addToDisLikedVideos(id)
                }}
              >
                {' '}
                <BiDislike /> Dislike
              </VideoDetailedViewDisLikeBtn>
            </VideoDetailViewDisLike>
            <VideoDetailViewSaved isSaved={isSaved}>
              <VideoDetailedViewSavedBtn
                isSaved={isSaved}
                onClick={() => {
                  addToSavedVideos(videoDetails)
                }}
              >
                <AiOutlineSave /> {isSaved ? 'Saved' : 'Save'}
              </VideoDetailedViewSavedBtn>
            </VideoDetailViewSaved>
          </VideoDetailedViewListItem>
        </VideoDetailedViewListContainer>
        <VideoDetailedViewHr />
        <VideoDetailedViewChannelContainer>
          <VideoDetailedViewChannelLogo
            src={profileImageUrl}
            alt="channel logo"
          />
          <div>
            <VideoDetailViewTitle isDark={isDark}>{name}</VideoDetailViewTitle>
            <VideoDetailViewName>
              {subscriberCount} subscribers
            </VideoDetailViewName>
            <VideoDetailViewTitle isDark={isDark}>
              {description}
            </VideoDetailViewTitle>
          </div>
        </VideoDetailedViewChannelContainer>
      </>
    )
  }

  onClickRetry = () => {
    this.getVideoDetails()
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
          const {
            isDark,
            addToSavedVideos,
            savedVideos,
            addToLikedVideos,
            likedVideos,
            addToDisLikedVideos,
            disLikedVideos,
          } = value
          const {videoDetails} = this.state
          const {id} = videoDetails
          const obj = savedVideos.find(each => each.id === id)
          const like = likedVideos.find(each => each === id)
          const unLike = disLikedVideos.find(each => each === id)
          let videoItemviews
          switch (apiStatus) {
            case apiStatusConstansts.success:
              videoItemviews = this.renderVideoItemDetailsSuccessView(
                isDark,
                obj,
                addToSavedVideos,
                addToLikedVideos,
                like,
                addToDisLikedVideos,
                unLike,
              )
              break
            case apiStatusConstansts.inProgress:
              videoItemviews = this.renderLoaderView()
              break
            case apiStatusConstansts.failure:
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
export default VideoItemDetails
