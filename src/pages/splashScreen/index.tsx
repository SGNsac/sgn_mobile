import React from 'react'
import SplashScreen from '../../components/splashAnimations'
import * as Splash from 'expo-splash-screen'
Splash.hideAsync()

const SplashScreens : React.FC = () => {
  return (
    <SplashScreen/>
  )
}

export default SplashScreens
