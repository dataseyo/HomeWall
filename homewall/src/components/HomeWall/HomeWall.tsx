import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'

import './styles.css'
import data from './grid.json'
import Routes from './Routes/Routes'
import Crimp from '../Wall/holds/Crimp'

type Props = {}

const gridObj = new Array(100).fill(1).map((value, index) => {
    return {
        "hold" : ".",
        "id": index
    }
})

console.log(gridObj)

const HomeWall = (props: Props) => {
    const [holds, setHolds] = useState(gridObj)
    const [routes, setRoutes] = useState<{hold: string, id: number}[][]>([])

    console.log(routes)

    const addHold = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // get index of where user clicked
        var holdLocation = parseInt(event.currentTarget.getAttribute("data-index")!)

        let update = gridObj.map(item => {
            if (item.id === holdLocation) {
                item.hold = "!"
            } 
            return item
        })
    
        setHolds(update)

        // // make copy of holds
        // let holdsCopy = [...holds]

        // let item = {...holdsCopy[holdLocation]}
    }

    const createRoute = () => {
        // creates a new route and adds to routes state
        const newRoute = gridObj.filter(item => {
            return item.hold != "."
        })
        console.log(newRoute)
        setRoutes(prevRoutes => [...prevRoutes, newRoute])
    }

    const resetGrid = () => {
        // reset grid
        let reset = gridObj.map(item => {
            if (item.hold != ".") {
                item.hold = "."
            }
            return item
        })
        console.log(reset)
        setHolds(reset)
    }

  return (
    <div className="container-fluid mw-100">
        <div className="row">
            <div className="homewall col-md-8">
                <div className='center'>
                    <div className='homewall-buttons m-2'>
                        <button className="btn btn-outline-light me-2" onClick={() => createRoute()}>Add Route</button>
                        <button className="btn btn-outline-light" onClick={() => resetGrid()}>Reset Wall</button> 
                    </div>                    
                        
                        
                        {/* <div className='wall-container'>
                            <div className="wall">
                                {
                                    holds.map((site, index) => {
                                        return (
                                            <div 
                                                className='site text-light'
                                                onClick={(event) => addHold(event)}
                                                key={index}
                                                data-index={index}
                                            >
                                                <p>{site.hold}</p>
                                                {site.hold == "crimp" ?
                                                    <Crimp/>
                                                    :
                                                    null
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div> */}
                </div>
            </div>


            <div className="col-md-4">
                <Routes routeArray={routes}/>
            </div>
        </div>
    </div>
  )
}

export default HomeWall