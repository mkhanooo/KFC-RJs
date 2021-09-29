import React, {useState} from 'react';

function Example(){
  let [counter, setCounter] = useState(2);

  return (
    <>
    <h1 style={counter === 0 ? {color: 'red'} : {color: 'green'}}>counter = {counter}</h1>
    <br />
    <button 
      className='btn btn-primary' 
      onClick={() => setCounter(counter + 1)}
    >
        Increment
    </button>
    <br />
    <button 
      className='btn btn-primary' 
      onClick={() => counter !== 0 && setCounter(counter - 1)}
    >
      Decrement
    </button>
    </>
  )
}

export default Example;


//------------------------------------------------------------
// import React, {useState} from 'react';

// function Example(){
//   let [counter, setCounter] = useState(2);

//   let increment = () => {
//     setCounter(counter + 1); 
//   }

//   let decrement = () => {
//     if(counter > 0)
//       setCounter(counter - 1); 
//   }

//   let getColor = () => {
//     if(counter === 0)
//       return {color: 'red'};
//     else
//     return {color: 'green'};
//   }

//   return (
//     <>
//     <h1 style={getColor()}>counter = {counter}</h1>
//     <br />
//     <button className='btn btn-primary' onClick={increment}>Increment</button>
//     <br />
//     <button className='btn btn-primary' onClick={decrement}>Decrement</button>

//     </>
//   )
// }

// export default Example;