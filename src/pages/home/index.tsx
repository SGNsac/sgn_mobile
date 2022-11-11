/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import Container from '../../components/container'
import FlatListImage from '../../components/flatListImage'
import ScrollViewMenu from '../../components/ScrollViewMenu'

interface Inavigation{
  navigation : any
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home : React.FC<Inavigation> = ({ navigation }:Inavigation) => {
  return (
    <Container>

      <FlatListImage/>

      <ScrollViewMenu/>

    </Container>
  )
}

export default Home
