import React from 'react'
import './HomeContainer.css'
import Button from './Button'

function Home() {
    return (
        <div className='home-container'>
            <video src='/video-2.mp4' autoPlay loop muted />
            <h1 className='title'>Currency Exchange Rates</h1>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
        </div>
    )
}

export default Home
