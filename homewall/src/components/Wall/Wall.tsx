import React, { useState, MouseEventHandler, useEffect } from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

import './styles.css'
import HoldModal from './hold-modal/HoldModal'
import WallModal from './wall-modal/WallModal'
import { Crimp, Crimp2, Crimp3, Crimp4,
        Jug, Jug2,
        Sloper,
        Pinch1,
        Footchip2 
    } from './holds/index'

// redux store and actions
import { selectWall, changeWall, resetWall } from '../../store/wallSlice'

// type of single grid site on wall
interface Hold {
    hold: string;
    id: number;
    rotation: number;
}

// type of single wall
interface Wall {
    wall: Hold[],
    name: string
}

const Wall = () => {
    // redux 
    const reduxWall = useSelector(selectWall)
    const dispatch = useDispatch()

    // modal state
    const [open, setOpen] = useState(false)
    const [openSaveModal, setOpenSaveModal] = useState(false)

    // selected hold state
    const [selectedHold, setSelectedHold] = useState(-1)

    // rotation state
    const [rotation, setRotation] = useState<number>(0)

    // function is passed to child HoldModal after ChangeHold function is called
    // function takes user input from HoldModal buttons and populates the wall node 
    // with their chosen hold type
    const reduxChooseHold = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        var holdType = event.currentTarget.getAttribute("id")!

        dispatch(changeWall({hold: holdType, id: selectedHold, rotation: rotation}))

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

    // render the correct hold on the wall
    const renderHold = (holdType: string) => {
        switch(holdType) {
            case 'jug': 
                return <Jug/>
            case 'jug2': 
                return <Jug2/>
            case 'crimp': 
                return <Crimp/>
            case 'crimp2': 
                return <Crimp2/>
            case 'crimp3': 
                return <Crimp3/>
            case 'crimp4': 
                return <Crimp4/>
            case 'sloper': 
                return <Sloper/>
            case 'pinch1': 
                return <Pinch1/>
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
                    // onClick={() => newWall()}
                    onClick={() => setOpenSaveModal(true)}
                >
                    Save
                </button>
            </div>
        </div>
        

        <div className="col wall-center"> 
             <div className="wall">
                {/* Set Wall State 
                    - shown when users are not actively setting a route
                    - allows users to click on a node to change the hold
                */}
                {reduxWall.map((site, index) => {
                    return (
                        <div 
                            className="item" 
                            onClick={(event) => changeHold(event)}
                            key={index}
                            data-index={index}
                            style={{transform: `rotate(${site.rotation}deg)`}}
                        >
                            {renderHold(site.hold)}
                        </div>
                    )
                })}

                {/* Set Route State
                    - shown when users decide to set a route on a saved wall
                */}

                {/* insert route setting logic here */}

                {/* modal */}
                <HoldModal 
                    open={open} 
                    setOpen={setOpen}
                    reduxChooseHold={reduxChooseHold}
                    setRotation={setRotation}
                    rotation={rotation}
                />

                <WallModal 
                    open={openSaveModal}
                    setOpen={setOpenSaveModal}
                />
            </div>
        </div>
    </div>


  )
}

export default Wall