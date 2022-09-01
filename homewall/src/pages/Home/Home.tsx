import React from 'react'
import HomeWall from '../../components/HomeWall/HomeWall'
import Routes from '../../components/HomeWall/Routes/Routes'
import Container from 'react-bootstrap/esm/Container'

import './styles.css'
import Wall from '../../components/Wall/Wall'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="container-fluid">
        <Wall/>
    </div>
  )
}

export default Home