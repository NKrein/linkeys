import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {

  const user = {
    uid: '1',
    user: 'nkrein',
    displayUser: 'NicolasKrein',
    sites: [
      {
        name: 'Custom Event',
        endpoint: 'custom-event',
        logo: 'url',
        description: 'desc',
        pages: [
          { 
            label: 'Home',
            route: '/',
            containerStyle: {},
            placeholders: [
              {
                id: '1',
                style: {},
                elements: [{},{}]
              }
            ]    
          }
        ]
      }
    ]
  }

  return (
    <div className={styles.container}>
      <h1>Welcome to Linkeys!</h1>
      <p>Develope a minimalist page</p>
      <Link href='/create'>Click here to start</Link>
    </div>
  )
}
