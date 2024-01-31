//import React from 'react'
import { useState } from 'react'
import '../css/navbar.css'
import pinLogo from '../assets/pin.png'
import searchIcon from '../assets/icons8-search-30.png'

export default function Navbar({ onSearch }){
    const [searchCard, setSearchCard] = useState('');

    const handleSearch = () => {
        onSearch(searchCard)
    }

    return (
        <nav>
            <div className='title'>
                <img className='pin-logo' alt='logo' src={pinLogo}></img>
                <h2>Scopri la tua prossima destinazione</h2>    
            </div>
            <div className='search-bar'>
                <input type='text' placeholder='Search...' value={searchCard} onChange={(e) => setSearchCard(e.target.value)}></input>
                <button onClick={handleSearch}><img className='search-icon' alt='search-icon' src={searchIcon}></img></button>
            </div>
        </nav>
    )
}