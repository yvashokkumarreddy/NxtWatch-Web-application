import React from 'react'

const NextWatchReactContext = React.createContext({
  isDark: false,
  onChangeTheme: () => {},
  likedVideos: [],
  addToLikedVideos: () => {},
  disLikedVideos: [],
  addToDisLikedVideos: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
})

export default NextWatchReactContext
