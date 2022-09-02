import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import store, { selectWall, changeWall } from '../../store/store'

import './styles.css'

type Props = {}

const Walls = (props: Props) => {
    const wall = useSelector(selectWall)
    const dispatch = useDispatch()
   
    

  return (
    <div>
        
    </div>
  )
}

export default Walls