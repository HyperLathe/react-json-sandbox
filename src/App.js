import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]) 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
      
}, []);

  return (
    <div className="App">
      <ul>
        {posts.map((item, key) => (
          <li key={key}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
