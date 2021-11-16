import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

 const [people,setPeople]=useState(data);

  return (
    <>
    <section className="container"> 
    <h3>Bu data {people.length} kadar kişinin doğum gününü içeriyor</h3>
    <List people={people}/>
    <button onClick={()=>setPeople([])}>Listeyi temizle</button>
    </section>
    </>
  );
}

export default App;
