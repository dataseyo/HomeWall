import React from 'react'

import '../styles.css'

type Props = {}

const FootChip1 = (props: Props) => {
  return (
    <svg className="footchip" width="62" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_1_2)">
        <ellipse cx="31" cy="30" rx="31" ry="30" fill="#FAFF00"/>
        </g>
        <path d="M61.5 30C61.5 46.2771 47.8603 59.5 31 59.5C14.1397 59.5 0.5 46.2771 0.5 30C0.5 13.7229 14.1397 0.5 31 0.5C47.8603 0.5 61.5 13.7229 61.5 30Z" stroke="black"/>
        <defs>
        <filter id="filter0_i_1_2" x="-4" y="-4" width="66" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-4" dy="-8"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="darken" in2="shape" result="effect1_innerShadow_1_2"/>
        </filter>
        </defs>
    </svg>

  )
}

export default FootChip1