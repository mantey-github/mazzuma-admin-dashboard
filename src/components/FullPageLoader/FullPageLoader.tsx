import React from 'react'
import { PreLoaderWrapper } from './FullPageLoader.style'

function random() {
  const text = ['Please wait...']
  return text[Math.floor(Math.random() * text.length)]
}

function FullPageLoader() {
  return (
    <>
      <PreLoaderWrapper>
        <div className="loader">
          <div className="loader__figure"></div>
        </div>
        <p className="loader__label">{random()}</p>
      </PreLoaderWrapper>
    </>
  )
}

export default FullPageLoader
