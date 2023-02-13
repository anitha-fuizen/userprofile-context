import * as React from 'react';

const Userprofilename = (props:any) =>{
    let d = new Date()
    let hour = d.getHours()
   // let hour = d.getHours()
   // let hour = d.getHours()
    return(
        <div>
            {<h2>Hiii {hour>12?(hour>17?"Good Evening ":"Good Afternoon "):"Good Morning "}{props.name}</h2>}
        </div>
    )
}   
export default Userprofilename ;