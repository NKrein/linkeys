import style from "./EditMenuButton.module.css"

const EditMenuButton = ({ id, verticalIcon = false, handlerOpenMenu, menuList = [], styleList = {} }) => {
  return (
    <button type="button" onClick={() => handlerOpenMenu(id, menuList, styleList)} className={style.button}>
      <img className={style.icon} src={verticalIcon ? "/icons/verticalMenuIcon.png" : "/icons/horizontalMenuIcon.png"} alt="Menu button" />
    </button>
  )
}

export default EditMenuButton