import React from 'react'

import '../styles.css'

type Props = {}

const Sloper = (props: Props) => {
  return (
    <svg className="sloper" viewBox="0 0 133 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1_5" maskUnits="userSpaceOnUse" x="0" y="0" width="133" height="125">
        <ellipse cx="66.5" cy="62.5" rx="66.5" ry="62.5" fill="#DE5216"/>
        </mask>
        <g mask="url(#mask0_1_5)">
        <rect x="34.0017" y="-26" width="164.304" height="117.629" transform="rotate(41.5382 34.0017 -26)" fill="#DE5216"/>
        </g>
    </svg>

  )
}

export default Sloper