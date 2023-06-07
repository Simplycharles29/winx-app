import React from 'react'

const Allmenu = ({ menu }) => {
  return (
    <div>
        <div className="menu">
            {menu.map(list =>{
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

export default Allmenu
