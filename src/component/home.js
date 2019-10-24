import React, { Component } from 'react'
import '../../src/styles/home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1> Vigenere cipher</h1>
                    <h4>Introduce the text you would like to encrypt and the key you wish to use</h4>
                </div>
                <div className="plain-text" >
                    <textarea placeholder="Text to encrypt"/>
                </div>
            </div>
        )
    }
}
