'use client'
import { nanoid } from "nanoid"
import { useState } from "react"
import EditMenu from "../components/EditMenu"
import Placeholder from "../components/Placeholder"
import style from "./page.module.css"

const Create = () => {
  const defaultElements = [
    {
      id: nanoid(),
      style: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        alignItems: 'center',
        background: '#BFBFBF',
        padding: '1rem',
        height: 'auto',
        width: '100%',

      },
      elements: [
        {
          id: nanoid(),
          type: 'span',
          props: { style: { color: 'red' } },
          children: 'texto de prueba'
        }, {
          id: nanoid(),
          type: 'img',
          props: { style: { with: '200px' }, src: '/vercel.svg', alt: 'img prueba' }
        }, {
          id: nanoid(),
          type: 'div',
          props: { style: { with: '200px' } },
          children: 'PLACEHOLDER IN DIV'
        }
      ]
    }
  ]
  const [placeholders, setPlaceholders] = useState(defaultElements)
  const [optionMenu, setOptionMenu] = useState({ id: '', menuList: [], styleList: {} })

  const handlerOpenMenu = (id, menuList, styleList) => {
    const newMenuOptions = {
      id: id,
      menuList,
      styleList
    }
    setOptionMenu(newMenuOptions)
  }

  const handlerAddPlaceholder = () => {
    const newPlaceholder = {
      id: nanoid(),
      style: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        alignItems: 'center',
        background: '#BFBFBF',
        padding: '1rem',
        height: '10vh',
        width: '100%',

      },
      elements: []
    }
    setPlaceholders([...placeholders, newPlaceholder])
  }

  return (
    <>
      <h2>Create</h2>
      <div className={style.placeholdersContainer}>
        {placeholders.map(item => <Placeholder key={item.id} item={item} handlerOpenMenu={handlerOpenMenu} idSelected={optionMenu.id}/>)}
        <div className={style.addButtonContainer}>
          <button type="button" onClick={handlerAddPlaceholder} className={style.addButton}>
            <img src="/icons/addIcon.png" alt="add button" />
          </button>
        </div>
      </div>
      {optionMenu.id &&
        <EditMenu menuList={optionMenu.menuList} styleList={optionMenu.styleList} handlerCloseMenu={() => setOptionMenu({ id: '', menuList: [], styleList: {} })}/>
      }
    </>

  )
}

export default Create