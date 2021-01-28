import React, { useEffect } from 'react';
import Navigator from './routes/homeStack'
import ChickenTinderApp from './ChickenTinderApp'

/*
  Future Ideas:
  ------------
    Copy tinder and prevent people from swiping too fast in order
    to optimize or load stuff faster
  */

export default function App() {
  return (
    <Navigator />
  )
}