import React, { Component } from 'react';

class Task3 extends Component {
    constructor(props){
        super(props);
        this.state = {isToggle: false, isRed: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleColor = this.handleColor.bind(this);
        // const
    }
    handleClick(event){
        this.setState({isToggle: !this.state.isToggle})
    }
    handleColor(event){
        this.setState({isRed: !this.state.isRed})
    }
    render() { 
        return (
            <>
            
            
            <button  onClick={this.handleClick}>disappear</button>{' '}
            <button  onClick={this.handleColor}>change color</button>{' '}
            <p  style={{display:this.state.isToggle?'block':'none',color:this.state.isRed?'black':'red'}}>see the magic</p>
            </>
        );
    }
}
 
export default Task3;
// function Task3() {
//    const dis=()=> {
//        document.getElementById('h1').style.display='none';
//       }
//     return(
//     <div>
//     <button type='submit' id='butt1' ontoggle="dis()">disappear</button><br></br>
//     <button type='submit'>change color</button>

//     <h1 id='h1'>see the magic</h1>
//     </div>)
// }
 
// export default Task3;
