import './Main.css';
import React, { Component } from 'react';
import Gender from './Gender';
// import React from 'react';
import {useState} from 'react';
import Slider from '../Slider/Slider';

function Main() {
   

    

    return (
        <div className="Main"  >
            <h1 className='true-love'>Find your true love</h1>
            
            
            <Slider />
            <p>Just fill the blank</p>
            <hr />
            <Gender />
            <form  method="post" name="commentform" id="commentform">

               
              
                

<p><input type="text" name="name" id="name" defaultValue="" size="25"></input>
<small> Name</small>
</p>
<p><input type="text" name="surname" id="surname" defaultValue="" size="25" />
<small> Surname</small>
</p>
<p><input type="text" name="email" id="email" defaultValue="" size="25" />
<small> Email</small>
</p>
<p><form name="male_female" action="" method="post">
Looking for:<br />
<p><input type="text" name="age" id="age" defaultValue="" size="25" />
<small> Age</small>
</p>
<input type="radio" name="Sex" value="Мужской" checked="checked" /> Male<br />
<input type="radio" name="Sex" value="Женский" /> Female<br />

</form></p>
<p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="closing-button"><span>Seek your partner</span></a>
</p>
</form>

</div>
    );
    
        
    }
    


// function draw() {
//     let handler = () => {

//     }
//     return (
//         <>
        
//         <div>
//             <button onClick={handler}> This button change state</button>
//         </div>
//         <div>
//             {this.state.count % 2 === 0 ? 'even' : 'odd'}
//         </div>
//         <div>
//             {this.state.count}
//         </div>
//         </>
//     );
// }






export default Main;