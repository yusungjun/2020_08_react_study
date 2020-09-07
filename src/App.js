import React from 'react';
import propTypes from "prop-types";

function Food({name, picture, rating}){
  return <div>
    <h2>I love {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} />
  </div>
}

Food.propTypes = {
  name : propTypes.string.isRequired,
  picture : propTypes.string.isRequired,
  rating : propTypes.number.isRequired
}

const foodILike = [
  {
    id : 1,
    name : "take1",
    image : "http://test.com/test1.jqg",
    rating : 5
  },
  {
    id : 2,
    name : "take2",
    image : "http://test.com/test2.jqg",
    rating : 4.9
  },
  {
    id : 3,
    name : "take3",
    image : "http://test.com/test3.jqg",
    rating : 4.5
  },
];


function App() {
  return (
    <div>
      <div className="App">
        {foodILike.map(obj =>(
          <Food key={obj.id} name={obj.name} picture={obj.image} rating={obj.rating}/>
        ))
        }
      </div>
    </div>
  );
}

export default App;
