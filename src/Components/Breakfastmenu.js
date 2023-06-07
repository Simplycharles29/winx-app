import React from 'react'

const Breakfastmenu = ({ menu }) => {

  const menuFilter = menu.filter(list =>{
    return list.meal === 'breakfast'
  });

  return (
    <div>
        <div className="menu">
          {menuFilter.map(list =>{
            return <div key={list.id}>
              <div className='menu-div'>
                <img className='menu-img' src={list.image} alt="" />
                <h1>{list.name}</h1>
                </div>
            </div>
          })}
      </div>
    </div>
  )
}

export default Breakfastmenu
