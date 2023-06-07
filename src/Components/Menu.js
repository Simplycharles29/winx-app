import React, { useEffect, useState } from 'react'
import { menudata } from './menudata'
import Allmenu from './Allmenu'
import Breakfastmenu from './Breakfastmenu'
import Lunchmenu from './Lunchmenu'
import Dinnermenu from './Dinnermenu'

const Menu = () => {

    const [menu, setMenu] = useState([])
    const [all, setAll] = useState(true)
    const [breakfast, setBreakfast] = useState(false)
    const [lunch, setLunch] = useState(false)
    const [dinner, setDinner] = useState(false)
    
    useEffect(() =>{
        getMenu()
    }, [])

    const getMenu = () =>{
        setMenu(menudata)
    }

    const handleAll = () =>{
        setAll(true)
    }

    const handleBreakfast = () =>{
        setBreakfast(true)
        setAll(false)
    }

    const handleLunch = () =>{
        setLunch(true)
        setBreakfast(false)
        setAll(false)
    }
    
    const handleDinner = () =>{
        setDinner(true)
        setLunch(false)
        setBreakfast(false)
        setAll(false)
    }

  return (
    <section id='menu'>
      <h2>Me<span>nu</span></h2>

    <div className="button-flex">
        <button onClick={handleAll}>All</button>
        <button onClick={handleBreakfast}>Breakfast</button>
        <button onClick={handleLunch}>Lunch</button>
        <button onClick={handleDinner}>Dinner</button>
    </div>
        {all && <Allmenu menu={menu}/>}
        {breakfast && <Breakfastmenu menu={menu}/>}
        {lunch && <Lunchmenu menu={menu}/>}
        {dinner && <Dinnermenu menu={menu}/>}
    </section>
  )
}

export default Menu
