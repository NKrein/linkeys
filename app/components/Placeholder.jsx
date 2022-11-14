'use client'
import { nanoid } from "nanoid"
import { useState } from "react"
import EditMenuButton from "./EditMenuButton"
import Element from "./Element"
import style from "./Placeholder.module.css"

const Placeholder = ({ item }) => {

  const [showOptionBtn, setShowOptionBtn] = useState(false)
  const [showOptionMenu, setShowOptionMenu] = useState(false)

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
      onMouseEnter={() => setShowOptionBtn(true)}
      onMouseLeave={() => setShowOptionBtn(false)}
      onKeyDown={(e) => { if (e.key === 'Escape') setShowOptionMenu(false) }}
      onClick={() => setShowOptionMenu(false)}
      className={style.container}
      style={item.style}
    >
      {item.elements.map(element => {
        return <Element key={element.id} item={element} />
      })}
      {showOptionBtn &&
        <EditMenuButton
          verticalIcon
          menuList={EditMenuItems}
          showMenu={showOptionMenu}
          handlerOpenMenu={(e) => { e.stopPropagation(); setShowOptionMenu(!showOptionMenu) }}
        />}
    </div>
  )
}

export default Placeholder