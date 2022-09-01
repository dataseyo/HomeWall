import React from 'react'

import './styles.css'

type Props = {}

const Jug = (props: Props) => {
  return (
    <svg className="jug" width="120" height="40" viewBox="0 0 167 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_4)">
        <path d="M4 0H163V46.4946H4V0Z" fill="#287B20"/>
        <path d="M4 46C4 20.5949 27.9868 0 57.5761 0H109.424C139.013 0 163 20.5949 163 46C163 71.4051 139.013 92 109.424 92H57.5761C27.9868 92 4 71.4051 4 46Z" fill="#287B20"/>
        </g>
        <defs>
        <filter id="filter0_d_1_4" x="0" y="0" width="167" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4" result="shape"/>
        </filter>
        </defs>
    </svg>
  )
}

export default Jug