import styled from 'styled-components'

export const HeaderBottomSectionWholeContainer = styled.div`
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
`

export const HomeVideoContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
`

export const HomeBannerSection = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 30px;
`
export const HomeBannerSectionLogo = styled.img`
  width: 30%;
`

export const HomeBannerSectionPara = styled.p`
  font-family: Roboto;
  color: #181818;
`

export const HomeBannerSectionButton = styled.button`
  padding: 8px;
  border: 1px solid #181818;
  font-family: Roboto;
  color: #181818;
  outline: none;
  cursor: pointer;
`

export const HomeBannerSectionCloseBtn = styled.button`
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: 0px;
`

export const HomeInputSearchContainer = styled.div`
  display: flex;
  width: 50%;
  margin-top: 20px;
`

export const HomeInputSearch = styled.input`
  background-color: transparent;
  outline: none;
  border: 1px solid #606060;
  width: 50%;
  font-family: Roboto;
  color: #606060;
  height: 30px;
`
export const HomeSearchBtn = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  height: 30px;
  border: 1px solid #606060;
  color: #606060;
  width: 10%;
`
export const HomeVideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
export const HomeFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`
export const HomeFailureImg = styled.img`
  width: 20%;
`

export const HomeFailureHeading = styled.h1`
  font-family: Roboto;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
`

export const HomeFailurePara = styled.p`
  font-family: Roboto;
  color: ${props => (props.isDark ? '#cbd5e1' : '#1e293b')};
`

export const HomeFailureRetryBtn = styled.button`
  background-color: #3b82f6;
  border: 0px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  color: #ffffff;
  font-family: Roboto;
  width: 10%;
`
export const HomePageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  
`
