import React, { useState } from 'react'
import './activationButton.scss'

/** @type {{ event: string; event_action: string; event_label: string; }[]} */
export const ActivationButton = ({
  // @ts-ignore
  activate,
  // @ts-ignore
  deactivate,
  // @ts-ignore
  initialState,
  buttonTexts = ['Activate map', 'Activate scroll'],
  icons = ['moving.svg', 'scrolling.svg']
}) => {
  const [state, setState] = useState(initialState)
  return (
    <>
      {!state ? (
        <div
          className='buttonText'
          onClick={() => {
            activate()
            setState(true)
          }}
        >
          <img src={require('./' + icons[0])} width='30px' />
          <br />
          {buttonTexts[0]}
        </div>
      ) : (
        <div
          className='buttonText active'
          onClick={() => {
            deactivate()
            setState(false)
          }}
        >
          <img src={require('./' + icons[1])} width='30px' />
          <br />
          {buttonTexts[1]}
        </div>
      )}
    </>
  )
}
