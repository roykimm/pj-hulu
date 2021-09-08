import React, { useEffect } from 'react'
import Header from './components/Header'

function msclone() {

    useEffect(() => {
        console.log('useEffect')
    })
    
    return (
        <div className="bg-primary">
            <Header />
            <h1>Ms clone</h1>
        </div>
    )
}

export default msclone
