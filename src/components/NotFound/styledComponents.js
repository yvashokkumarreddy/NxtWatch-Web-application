import styled from 'styled-components'

export const HomePageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
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
export const HomeFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`
export const HomeFailureImg = styled.img`
  width: 30%;
`

export const HomeFailureHeading = styled.h1`
  font-family: Roboto;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
`

export const HomeFailurePara = styled.p`
  font-family: Roboto;
  color: ${props => (props.isDark ? '#cbd5e1' : '#1e293b')};
`
