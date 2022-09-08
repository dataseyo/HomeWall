import React from 'react'

type Props = {}

const Jug2 = (props: Props) => {
  return (
    <svg className="jug" width="76" height="72" viewBox="0 0 76 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_3_25)">
        <path fillRule="evenodd" clipRule="evenodd" d="M38 72C58.9868 72 76 55.8823 76 36C76 16.1177 58.9868 0 38 0C17.0132 0 0 16.1177 0 36C0 55.8823 17.0132 72 38 72ZM49.5 54C55.8513 54 61 48.8513 61 42.5C61 36.1487 55.8513 31 49.5 31C43.1487 31 38 36.1487 38 42.5C38 48.8513 43.1487 54 49.5 54Z" fill="#FAFF00"/>
        </g>
        <defs>
        <filter id="filter0_i_3_25" x="-2" y="-2" width="78" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-3" dy="-3"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_25"/>
        </filter>
        </defs>
    </svg>

  )
}

export default Jug2