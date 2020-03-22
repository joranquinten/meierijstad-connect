import { ActivationButton } from './activationButton.js'
import React from 'react'
import ReactDOM from 'react-dom'
import browsercheck from '@ta-interaktiv/browsercheck'

export class InteractionToggle extends React.Component {
  constructor(map, buttonText, onActivate) {
    super(map)
    this.activateMap = map.activateMap
    this.deactivateMap = map.deactivateMap
    this.buttonText = buttonText
    this.onActivate = onActivate
  }

  onAdd(map) {
    this.container = document.createElement('div')
    this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group mapActivator'
    ReactDOM.render(
      <ActivationButton
        initialState={map.isActive}
        activate={() => {
          console.log('InteractionToggle', 'activate')
          //  dataLayer = window.dataLayer || []
          // dataLayer.push({
          //   event: 'Interactions',
          //   event_action: 'click',
          //   event_label: 'mapActivated'
          // })

          map.activateMap()
        }}
        deactivate={() => {
          console.log('InteractionToggle', 'deactivate')
          //  dataLayer = window.dataLayer || []

          // dataLayer.push({
          //   event: 'Interactions',
          //   event_action: 'click',
          //   event_label: 'mapDeactivated'
          // })
          map.deactivateMap()
        }}
        buttonText={
          browsercheck.isMobile
            ? this.buttonText.mobile
            : this.buttonText.desktop
        }
        icons={undefined}
        // icons={browsercheck.isMobile ? ['map.svg', 'article.svg'] : undefined}
      />,
      this.container
    )
    // deactivateMap()
    return this.container
  }

  onRemove() {
    if (this.container.parentNode) this.container.remove()
  }
}
