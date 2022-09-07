import React, { MouseEventHandler, useState } from 'react'
import Dialog from '@mui/material/Dialog';

import './styles.css'
import HoldCategory from './hold-categories/HoldCategory'

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    reduxChooseHold: MouseEventHandler
}

const HoldModal = ({open, setOpen, reduxChooseHold}: Props) => {
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
            <div className="col">
                <h5>Choose Hold</h5>
                <hr/>
            </div>

            {/* available hold svgs: 
                on click, they should replace the wall nodes
                with the chosen hold svg 
            */}
            
            { holdTypeSelected ? 
                <div className="hold-buttons col">
                    <HoldCategory 
                        holdType={holdType}
                        reduxChooseHold={reduxChooseHold}
                    />
                </div>
                 : 
                
                <div className="col hold-buttons">
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

            <div className="holds-options-container m-10 bg-blue">
                <div className="holds-options d-flex col justify-content-center f-1">
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