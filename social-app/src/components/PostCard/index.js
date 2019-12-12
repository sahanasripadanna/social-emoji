import React, {Component} from 'react';
// import './card.css';
import 'moji-translate';
var translate = require('moji-translate');

// var emo = (translate.getEmojiForWord('hi'));

export default class PostCard extends Component{
    constructor(){
        super();
        
    }

    render(){
        var translated_text = translate.translate(this.props.data.post_info.text);

        return (
        <div className="card" >
            <ul>
                <li className="author">{this.props.data.post_info.author}</li>
                <li className="date">{this.props.data.post_info.date}</li>
                <li className="text">{translated_text}</li>
                
            </ul>
        </div>
        )
    }
	
}