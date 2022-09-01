import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'

import Route from './Route/Route'

type Props = {
  routeArray: { hold: string; id: number; }[][]
}

const Routes = ({routeArray}: Props) => {

  const [form, setForm] = useState("")

  return (
    <Container>
        <h2 className='text-light'>Routes</h2>
        <hr className="text-light"/>
        {/* <p className='text-light'>
        { 
          JSON.stringify(routeArray)
        }
        </p> */}

        <p className="text-light">
        {
          routeArray.map((routes, index) => {
            return <Route routes={routes}/>
          }) 
        }
        </p>

        {/* <p className="text-light">
        {
          routeArray.map(routes => {
            return JSON.stringify(routes)
          })
        }
        </p> */}
    </Container>
  )
}

export default Routes