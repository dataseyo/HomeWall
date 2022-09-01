import React, { useState, MouseEventHandler } from 'react'
import Crimp from './holds/Crimp'
import Jug from './holds/Jug'

import './styles.css'
import HoldModal from './hold-modal/HoldModal'

const holds = [

]

type Props = {}

const Wall = (props: Props) => {
    // array of objects used to render the wall
    const gridObj = new Array(100).fill(1).map((value, index) => {
        return {
            "hold" : ".",
            "id": index
        }
    })

    // wall state
    const [wall, setWall] = useState(gridObj)

    // modal state
    const [open, setOpen] = useState(false)

    // selected hold state
    const [selectedHold, setSelectedHold] = useState(-1)

    // function is passed to child HoldModal after ChangeHold function is called
    // function takes user input from HoldModal buttons and populates the wall node 
    // with their chosen hold type
    const chooseHold = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        var holdType = event.currentTarget.getAttribute("id")!
        // check hold type
        console.log("chosen")
        console.log(holdType)
        
        // update array
        let update = wall.map(item => {
            if (item.id === selectedHold) {
                item.hold = holdType
            } 
            return item
        })

        setWall(update)

        setOpen(false)
    }

    // function opens the HoldModal and sets selectedHold state equal to which
    // node the user clicked on the wall
    const changeHold = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        var holdLocation = parseInt(event.currentTarget.getAttribute("data-index")!)
        setSelectedHold(holdLocation)
        setOpen(true)

        console.log(holdLocation)
    }

    // reset wall
    const resetWall = () => {
        var reset = wall.map(site => {
            if (site.hold != ".") {
                site.hold = "."
            }
            return site
        })

        setWall(reset)
    }

    // save wall
    const saveWall = () => {
        // change it to open model letting you name saved wall

    }

    // render the correct hold on the wall
    const renderHold = (holdType: string) => {
        switch(holdType) {
            case 'jug': 
                return <Jug/>
            case 'crimp': 
                return <Crimp/>
            case 'sloper': 
                return <p className='text-light'>sloper</p>
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
                    onClick={() => resetWall()}
                >
                Reset
                </button>
            </div>

            <div className="col">
                <button 
                    className="btn btn-outline-success"
                    onClick={() => saveWall()}
                >
                    Save
                </button>
            </div>
            

            
        </div>
        

        <div className="col wall-center"> 
             <div className="wall">
                {/* nodes of wall */}
                {wall.map((site, index) => {
                    return (
                        <div 
                            className="item" 
                            onClick={(event) => changeHold(event)}
                            key={index}
                            data-index={index}
                        >
                            {renderHold(site.hold)}
                        </div>
                    )
                })}

                {/* modal */}
                <HoldModal 
                    open={open} 
                    setOpen={setOpen}
                    chooseHold={chooseHold}
                />
            </div>
        </div>
    </div>


  )
}

export default Wall