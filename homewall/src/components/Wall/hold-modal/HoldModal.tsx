import React, {MouseEventHandler} from 'react'
import Dialog from '@mui/material/Dialog';

import './styles.css'

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    chooseHold: MouseEventHandler
}

const HoldModal = ({open, setOpen, chooseHold}: Props) => {
  return (
    <Dialog 
        onClose={() => setOpen(false)} 
        open={open}
    >
        <div className="hold-modal">
            <div className="col">
                <h5>Choose Hold</h5>
            </div>

            {/* available hold svgs: 
                on click, they should replace the wall nodes
                with the chosen hold svg 
            */}
            <div className="col">
                <div
                    id="crimp"
                    className="btn btn-outline-dark"
                    onClick={(event) => chooseHold(event)}
                >
                    <p>Crimp</p>

                </div>

                <div
                    id="jug"
                    className="btn btn-outline-dark"
                    onClick={(event) => chooseHold(event)}
                >
                    <p>Jug</p>

                </div>

                <div
                    id="sloper"
                    className="btn btn-outline-dark"
                    onClick={(event) => chooseHold(event)}
                >
                    <p>Sloper</p>

                </div>

                <div
                    id="."
                    className="btn btn-outline-dark"
                    onClick={(event) => chooseHold(event)}
                >
                    <p>None</p>

                </div>


            </div>

            <div className="col">
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