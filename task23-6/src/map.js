import React, { Component } from 'react';
class Map  extends Component {
    constructor(props){
        super(props);
        this.state={
            Fruits : [
                {id: 1 , name: "Apple",  color: "Yellow"},
                {id: 2 , name: "Strawberry", color: "Red"},
                {id: 3 , name: "Kiwi", color: "Green"}
            ]
              
        }
    }
    render() { 
        return (
            <table>
                <tr>
                   <th>id</th>
                   <th>name</th>
                   <th>color</th>
                </tr>
               
                    {this.state.Fruits.map((e,i)=>
                     <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.color}</td>
                    </tr>)}
                


            </table>
        );
    }
}
 
export default Map;