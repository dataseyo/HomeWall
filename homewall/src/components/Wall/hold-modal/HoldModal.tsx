import React, { MouseEventHandler, useState } from 'react'
import Dialog from '@mui/material/Dialog';

import './styles.css'

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    chooseHold: MouseEventHandler,
    reduxChooseHold: MouseEventHandler
}

const renderHoldSelection = (holdCategory: string) => {
    // show grid of crimps/jugs/etc. depending on which category is selected in modal

    switch(holdCategory) {

    }
}

const HoldModal = ({open, setOpen, chooseHold, reduxChooseHold}: Props) => {
    const [holdTypeSelected, setHoldTypeSelected] = useState(false)

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
            <div className="col hold-buttons">
                <div
                    id="crimp"
                    className="btn btn-outline-dark p-2 m-1"
                    onClick={(event) => reduxChooseHold(event)}
                >
                    <p>Crimp</p>

                </div>

                <div
                    id="jug"
                    className="btn btn-outline-dark p-2 m-1"
                    onClick={(event) => reduxChooseHold(event)}
                >
                    <p>Jug</p>

                </div>

                <div
                    id="sloper"
                    className="btn btn-outline-dark p-2 m-1"
                    onClick={(event) => reduxChooseHold(event)}
                >
                    <p>Sloper</p>

                </div>

                <div
                    id="foot"
                    className="btn btn-outline-dark p-2 m-1"
                    onClick={(event) => reduxChooseHold(event)}
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


            </div>

            <div className="d-flex col justify-content-center">
                <button 
                    className="btn btn-outline-danger"
                    onClick={() => setOpen(false)}
                >
                    Close
                </button>
            </div>
        </div>
      </Dialog>
  )
}

export default HoldModal