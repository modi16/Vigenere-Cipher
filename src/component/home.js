import React, { Component } from 'react'
import '../../src/styles/home.css'
import Box from "./box.js";




export default class Home extends Component {
    constructor() {
        super();
        this.state = {
          textInTheBox:"",
          value: ""
        }
      }
    position=(x)=>{
        let alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let y=alphabet.indexOf(x);
        return y;
    }

    letter=(x)=>{
        let alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let p=alphabet[x];
        return p;
    }

    encryptionForm=(x, y)=>{
        let cipher=(x+y)%26;
        return cipher;
    }
    decryptionForm=(x,y)=>{
        let plain=(x-y);
        let result;
        (plain<0)? result=(plain+26)%26: result=plain%26;
        return result;
    }

    encrypt=()=>{
        
        let plaintext= this.plaintextInput.value.toUpperCase();
        let textArr=plaintext.split('');
        let key= this.keyInput.value.toUpperCase();
        let keyArr=key.split('');
        
        let i; 
        
        if (textArr.length>keyArr.length){ 
            for (i=0; i<=(textArr.length-keyArr.length); i++){
                keyArr.push(keyArr[i]);
            }
        }
        
        let n=(textArr.length);
        let j; 
        let encryptedletter=[];
        let encryptedText=[];
            
        for (j=0; j<n; j++){
        
            let a=this.position(textArr[j]);
            let b=this.position(keyArr[j]);
            
            let prev=this.encryptionForm(a,b);
           
            encryptedletter=this.letter(prev);
           
            encryptedText+=encryptedletter;
        }
        this.setState({textInTheBox: encryptedText})
          
        this.setState({value:encryptedText})     
    }

    decrypt=()=>{
        let encryption= this.plaintextInput.value.toUpperCase();
        let textArr=encryption.split('');
        let key= this.keyInput.value.toUpperCase();
        let keyArr=key.split('');

        let i;
        if (textArr.length>keyArr.length){ 
            for (i=0; i<=(textArr.length-keyArr.length); i++){
                keyArr.push(keyArr[i]);
            }
        }
        let n=(textArr.length);
        let j; 
        let decryptedletter=[];
        let decryptedText=[];
            
        for (j=0; j<n; j++){
        
            let a=this.position(textArr[j]);
            let b=this.position(keyArr[j]);
           
            let prev=this.decryptionForm(a,b);
            
            decryptedletter=this.letter(prev);
            
            decryptedText+=decryptedletter;
        }
        this.setState({textInTheBox: decryptedText})
    }
       
    render() {
       
        return (
            <div>
                <div>
                    <h1> Vigenere cipher</h1>
                    <h4>Introduce the text you would like to encrypt and the key you wish to use</h4>
                </div>
                <div className="plain-text" >
                    <textarea placeholder="Text to encrypt" ref={p => (this.plaintextInput = p)}/>
                </div>
                <div className="key-input">
                    <input type="text" placeholder="Key" ref={c => (this.keyInput = c)}/>
                </div>
                <div className="actions">
                    <button className="encrypt" type="submit" onClick={this.encrypt}>Encrypt</button>
                    <button type="submit" disabled={!this.state.value} onClick={this.decrypt}>Decrypt</button>
                </div>
                <Box text={this.state.textInTheBox}/>
            </div>
        )
    }
}
