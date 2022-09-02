import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectWalls } from '../../store/wallsSlice'
import { replaceWall } from '../../store/wallSlice'

import './styles.css'
import WallGrid from '../../components/Walls/Walls'

type Props = {}

// this should show a grid of walls that the user has created
// instead, might have to show either
// (1) a flatlist of named walls because the walls dont like being resized
// (2) some sort of scaled down snapshot that's taken when a user saves a wall
const Walls = (props: Props) => {
    const wallarray = useSelector(selectWalls)
    const dispatch = useDispatch()
    
    const [selectedWall, setSelectedWall] = useState([])

    const useWall = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // set HomeWall to which wall user chooses to use
        // need a new reducer in wallSlice in order to do this: replaceWall
        var index = parseInt(event.currentTarget.getAttribute("data-index")!)

        dispatch(replaceWall(wallarray[index]))
    }
   
  return (
    // <WallGrid/>
    <ul>
        {wallarray.map((item, index) => {
            return (
                <div>
                    <li className="wall-li" key={index}>
                    <h5 className="text-light p-2">Wall {index}</h5>
                    
                    <button 
                        className="btn btn-outline-success m-2"
                        data-index={index}
                    >
                        Routes
                    </button>

                    <button 
                        className="btn btn-outline-primary m-2"
                        data-index={index}
                        onClick={(event) => useWall(event)}
                    >
                        Use Wall
                    </button>

                    {/* {item.map((wall, index) => {
                        return (
                            <div className='text-light' key={index}>
                                Wall {index}
                            </div>
                        )
                    })} */}
                    </li>
                </div>
                
            )
        })}

        {/* {wallarray.map((item, index) => {
                return (
                    <div>
                        {item.map((wall, index) => {
                            return (
                                <div className='text-light' key={index}>
                                    {JSON.stringify(wall)}
                                </div>
                            )
                        })}
                    </div>
                )
        })} */}
    </ul>
  )
}

export default Walls