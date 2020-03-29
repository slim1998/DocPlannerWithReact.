import React from 'react';

function Intro(props) { 
return (
    <div>
<img className="logo-1" src="https://www.docplanner.com/img/sygnet.png"/>
       <h1 className="titre-1"> Making the healthcare experience more human</h1>
       <div className="text">
              {props.theinto.map(el=>(
                     <p className={el.parsty}>{el.p}</p>
              ))}
       </div>

</div>
);


}

export default Intro;