import NextWatchReactContext from '../../context/NextWatchReactContext'

import {
  HomePageContainer,
  HeaderBottomSectionWholeContainer,
  HomeVideoContainer,
  HomeFailureContainer,
  HomeFailureImg,
  HomeFailureHeading,
  HomeFailurePara,
} from './styledComponents'

import Header from '../Header'

import SideBar from '../SideBar'

const NotFound = () => (
  <NextWatchReactContext.Consumer>
    {value => {
      const {isDark} = value
      const imgUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <HomePageContainer>
          <Header />
          <HeaderBottomSectionWholeContainer>
            <SideBar />
            <HomeVideoContainer isDark={isDark}>
              <HomeFailureContainer>
                <HomeFailureImg src={imgUrl} alt="not-found" />
                <HomeFailureHeading isDark={isDark}>
                  Page Not Found
                </HomeFailureHeading>
                <HomeFailurePara isDark={isDark}>
                  we are sorry, the page you requested could not be found.
                </HomeFailurePara>
              </HomeFailureContainer>
            </HomeVideoContainer>
          </HeaderBottomSectionWholeContainer>
        </HomePageContainer>
      )
    }}
  </NextWatchReactContext.Consumer>
)

export default NotFound
