import style from "./NavBar.module.css"
import Link from "next/link"

const sections = [
  {
    id: '1',
    label: 'Home',
    route: '/'
  },{
    id: '2',
    label: 'Sign In',
    route: '/sign'
  },{
    id: '3',
    label: 'Dashboard',
    route: '/dashboard'
  }
]

const NavBar = () => {
  return (
    <nav className={style.container}>
      <div className={style.logo}>
        Linkeys
      </div>
      <ul className={style.links}>
        {sections.map(element => <li key={element.id}>
            <Link href={element.route}>
              {element.label}
            </Link>
          </li>)}
      </ul>
    </nav>
  )
}

export default NavBar