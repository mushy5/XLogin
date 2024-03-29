import './App.css';
import {useState} from 'react';

function App() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState('');

const handleSubmit = (e)=>{
  e.preventDefault();
  setError('');
  if(username === 'user' && password ==='password')
    setSubmitted('true');
  else
    setError('Invalid username or password');
}

  return (
    <div className="App">
     <h1>Login Page</h1>
     
     <p>{error}</p>
     {submitted ? `Welcome, ${username}!` 
     : 
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input type='text' required id='username' placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
          </div>

          <div>
            <label htmlFor='password'>Username:</label>
            <input type='password'required id='password' placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>

          <button type='submit'>Submit</button>
        </form>
     }
    
    </div>
  );
}

export default App;
