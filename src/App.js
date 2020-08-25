import React from 'react';

function Food({fav}){
  console.log(fav);
return <h2>I love {fav}</h2>
}

function App() {
  return (
    <div>
      <div className="App">
        <h1>Hello!</h1>
        <Food 
          fav="kimchi" 
          prop1={true}
          prop2={[1,"2",false]}
          prop3={{
            "key1":"value1"
            ,"key2":"value2"
          }}
        />
        <div className="hello"></div>
      </div>
    </div>
  );
}

export default App;
