import React, {Component}from "react";


class PostForm extends Component {
    submittedPost = false;

    constructor(){
        super();
        var timestamp = Date.now();
        var time = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);

        this.state = {
                Name: '',
                Date: time,
                Text: ''
        }
    }

    changeHandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e=>{
        e.preventDefault();

        var inputName = this.state.Name;
        var inputText = this.state.Text;

        if (inputName === "" | inputText === ""){
            alert("Please make sure you have input for all required fields!");
        }else{  
            this.updateAPI();
        }

        // if (this.submittedPost){
        //     window.location = '/';
        // }
    }

    updateAPI(){
        fetch('http://localhost:4000/receive', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => {
                console.log(res)
            }) 
            .catch(e => {
                console.log(e)
            })

        this.submittedPost = true; 
    }

    render(){
        const {Name, Text} = this.state;
        
        return( 
            <div>
                <form onSubmit={e => this.submitHandler(e)}>
                    <input type="text" name="Name" placeholder="Your Name" value={Name} onChange={this.changeHandler}/>
                    <input type="text" name="Text" placeholder="share your thoughts to be translated into pictures!" value={Text} onChange={this.changeHandler}/>
                    <button type='submit'>Post</button>
                </form>
        </div>
        )
         
    }  
}

export default PostForm;