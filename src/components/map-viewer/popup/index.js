import React from 'react'
import './styles.scss'
import 'semantic-ui-css/components/label.css'
import 'semantic-ui-css/components/header.css'
import categories from '../../../components/categories'

function urlify(inputText) {
  let replacedText

  // URLs starting with http://, https://, or ftp://
  const replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gim
  replacedText = inputText.replace(
    replacePattern1,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  )

  // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  const replacePattern2 = /(^|[^/])(www\.[\S]+(\b|$))/gim
  replacedText = replacedText.replace(
    replacePattern2,
    '$1<a href="http://$2" target="_blank" rel="noopener noreferrer">$2</a>'
  )

  // Change email addresses to mailto:: links.
  const replacePattern3 = /(([a-zA-Z0-9\-_.])+@[a-zA-Z_-]+?(\.[a-zA-Z]{2,6})+)/gim
  replacedText = replacedText.replace(
    replacePattern3,
    '<a href="mailto:$1" rel="noopener noreferrer">$1</a>'
  )

  replacedText = replacedText.replace(/\n/g, '<br />')

  return replacedText
}

const ln2br = text => {
  return (
    <span dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />
  )
}

function Popup(props) {
  const cat = categories.find(c => c.ident === props.category)
  return (
    <div className='popup'>
      <div className='badge'>
        <span
          className='colorindicator'
          style={{ backgroundColor: cat.color }}
        />
        <span className='text'>{cat.text}</span>
      </div>
      <span className='clearfix' />

      <h2>Name</h2>
      {props.title}

      <h2>Description</h2>
      {ln2br(props.description)}

      <h2>Contact</h2>
      <span dangerouslySetInnerHTML={{ __html: urlify(props.contact) }} />

      <h2>Address</h2>
      {ln2br(props.address)}
    </div>
  )
}

export default Popup
