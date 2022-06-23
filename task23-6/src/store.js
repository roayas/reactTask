import React, { Component } from 'react';
class Store extends Component {
    constructor(props){
        super(props);
        this.state={
            num:[5, -2, 23, 7, 87, -42, 509 ]
        }
    }
 
    render() { 
        return (
            <div>
            {this.state.num.sort((a,b) => a> b? 1:-1).map((sortedMember) =>(
                <h1>{sortedMember}</h1>
            ))}
            </div>
        );
    }
}
 
export default Store ;