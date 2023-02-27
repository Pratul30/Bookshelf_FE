import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <hr />
            <div className='headerContent'>
                <div className='headerCircular'>
                    <div className='circluarContent'>
                        BS
                    </div>
                </div>
                <div style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
                    The Book Shelf
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Header
