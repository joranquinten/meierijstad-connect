import React from 'react'
import '../../../components/categories.scss'
import categories from '../../../components/categories'

function CategoryButtons(props) {
  const clicked = name => {
    props.onClick(name)
  }

  return (
    <div className='categories'>
      <Button
        onClick={clicked}
        ident='all'
        selected={props.selected.length === 0 ? ['all'] : props.selected}
      >
        Everything
      </Button>
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
      className={`ui basic ${props.ident} ${
        props.selected.includes(props.ident) ? 'selected' : ''
      } small button`}
      onClick={() => props.onClick(props.ident)}
    >
      {props.children}
    </button>
  )
}

export default CategoryButtons
