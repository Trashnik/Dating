
import React from 'react';
import { useState } from 'react';
import  ReactDOM  from 'react';

function Gender() {

    
const [change, setChange] = useState(0);

let handler = () => {
    let currentChange = change;
    currentChange++;
    setChange(currentChange);

} 


// buttonHandler = () => {
//     let val = this.state.s1;
//     val++;
//     this.setState
// }

return (
    <>
    
    <div>
        <button onClick={handler}> Click to choose your gender</button>
    </div>
    <div>
        {change % 2 === 0 ? 'MALE' : 'FEMALE'}
    </div>
    
    </>
    
    
);




}

export default Gender