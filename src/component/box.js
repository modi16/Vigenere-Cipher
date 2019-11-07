import React from 'react';
import '../../src/styles/home.css';

export default function Box(props) {
    return (
        <div className="text-box">
            {props.text}
        </div>
    )
}
