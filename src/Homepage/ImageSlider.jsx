import React from 'react'

export default function ImageSlider({Src,alt,Class}) {
  return (
    <div><img
    src={Src}
    alt={alt}
    className={Class}
  />
    </div>
  )
}
