import React, { Component } from 'react';

class Yeni extends Component {   
    constructor(props){
        super(props);
        this.kayit = function kayit(yazi){
            console.log(yazi);           
        }    
    } 
    render() {
        return (
            <div>
                <input onChange={e => this.kayit(e.target.value)} />
            </div>
        );
    }
}

export default Yeni;