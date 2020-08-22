import React from 'react'
import photo from './photo.jpg'
import './ProfilePhoto.css'

function ProfilePhoto() {
    return (
        <div className="photo">
           <img src={photo} />
        </div>
    )
}

export default ProfilePhoto
