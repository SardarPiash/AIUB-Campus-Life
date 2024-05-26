import React from 'react'

export default function ImageUrl(cover) {
  return new URL(`../assets/${cover}`, import.meta.url).href;
}
