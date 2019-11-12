import React from 'react'

export default function alertMessage({title , description}) {
    return <p>{title && <a href="#" className="alert-link">{title}:</a>} {description}</p>
}
