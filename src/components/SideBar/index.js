import {Link, withRouter} from 'react-router-dom'

import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'

import {FaFire} from 'react-icons/fa'

import {SiYoutubegaming} from 'react-icons/si'

import {MdLibraryAdd} from 'react-icons/md'

import styled from 'styled-components'

import NextWatchReactContext from '../../context/NextWatchReactContext'

import {
  SideBarWholeContainer,
  SideBarListContainer,
  LinkListItemContainer,
  SidebarBottomContainer,
  SideBarContactUsPara,
  SocialMediaLogoContainer,
  SocialMediaLogo,
  SocialMediaPara,
} from './styledComponents'

const CategoryList = [
  {id: 'HOME', displayText: 'Home', to: '/'},
  {id: 'TRENDING', displayText: 'Trending', to: '/trending'},
  {id: 'GAMING', displayText: 'Gaming', to: '/gaming'},
  {id: 'SAVED_VIDEOS', displayText: 'Saved Videos', to: '/saved-videos'},
]

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

class SideBar extends Component {
  state = {activeCategoryId: CategoryList[0].id}

  componentDidMount() {
    const {location} = this.props
    const currentPath = location.pathname
    const activeCategory = CategoryList.find(
      category => category.to === currentPath,
    )
    if (activeCategory) {
      this.setState({activeCategoryId: activeCategory.id})
    }
  }

  onchangeActiveCategory = id => {
    this.setState({activeCategoryId: id})
  }

  render() {
    const {activeCategoryId} = this.state

    return (
      <NextWatchReactContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SideBarWholeContainer isDark={isDark}>
              <SideBarListContainer>
                {CategoryList.map(category => (
                  <StyledLink
                    to={category.to}
                    onClick={() => this.onchangeActiveCategory(category.id)}
                    key={category.id}
                  >
                    <LinkListItemContainer
                      isDark={isDark}
                      isActive={category.id === activeCategoryId}
                    >
                      {category.id === 'HOME' && <AiFillHome />}
                      {category.id === 'TRENDING' && <FaFire />}
                      {category.id === 'GAMING' && <SiYoutubegaming />}
                      {category.id === 'SAVED_VIDEOS' && <MdLibraryAdd />}
                      {category.displayText}
                    </LinkListItemContainer>
                  </StyledLink>
                ))}
              </SideBarListContainer>
              <SidebarBottomContainer>
                <SideBarContactUsPara isDark={isDark}>
                  Contact Us
                </SideBarContactUsPara>
                <SocialMediaLogoContainer>
                  <SocialMediaLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                    alt="twitter logo"
                  />
                  <SocialMediaLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaLogoContainer>
                <SocialMediaPara isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </SocialMediaPara>
              </SidebarBottomContainer>
            </SideBarWholeContainer>
          )
        }}
      </NextWatchReactContext.Consumer>
    )
  }
}
export default withRouter(SideBar)
