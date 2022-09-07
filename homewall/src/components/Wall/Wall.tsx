import React, { useState, MouseEventHandler, useEffect } from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

import './styles.css'
import HoldModal from './hold-modal/HoldModal'
import { Crimp, Crimp2, Crimp3,
        Jug, 
        Sloper, 
        Footchip2 
    } from './holds/index'

// redux store and actions
import { selectWall, changeWall, resetWall } from '../../store/wallSlice'
import { saveWall } from '../../store/wallsSlice'

const holds = [

]

type Props = {}

// type of single grid site on wall
interface Hold {
    hold: string;
    id: number;
}

// type of single wall
interface Wall {
    wall: Hold[]
}

// array of objects used to render the wall
const gridObj = new Array(100).fill(1).map((value, index) => {
        return {
            "hold" : ".",
            "id": index
        }
})

const Wall = (props: Props) => {
    // redux 
    const reduxWall: Hold[] = useSelector(selectWall)
    const dispatch = useDispatch()

    // modal state
    const [open, setOpen] = useState(false)

    // selected hold state
    const [selectedHold, setSelectedHold] = useState(-1)

    // function is passed to child HoldModal after ChangeHold function is called
    // function takes user input from HoldModal buttons and populates the wall node 
    // with their chosen hold type
    const reduxChooseHold = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        var holdType = event.currentTarget.getAttribute("id")!

        dispatch(changeWall({hold: holdType, id: selectedHold}))

        setOpen(false)
    }

    // redux version of reset
    const reduxResetWall = () => {
        dispatch(resetWall())
    }

    // function opens the HoldModal and sets selectedHold state equal to which
    // node the user clicked on the wall
    const changeHold = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        var holdLocation = parseInt(event.currentTarget.getAttribute("data-index")!)
        setSelectedHold(holdLocation)
        setOpen(true)

        console.log(holdLocation)
    }

    // save wall
    const newWall = () => {
        // change it to open model letting you name saved wall
        dispatch(saveWall(reduxWall))
    }

    // render the correct hold on the wall
    const renderHold = (holdType: string) => {
        switch(holdType) {
            case 'jug': 
                return <Jug/>
            case 'crimp': 
                return <Crimp/>
            case 'crimp2': 
                return <Crimp2/>
            case 'crimp3': 
                return <Crimp3/>
            case 'sloper': 
                return <Sloper/>
            case 'foot': 
                return <Footchip2/>
            default: 
                return <p className='text-light'>.</p>
        }
    }

  return (
    <div className="homewall-container">
        <div className="row p-2">
            <div className="col">
                <button 
                    className="btn btn-outline-danger"
                    onClick={() => reduxResetWall()}
                >
                Reset
                </button>
            </div>

            <div className="col">
                <button 
                    className="btn btn-outline-success"
                    onClick={() => newWall()}
                >
                    Save
                </button>
            </div>
        </div>
        

        <div className="col wall-center"> 
             <div className="wall">
                {/* nodes of wall */}
                {reduxWall.map((site, index) => {
                    return (
                        <div 
                            className="item" 
                            onClick={(event) => changeHold(event)}
                            key={index}
                            data-index={index}
                            // style={{transform: 'rotate(60deg)'}}
                        >
                            {renderHold(site.hold)}
                        </div>
                    )
                })}

                {/* modal */}
                <HoldModal 
                    open={open} 
                    setOpen={setOpen}
                    reduxChooseHold={reduxChooseHold}
                />
            </div>
        </div>
    </div>


  )
}

export default Wall