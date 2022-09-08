import React, { Dispatch, useState, ChangeEvent } from 'react'
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux'

import {saveWallTest} from '../../../store/wallsSlice'
import { selectWall } from '../../../store/wallSlice';
import './styles.css'

type Props = {
    open: boolean,
    setOpen: Dispatch<React.SetStateAction<boolean>>
}

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

const WallModal = ({open, setOpen}: Props) => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const reduxWall = useSelector(selectWall)
    
    const save = () => {
        dispatch(saveWallTest({wall: reduxWall, name: name}))
        setOpen(false)
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

  return (
    <Dialog 
        onClose={() => setOpen(false)} 
        open={open}
    >
        <div className='wall-modal'>
            <div>
                <h5>Save Wall as</h5>
                <form>
                    <label>Wall Name:</label>
                    <input 
                        type="text"
                        placeholder="Name"
                        onChange={(event) => onChange(event)}
                    />
                </form>
            </div>
            

            <div className="wall-modal-options">
                <div className="wall-modal-buttons">
                    <button 
                        className="btn btn-outline-danger me-1 holds-button"
                        onClick={() => setOpen(false)}
                    >
                            Close
                    </button>

                    <button 
                        className="btn btn-outline-success me-1 holds-button"
                        onClick={() => save()}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </Dialog>
  )
}

export default WallModal