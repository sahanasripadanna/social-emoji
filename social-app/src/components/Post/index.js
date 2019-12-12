import React, {Component} from 'react';
import '../../card.css';
import 'moji-translate';

var translate = require('moji-translate');


export default class Post extends Component{
    constructor(){
        super();
        
    }

    render(){
        var translated_text = translate.translate(this.props.data.post_info.text);
        var user = ["girl", "boy", "man", "dog", "fairy", "heart", "cat", "adult", "woman", "animal"];
        var num = Math.floor(Math.random() * 10) + 1;
        console.log(num);
        // var userpic = translate.getEmojiForWord(user[num]);
        

        return (
        <div className="card" >
            <ul>
                <li className="author"><span>🏷️</span>: {this.props.data.post_info.author}</li>
                <li className="date"><span>⏰</span>: {this.props.data.post_info.date}</li>
                <li className="text">{translated_text}</li>
                
            </ul>
        </div>
        )
    }
	
}