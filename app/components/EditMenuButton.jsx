import style from "./EditMenuButton.module.css"

const EditMenuButton = ({ verticalIcon = false, showMenu, handlerOpenMenu, menuList = [] }) => {
  return (
    <>
      <button type="button" onClick={handlerOpenMenu} className={style.button}>
        <img className={style.icon} src={verticalIcon ? "/icons/verticalMenuIcon.png" : "/icons/horizontalMenuIcon.png"} alt="Menu button" />
      </button>
      {showMenu &&
        <ul className={style.menu} onClick={(e) => e.stopPropagation()}>
          {menuList.map(item => {
            if (item.type === 'select') {
              return <li key={item.id}>
                <label htmlFor={item.name}>{item.label}</label>
                <select name={item.name} id={item.name}>
                  {item.options.map(element => <option key={element.id} value={element.value}>{element.title}</option>)}
                </select>
              </li>
            }
            if (item.type === 'input') {
              return <li key={item.id}><label htmlFor={item.name}>{item.label}:</label><input name={item.name} id={item.name} type={item.inputType} /></li>

            }
          })}
        </ul>
      }
    </>
  )
}

export default EditMenuButton