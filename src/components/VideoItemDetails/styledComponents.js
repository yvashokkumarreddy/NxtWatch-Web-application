import styled from 'styled-components'

export const GamingPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const GamingBottomSectionWholeContainer = styled.div`
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
`
export const GamingVideoContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
`
export const VideoDetailViewTitle = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-family: Roboto;
`

export const VideoDetailViewName = styled.p`
  color: #64748b;
  font-size: 13px;
  font-family: Roboto;
`

export const VideoDetailedViewListContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding-left: 0px;
  margin-left: 0px;
`

export const VideoDetailedViewListItem = styled.li`
  min-width: 20%;
  display: flex;
  justify-content: space-between;
`

export const VideoDetailViewLike = styled.p`
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  font-size: 13px;
  font-family: Roboto;
  cursor: pointer;
  font-size: 14px;
`

export const VideoDetailViewDisLike = styled.p`
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
  font-size: 13px;
  font-family: Roboto;
  cursor: pointer;
  font-size: 14px;
`

export const VideoDetailViewSaved = styled.p`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
  font-size: 13px;
  font-family: Roboto;
  cursor: pointer;
  font-size: 14px;
`
export const VideoDetailedViewLikeBtn = styled.button`
  outline: none;
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
`

export const VideoDetailedViewDisLikeBtn = styled.button`
  outline: none;
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
`

export const VideoDetailedViewSavedBtn = styled.button`
  outline: none;
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`

export const VideoDetailedViewHr = styled.hr`
  color: ${props => (props.isDark ? '#2563eb' : '#64748b')};
`
export const VideoDetailedViewChannelContainer = styled.div`
  display: flex;
  width: 100%;
`
export const VideoDetailedViewChannelLogo = styled.img`
  align-self: flex-start;
  width: 5%;
  margin-right: 10px;
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
