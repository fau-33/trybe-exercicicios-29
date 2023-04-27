import './App.css';
import { useState } from 'react';
import messagesList from './data/messagesList';
import List from './components/List';

function App() {
    const [messages, setMessages] = useState(messagesList);
  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>

      <List messages={ messages } />
    </div>
  );
}

export default App;
