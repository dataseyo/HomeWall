import React from 'react'

import './styles.css'

type Props = {}

const Crimp = (props: Props) => {
  return (
    <svg className="crimp" width="140" height="40" viewBox="0 20 178 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1_6" maskUnits="userSpaceOnUse" x="0" y="0" width="178" height="70">
        <ellipse cx="89" cy="35" rx="89" ry="35" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_1_6)">
        <rect x="-32.198" y="34.5679" width="250.294" height="108.025" fill="#D9D9D9"/>
        </g>
    </svg>
  )
}

export default Crimp