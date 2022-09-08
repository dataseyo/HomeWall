import React, { MouseEventHandler, useState, Dispatch } from 'react'
import Dialog from '@mui/material/Dialog';

import './styles.css'
import HoldCategory from './hold-categories/HoldCategory'

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    reduxChooseHold: MouseEventHandler,
    rotation: number,
    setRotation: Dispatch<React.SetStateAction<number>>
}

const HoldModal = ({
    open, 
    setOpen, 
    reduxChooseHold, 
    rotation, 
    setRotation
}: Props) => {
    // if hold type is selected, only render grid of holds within that type
    // conditionally removing choice of hold type
    const [holdTypeSelected, setHoldTypeSelected] = useState(false)

    const [holdType, setHoldType] = useState('')

    const renderHoldSelection = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // show grid of crimps/jugs/etc. depending on which category is selected in modal

        setHoldTypeSelected(true)
        let holdCategory = event.currentTarget.getAttribute("id")!
    
        setHoldType(holdCategory)
    }

    const closeModal = () => {
        setOpen(false)
        setHoldTypeSelected(false)
    }
    
  return (
    <Dialog 
        onClose={() => setOpen(false)} 
        open={open}
    >
        <div className="hold-modal">
            <div className="modal-title-row">
                <h5 className="holds-title">Choose Hold</h5>
            </div>

            {/* available hold svgs: 
                on click, they should replace the wall nodes
                with the chosen hold svg 
            */}
            <div className='holds-content-row'>
                { holdTypeSelected ? 
                    <div>
                        <HoldCategory 
                            holdType={holdType}
                            reduxChooseHold={reduxChooseHold}
                            rotation={rotation}
                            setRotation={setRotation}
                        />
                    </div>
                    : 
                    
                    <div className="hold-buttons">
                    <div
                        id="crimp"
                        className="btn btn-outline-dark p-2 m-1"
                        onClick={(event) => renderHoldSelection(event)}
                    >
                        <p>Crimp</p>

                    </div>

                    <div
                        id="jug"
                        className="btn btn-outline-dark p-2 m-1"
                        onClick={(event) => renderHoldSelection(event)}
                    >
                        <p>Jug</p>

                    </div>

                    <div
                        id="sloper"
                        className="btn btn-outline-dark p-2 m-1"
                        onClick={(event) => renderHoldSelection(event)}
                    >
                        <p>Sloper</p>

                    </div>

                    <div
                        id="pinch"
                        className="btn btn-outline-dark p-2 m-1"
                        onClick={(event) => renderHoldSelection(event)}
                    >
                        <p>Pinch</p>

                    </div>

                    <div
                        id="foot"
                        className="btn btn-outline-dark p-2 m-1"
                        onClick={(event) => renderHoldSelection(event)}
                    >
                        <p>Foot</p>

                    </div>

                    <div
                        id="."
                        className="btn btn-outline-dark p-2 m-1"
                        onClick={(event) => reduxChooseHold(event)}
                    >
                        <p>None</p>

                    </div>


                </div>}
            </div>

            <div className="holds-options-container">
                <div className="hold-options">
                    <button 
                        className="btn btn-outline-danger me-1 holds-button"
                        onClick={() => closeModal()}
                    >
                        Close
                    </button>

                    { holdTypeSelected ? 
                        <button 
                            className="btn btn-outline-danger mr-1 holds-button"
                            onClick={() =>  setHoldTypeSelected(false)}
                        >
                            Back
                        </button> :

                        null
                    }
                </div>
            </div>
           
        </div>
      </Dialog>
  )
}

export default HoldModal