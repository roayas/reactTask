import React,  { useState }  from "react";
import "./App.css";
import btata from "./MOCK_DATA.json";

function Search(){
    const list=[
        'roa',
        'samar',
        'raghad',
        'obade'
      ];
      const [searchTerm, setSearchTerm ]=useState("");
    return(
       

        <div className="App">
            <input type="text" placeholder="Search..." onChange={(event)=>{setSearchTerm(event.target.value);}}/>
            {btata.filter((val)=>{
                if(searchTerm==''){
                    return val
                }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val, key)=>{
                return(
                   <div className="user" key={key} >
                    <p>
                    {val.first_name} 
                    </p>
                    </div>
                );
            })}

        </div>
    );

}

export default Search;