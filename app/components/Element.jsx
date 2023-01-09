'use client'
import style from "./Element.module.css"
import EditMenuButton from "./EditMenuButton"
import { useState } from "react"
import { nanoid } from "nanoid"

const Element = ({ idSelected, item, handlerOpenMenu }) => {

  const [showOptionBtn, setShowOptionBtn] = useState(false)

  const EditMenuItems = [
    {
      id: nanoid(), // Id only for mapping propourse
      name: 'flexFlow', //For name and id attribute
      label: 'Orientation', //For label
      type: 'select', //Type of element
      options: [ // Options only for 'select' element
        { id: nanoid(), title: 'columns', value: 'row nowrap' },
        { id: nanoid(), title: 'rows', value: 'column nowrap' },
      ]
    },{
      id: nanoid(),
      name: 'background',
      label: 'Background',
      type: 'input',
      inputType: 'color' // InputType only for 'input' element
    },{
      id: nanoid(),
      name: 'height',
      label: 'Height',
      type: 'input',
      inputType: 'text'
    },{
      id: nanoid(),
      name: 'width',
      label: 'Width',
      type: 'input',
      inputType: 'text'
    }
  ]

  return (
    <div
      className={style.container}
      onMouseEnter={() => setShowOptionBtn(true)}
      onMouseLeave={() => setShowOptionBtn(false)}
      style={{border: idSelected === item.id ? '3px inset gold' : 'none' }}
    >
      {item.children
        ? <item.type {...item.props}>{item.children}</item.type>
        : <item.type {...item.props} />
      }
      {showOptionBtn &&
        <EditMenuButton
          id={item.id}
          menuList={EditMenuItems}
          styleList={item.props.style}
          handlerOpenMenu={handlerOpenMenu}
        />}
    </div>
  )
}

export default Element