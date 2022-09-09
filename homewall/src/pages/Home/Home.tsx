import React from 'react'
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