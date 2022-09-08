import React from 'react'

type Props = {}

const Crimp4 = (props: Props) => {
  return (
    <svg className="crimp" width="51" height="26" viewBox="0 0 51 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_1_18)">
        <path d="M42.7591 11.6431C38.4499 14.1015 33.3178 15.5281 27.809 15.5281C16.2807 15.5281 6.40201 9.28047 2.26344 0.403882C2.01563 -0.127629 0.982025 0.0505301 0.982025 0.636971V0.636971C0.982025 0.959695 0.988053 1.28101 1 1.60081V24C1 25.1046 1.89543 26 3 26H25.3718V25.9817C25.6947 25.9938 26.0191 26 26.345 26C37.3918 26 46.7892 18.9376 50.2682 9.08166C50.5991 8.14441 49.4471 7.46671 48.6675 8.08335C46.8277 9.53873 44.8463 10.7317 42.7591 11.6431Z" fill="#D118BF"/>
        </g>
        <defs>
        <filter id="filter0_i_1_18" x="0.982025" y="0.0872383" width="49.3445" height="29.9128" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_18"/>
        </filter>
        </defs>
    </svg>
  )
}

export default Crimp4