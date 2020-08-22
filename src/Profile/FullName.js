import React from 'react'
import './FullName.css'


function FullName() {
    const firstName="Houdhayfa"
    const lastName="Ben Khlil"
    return (
        <div className="fullname">
            <h1>{firstName} {lastName} </h1>
        </div>
    )
}

export default FullName
