

import React from 'react';
import "./Loader.css"

export default function Loader({ w = "100%", h = "100vh" }) {
    return <div style={{ width: w, height: h }} className='loader_container'>
        <div className='lds-roller'><div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div></div>
    </div>
}

