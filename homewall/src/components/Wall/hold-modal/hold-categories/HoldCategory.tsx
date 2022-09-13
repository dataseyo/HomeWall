import React, { MouseEventHandler, useState, MouseEvent, Dispatch } from 'react'

import './styles.css'

// hold imports
import {Crimp, Crimp2, Crimp3, Crimp4,
        Jug, Jug2,
        Sloper,
        Pinch1,
        FootChip1, Footchip2, FootChip3
} from '../../holds/index'


const renderCrimps = [
    {
        hold: <Crimp/>,
        id: "crimp"
    },

    {
        hold: <Crimp2/>,
        id: "crimp2"
    },

    {
        hold: <Crimp3/>,
        id: "crimp3"
    },

    {
        hold: <Crimp4/>,
        id: "crimp4"
    },
]

const renderJugs = [
    {
        hold: <Jug/>,
        id: "jug"
    },

    {
        hold: <Jug2/>,
        id: "jug2"
    }
]

const renderSlopers = [
    {
        hold: <Sloper/>,
        id: "sloper"
    }
]

const renderPinch = [
    {
        hold: <Pinch1/>,
        id: "pinch1"
    }
]


const renderFeet = [
    {
        hold: <FootChip1/>,
        id: "foot1"
    },

    {
        hold: <Footchip2/>,
        id: "foot2"
    },

    {
        hold: <FootChip3/>,
        id: "foot3"
    }
]

type Props = {
    holdType: string,
    reduxChooseHold: MouseEventHandler,
    rotation: number,
    setRotation: Dispatch<React.SetStateAction<number>>
}

const HoldCategory = ({holdType, reduxChooseHold, rotation, setRotation}: Props) => {
    const submitHold = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        reduxChooseHold(event)
        setRotation(0)
    }

    const displayData = () => {
        switch(holdType) {
            case 'crimp': 
                return (
                    renderCrimps.map((item, index) => {
                        return (
                            <button
                                key={index}
                                id={item.id}
                                className="category-button btn btn-outline-dark p-2 m-1"
                                onClick={(event) => submitHold(event)}
                            >
                                <div style={{transform: `rotate(${rotation}deg)`}}>
                                    {item.hold}
                                </div>
                            </button>
                        )
                    })
                )
            case 'jug': 
                return (
                    renderJugs.map((item, index) => {
                        return (
                            <button
                                key={index}
                                id={item.id}
                                className="category-button btn btn-outline-dark p-2 m-1"
                                onClick={(event) => submitHold(event)}
                            >
                                <div style={{transform: `rotate(${rotation}deg)`}}>
                                    {item.hold}
                                </div>
                            </button>
                        )
                    })
                )
            case 'sloper': 
                return (
                    renderSlopers.map((item, index) => {
                        return (
                            <button
                                key={index}
                                id={item.id}
                                className="category-button btn btn-outline-dark p-2 m-1"
                                onClick={(event) => submitHold(event)}
                            >
                                <div style={{transform: `rotate(${rotation}deg)`}}>
                                    {item.hold}
                                </div>
                            </button>
                        )
                    })
                )
            case 'pinch': 
                return (
                    renderPinch.map((item, index) => {
                        return (
                            <button
                                key={index}
                                id={item.id}
                                className="category-button btn btn-outline-dark"
                                onClick={(event) => submitHold(event)}
                            >
                                <div style={{transform: `rotate(${rotation}deg)`}}>
                                    {item.hold}
                                </div>
                            </button>
                        )
                    })
                )
            case 'foot': 
                return (
                    renderFeet.map((item, index) => {
                        return (
                            <button
                                key={index}
                                id={item.id}
                                className="category-button btn btn-outline-dark p-2 m-1"
                                onClick={(event) => submitHold(event)}
                            >
                                <div style={{transform: `rotate(${rotation}deg)`}}>
                                    {item.hold}
                                </div>
                            </button>
                        )
                    })
                )
            default: 
                return <p>error</p>
        }
        
        
    }

    console.log(typeof holdType)
    const renderHolds = () => {

        return (
            <ul className='category-buttons'>
                {displayData()}
            </ul>
        )
    }

  return (
    <div className='hold-category'>
        <div className='hold-category-rotation'>
            <label>Rotation:</label>
            <input
                type="number"
                className='modal-input'
                placeholder="0" 
                value={rotation}
                min={0} 
                max={360} 
                onChange={(event) => setRotation(parseInt(event.target.value))}
            />
        </div>
        {renderHolds()}
    </div>
  )
}

export default HoldCategory