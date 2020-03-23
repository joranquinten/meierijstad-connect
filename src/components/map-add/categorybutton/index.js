import React from 'react'
import categories from '../../../components/categories'

function CategoryButtons(props) {
  const clicked = name => {
    props.onClick(name)
  }

  return (
    <div className='ui buttons category'>
      {categories.map(item => (
        <Button
          onClick={clicked}
          key={item.ident}
          ident={item.ident}
          selected={props.selected}
        >
          {item.text}
        </Button>
      ))}
    </div>
  )
}

function Button(props) {
  return (
    <button
      className={`ui button ${
        props.selected === props.ident ? 'positive' : ''
      }`}
      onClick={() => props.onClick(props.ident)}
    >
      {props.children}
    </button>
  )
}

export default CategoryButtons
