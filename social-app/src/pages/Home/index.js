import React, {Component} from "react";
import PostCard from '../../components/PostCard';



export default class Home extends Component {

  constructor(){
    super();
    this.state ={ 
    	data: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:4000')
        .then(res => res.json())
        .then(data => this.setState({data}))
        .catch((error) => {
            console.log(error);
        });
  }

  

  render(){
  	

    return(
        <div>
        	<h1>Em😊jibook</h1>
        	 <div className="posts">
                    {this.state.data.map( data =>
                        <PostCard key={data.id} data={data} />
                    )}
             </div>
        	
        </div>
    );
  }
}
