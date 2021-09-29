import React, {useState} from "react";
import {categories, products} from './data'

function App() {
  let [selectedCat, setSelectedCat] = useState(categories[0]);
  let [counter, setCounter] = useState(0);

  return (
    <div className='container'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mt-3">
        <a class="navbar-brand" href="#">KFC Cards => Cart Items ({counter})</a>
      </nav>
      <div className='row'>
        <div className='col-3 mt-3'>
        <ul class="list-group">
        {
          categories.map(c => 
            <li 
              className={c === selectedCat ? "list-group-item active" : "list-group-item"}
              onClick={() => setSelectedCat(c)}
            >
              {c}
            </li>)
        }
        </ul>
        </div>
        <div className='col-9'>
          <div className='row'>
            {
              products.filter(p => p.category.toUpperCase() === selectedCat.toUpperCase())
                .map(p => 
                  <div className='col-4 mt-3'>
                  <div className="card" style={{width: "100%"}}>
                  <img className="card-img-top" src={p.image} alt="Card image cap" />
                  <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text text-truncate">{p.description}</p>
                    <button 
                    onClick= {() => setCounter(counter + 1)}
                    className="btn btn-primary">Add To Cart</button>
                  </div>
                  </div>
                  </div>
              )}
          </div>            
        </div>
      </div> 
    </div>
  );
}

export default App;