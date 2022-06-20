import React from "react";

class Team extends React.Component{
    constructor(props){
        
        super(props)
        this.state=[{
            student:"Roa",
            msg:"The best student in Aqaba cohort",
            like:"10000 Number of likes"
    },
    {
        student:"Obada",
        msg:"Good student in Aqaba cohort",
        like:" 100 Number of likes"
    },
    {
        student:"Teaba",
        msg:"Good student in Aqaba cohort",
        like:"100 Number of likes"
    },
    {
        student:"Raghad",
        msg:"Poor Aqaba cohort",
        like:"10 Number of likes"
    }];
  
    }
    render(){
        return(

            <div className="container">
            
            {this.state.map(({student,msg,like}) =>(
                <div className="card">
                <h1>{student}</h1>
                <p>{msg}</p>
                <h4>{like}</h4>
                </div>
            ))}
            </div>
        );
    }
}
export default Team;