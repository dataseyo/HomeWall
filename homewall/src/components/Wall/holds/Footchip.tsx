import React from 'react'

import './styles.css'

type Props = {}

const Footchip = (props: Props) => {
  return (
    <svg className="footchip" viewBox="0 0 80 89" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1_5" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="89">
        <ellipse cx="40" cy="44.5" rx="44" ry="39.5" transform="rotate(-90 40 44.5)" fill="#2421D3"/>
        </mask>
        <g mask="url(#mask0_1_5)">
        <rect x="0.5" y="125.5" width="81" height="39" transform="rotate(-90 0.5 125.5)" fill="#2421D3"/>
        </g>
    </svg>
  )
}

export default Footchip