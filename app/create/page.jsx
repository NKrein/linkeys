'use client'
import { nanoid } from "nanoid"
import { useState } from "react"
import Placeholder from "../components/Placeholder"

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
        background: 'rgba(0, 0, 0, 0.3)',
        padding: '1rem',
        height: 'auto',
        width: '100%',
        position: 'relative',
        zIndex: 'auto'
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

  const handlerAddPlaceholder = (id) => {
    if (id) {

    } else {
      const newPlaceholder = {
        id: nanoid(),
        style: {
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-around',
          alignContent: 'space-around',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.3)',
          padding: '1rem',
          margin: '1rem',
          height: 'auto',
          width: '100%',
          position: 'relative',
          zIndex: 'auto'
        },
        elements: []
      }

    }
  }

  return (
    <>
      <h2>Create</h2>
      <div>
        {placeholders.map(item => <Placeholder key={item.id} item={item} />)}
      </div>
    </>

  )
}

export default Create