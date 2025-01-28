import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'

import NotFound from './components/NotFound'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import ProtectedRoute from './components/ProtectedRoute'

import SavedVideos from './components/SavedVideos'

import VideoItemDetails from './components/VideoItemDetails'

import NextWatchReactContext from './context/NextWatchReactContext'

import './App.css'

class App extends Component {
  state = {
    isDark: false,
    savedVideosList: [],
    likedVideos: [],
    unLikedVideos: [],
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  addToLikedVideos = id => {
    this.setState(prevState => {
      const obj = prevState.likedVideos.find(each => each === id)
      if (obj === undefined) {
        return {
          likedVideos: [...prevState.likedVideos, id],
          unLikedVideos: prevState.unLikedVideos.filter(each => each !== id),
        }
      }
      return {
        unLikedVideos: [...prevState.unLikedVideos, id],
        likedVideos: prevState.likedVideos.filter(each => each !== id),
      }
    })
  }

  addToSavedVideos = video => {
    this.setState(prevState => {
      const v = prevState.savedVideosList.find(each => each.id === video.id)
      if (v === undefined) {
        return {savedVideosList: [...prevState.savedVideosList, video]}
      }
      return {
        savedVideosList: prevState.savedVideosList.filter(
          each => each.id !== video.id,
        ),
      }
    })
  }

  addToDisLikedVideos = id => {
    this.setState(prevState => {
      const obj = prevState.unLikedVideos.find(each => each === id)
      if (obj === undefined) {
        return {
          unLikedVideos: [...prevState.unLikedVideos, id],
          likedVideos: prevState.likedVideos.filter(each => each !== id),
        }
      }
      return {
        likedVideos: [...prevState.likedVideos, id],
        unLikedVideos: prevState.unLikedVideos.filter(each => each !== id),
      }
    })
  }

  render() {
    const {isDark, savedVideosList, likedVideos, unLikedVideos} = this.state
    return (
      <NextWatchReactContext.Provider
        value={{
          isDark,
          onChangeTheme: this.onChangeTheme,
          savedVideos: savedVideosList,
          addToSavedVideos: this.addToSavedVideos,
          likedVideos,
          addToLikedVideos: this.addToLikedVideos,
          addToDisLikedVideos: this.addToDisLikedVideos,
          disLikedVideos: unLikedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NextWatchReactContext.Provider>
    )
  }
}

export default App
