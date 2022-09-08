import React, { MouseEventHandler, useState, MouseEvent, Dispatch } from 'react'

import './styles.css'

// hold imports
import { Crimp, Crimp2, Crimp3 } from '../../holds/index'
import { Jug } from '../../holds/index'
import { Sloper } from '../../holds/index'
import { Footchip2 } from '../../holds/index'

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
]

const renderJugs = [
    {
        hold: <Jug/>,
        id: "jug"
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
        
    }
]


const renderFeet = [
    {
        hold: <Footchip2/>,
        id: "foot"
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
                                {item.hold}
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
                                {item.hold}
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
                                {item.hold}
                            </button>
                        )
                    })
                )
            case 'pinch': 
                return (
                    renderFeet.map((item, index) => {
                        return (
                            <button
                                key={index}
                                id={item.id}
                                className="category-button btn btn-outline-dark p-2 m-1"
                                onClick={(event) => submitHold(event)}
                            >
                                {item.hold}
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
                                {item.hold}
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