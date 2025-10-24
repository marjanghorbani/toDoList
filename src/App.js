import './App.css';
import { useState } from 'react';
import ToDoItem from './components/ToDoItem';


function App() {
  const [inputText , setInputText] = useState('');
  const [items , setItems] = useState([]);

  const handleChange = (event) => {
    const newInput = event.target.value;
    setInputText(newInput);
  }
  const addItem = () => {
    setItems(prevV => {
      return [...prevV , inputText]
    })
    setInputText('');
  }
  return (
      <div className='container'> 
        <div className='heading'>
          <h1>TO‌ DO LIST</h1>
        </div>
        <div className='form'>
          <input type='text' value={inputText} onChange={handleChange} />
          <button onClick={addItem} >
            <span>
              Add
            </span>
          </button>
        </div>
        <div>
          <ul>
            {
              items.map((item , index)=>(
                  <ToDoItem
                  task = {item}
                  id = {index}
                  key = {index}
                  />                
              ))
            }
          </ul>
        </div>
      </div>   
  );
}

export default App;
