import React, { Component } from 'react';
 
class Count extends Component{
    constructor(){
        super();
        this.state={
            count :0 ,
        };
        this.increase=this.increase.bind(this);
    }
     
   increase(){
       this.setState({count : this.state.count +1
      });
       if((this.state.count>=0 )&& (this.state.count<5)){
        document.getElementById("color").style.color="red";
       }else{
        document.getElementById("color").style.color="black";
       }
   }
 
    render(){
        return (
            <div style={{margin:'50px'}}>
               <h2 className='isred' id="color"> {this.state.count}</h2> 
               <button onClick={this.increase}> Add</button>
 
            </div>
        )
    }
}
 
export default Count;