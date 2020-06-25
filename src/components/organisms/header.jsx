import React from 'react'
import '../../styles/header.css'
import Switch from '../molecules/change'
const Header = () => {
  return (
    <header className="main-header">
      <div className="sociales-header">
        <h1 className="title"> Social Media Dashboard </h1>
        <p className="text"> Total Followers: 23, 004</p>
      </div>
      <div className="mode">
        <p className="text-mode"> Dark Mode</p>
        <Switch />
      </div>
    </header>
  )
}

export default Header