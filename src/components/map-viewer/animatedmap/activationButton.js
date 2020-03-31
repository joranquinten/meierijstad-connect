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
  buttonTexts = ['Activeer kaart', 'Activateer scroll'],
  icons = ['moving.svg', 'scrolling.svg']
}) => {
  const [state, setState] = useState(initialState)
  return (
    <>
      {!state ? (
        <button
          className='buttonText'
          onClick={() => {
            activate()
            setState(true)
          }}
        >
          <img src={require('./' + icons[0])} width='30px' alt={buttonTexts[0]} />
          <br />
          {buttonTexts[0]}
        </button>
      ) : (
        <button
          className='buttonText active'
          onClick={() => {
            deactivate()
            setState(false)
          }}
        >
          <img src={require('./' + icons[1])} width='20px' alt={buttonTexts[1]} />
          <br />
          {buttonTexts[1]}
        </button>
      )}
    </>
  )
}
