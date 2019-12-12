import React, {Component} from "react";
import Post from '../../components/Post';



export default class Home extends Component {

  constructor(){
    super();
    this.state ={ 
    	data: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:4000/api')
        .then(res => res.json())
        .then(data => this.setState({data}))
        .catch((error) => {
            console.log(error);
        });
  }

  render(){
  	

    return(
        <div>
        	<h1>Em<span>😊</span>jibook</h1>
        	 <div className="posts">
                    {this.state.data.map( data =>
                        <Post key={data.id} data={data} />
                    )}
             </div>
        	
        </div>
    );
  }
}
