'use client'
import { nanoid } from "nanoid"
import { useState } from "react"
import EditMenuButton from "./EditMenuButton"
import Element from "./Element"
import style from "./Placeholder.module.css"

const Placeholder = ({ item, handlerOpenMenu, idSelected }) => {

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
    }, {
      id: nanoid(),
      name: 'background',
      label: 'Background',
      type: 'input',
      inputType: 'color' // InputType only for 'input' element
    }, {
      id: nanoid(),
      name: 'height',
      label: 'Height',
      type: 'input',
      inputType: 'text'
    }
  ]

  return (
    <div
      onMouseEnter={() => setShowOptionBtn(true)}
      onMouseLeave={() => setShowOptionBtn(false)}
      className={style.container}
      style={{...item.style, border: idSelected === item.id ? '3px inset gold' : 'none' }}
    >
      {(item.elements.length >= 0 && showOptionBtn) &&
        <button type="button" onClick={() => console.log('agrego uno a la izquierda')} className={`${style.addButton} ${item.elements.length === 0 ? '' : style.leftAddButton}`}>
          <img src="/icons/addIcon.png" alt="add button" />
        </button>
      }
      {item.elements.map(element => {
        return <Element idSelected={idSelected} key={element.id} item={element} handlerOpenMenu={handlerOpenMenu} />
      })}
      {(item.elements.length > 0 && showOptionBtn) &&
        <button type="button" onClick={() => console.log('agrego uno a la derecha')} className={`${style.addButton} ${style.rightAddButton}`}>
          <img src="/icons/addIcon.png" alt="add button" />
        </button>
      }
      {showOptionBtn &&
        <EditMenuButton
          id={item.id}
          verticalIcon
          menuList={EditMenuItems}
          styleList={item.style}
          handlerOpenMenu={handlerOpenMenu}
        />}
    </div>
  )
}

export default Placeholder