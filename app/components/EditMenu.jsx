import style from './EditMenu.module.css'

const EditMenu = ({ menuList, styleList, handlerCloseMenu }) => {
  return (
    <div className={style.menu} onClick={(e) => e.stopPropagation()}>
      <button onClick={handlerCloseMenu}>close</button>
      <div>
        {menuList.map(item => {
          if (item.type === 'select') {
            return <div key={item.id} className={style.menuOption}>
              <label htmlFor={item.name}>{item.label}</label>
              <select name={item.name} id={item.name} defaultValue={styleList[item.name]}>
                {item.options.map(element => <option key={element.id} value={element.value}>{element.title}</option>)}
              </select>
            </div>
          }
          if (item.type === 'input') {
            return <div key={item.id} className={style.menuOption}>
              <label htmlFor={item.name}>{item.label}:</label>
              <input name={item.name} id={item.name} type={item.inputType} onChange={e => console.log(e.target.name, e.target.value)} defaultValue={styleList[item.name] || ''} />
            </div>
          }
        })}
      </div>
      <div>
        <div className={style.menuOption}><label htmlFor="autoMobile">Mobile view auto</label><input name="autoMobile" id="autoMobile" type="checkbox" /></div>
        <div className={style.menuOption}>Add new element</div>
        <div className={style.menuOption}>Delete element</div>
      </div>
    </div>
  )
}

export default EditMenu