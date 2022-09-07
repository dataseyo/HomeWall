import React, { MouseEventHandler, useState } from 'react'

import './styles.css'
import data from './holds.json'

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

const renderFeet = [
    {
        hold: <Footchip2/>,
        id: "foot"
    }
]

type Props = {
    holdType: string,
    reduxChooseHold: MouseEventHandler
}

const HoldCategory = ({holdType, reduxChooseHold}: Props) => {
    const displayData = () => {
        switch(holdType) {
            case 'crimp': 
                return (
                    renderCrimps.map((item, index) => {
                        return (
                            <button
                                id={item.id}
                                className="category-button btn btn-outline-dark p-2 m-1"
                                onClick={(event) => reduxChooseHold(event)}
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
                                id={item.id}
                                className="category-button btn btn-outline-dark p-2 m-1"
                                onClick={(event) => reduxChooseHold(event)}
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
                                id={item.id}
                                className="category-button btn btn-outline-dark p-2 m-1"
                                onClick={(event) => reduxChooseHold(event)}
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
                                id={item.id}
                                className="category-button btn btn-outline-dark p-2 m-1"
                                onClick={(event) => reduxChooseHold(event)}
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
    <div>
        {renderHolds()}
    </div>
  )
}

export default HoldCategory