import React from 'react'
import Column_Header from '../columnHeader/Column_Header'
import './popular.scss';
import Card from '../card/Card';

const Popular = () => {
    return (
        <div className="popular_wrapper">
            <div className="popular_title">
                <h2>What's Popular</h2>
                <Column_Header/>
            </div>
            <Card/>
        </div>
    )
}

export default Popular
