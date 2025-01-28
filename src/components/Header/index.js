import {withRouter, Link} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'

import {IoSunnyOutline} from 'react-icons/io5'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import Cookies from 'js-cookie'

import {
  HeaderWholeContainer,
  HeaderListContainer,
  HeaderWebLogo,
  ProfileLogo,
  HeaderListItemContainer,
  ThemeButton,
  LogOutBtn,
  PopupContainer,
  PopupContainerPara,
  PopupContainerBtn,
  PopupBtnContainer,
} from './styledComponent'

import NextWatchReactContext from '../../context/NextWatchReactContext'

const Header = props => {
  const {history} = props
  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <NextWatchReactContext.Consumer>
      {value => {
        const {isDark, onChangeTheme} = value

        const logoUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const themeIcon = isDark ? <IoSunnyOutline /> : <FaMoon />

        return (
          <HeaderWholeContainer isDark={isDark}>
            <HeaderListContainer>
              <li>
                <Link to="/">
                  <HeaderWebLogo src={logoUrl} alt="website logo" />
                </Link>
              </li>
              <HeaderListItemContainer>
                <ThemeButton
                  onClick={onChangeTheme}
                  isDark={isDark}
                  data-testid="theme"
                >
                  {' '}
                  {themeIcon}
                </ThemeButton>
                <ProfileLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <Popup modal trigger={<LogOutBtn>Logout</LogOutBtn>}>
                  {close => (
                    <PopupContainer>
                      <PopupContainerPara>
                        Are you sure, you want to logout?
                      </PopupContainerPara>
                      <PopupBtnContainer>
                        <PopupContainerBtn
                          outline
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </PopupContainerBtn>
                        <PopupContainerBtn onClick={onLogout}>
                          Confirm
                        </PopupContainerBtn>
                      </PopupBtnContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </HeaderListItemContainer>
            </HeaderListContainer>
          </HeaderWholeContainer>
        )
      }}
    </NextWatchReactContext.Consumer>
  )
}

export default withRouter(Header)
