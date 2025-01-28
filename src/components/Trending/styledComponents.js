import styled from 'styled-components'

export const TrendingPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const TrendingBottomSectionWholeContainer = styled.div`
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
`
export const TrendingVideoContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  flex-grow: 1;
  overflow-y: auto;
`
export const TrendingBottomSectionTopContainer = styled.div`
  background-color: ${props => (props.isDark ? '#231f20' : '#e2e8f0')};
  padding: 20px;
  display: flex;
  max-height: 100px;
`

export const TrendingBottomSectionFireLogo = styled.button`
  background-color: ${props => (props.isDark ? '#181818' : '#f1f5f9')};
  border-radius: 50px;
  border: 0px;
  padding: 10px;
  color: #ff0000;
  align-self: center;
  margin-left: 20px;
  margin-right: 10px;
`
export const TrendingBottomSectionTopContainerHeading = styled.h1`
  font-family: Roboto;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  align-self: center;
  font-size: 23px;
`
export const TrendingBottomListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin-left: 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
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
