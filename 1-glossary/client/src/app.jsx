import React, {useState, useEffect} from "react";
import List from './list.jsx';
import ListEntry from './listEntry.jsx';;
import axios from 'axios';


const App = () => {
  //deal with useState and useEffect
  const [list, setList] = useState([]);

  const [word, setWord] = useState('');

  const [definition, setDefinition] = useState('');

  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('/test')
    .then((response) => {
      setList(response.data);
    })
    .catch((error) => {
      console.error('error getting data')
    })
  }, [])

  //set up any additional functions
  const addToList = () => {
    axios.post('/test', {
      word: word,
      definition: definition
    })
    .then((response) => {
      console.log(response);
    })
    .then(() => {
      return axios.get('/test')
    })
    .then((response) => {
      setList(response.data);
    })
    .catch((err) => {
      console.error('unable to add to list ', err);
    })
  }

  const wordSearch = () => {
    event.preventDefault();
    console.log(search);
    axios.get(`/test/${search}`)
    .then((response) => {
      setList([response.data]);
    })
  }

  return(
    <div>
      <form>
        <label>
          A word
          <input value={word}
          onChange={e => setWord(e.target.value)}/>
        </label>
        <label>
          A definition
          <input value={definition}
          onChange={e => setDefinition(e.target.value)}/>
        </label>
        <button type="submit" onClick={addToList}>Add to list</button>
      </form>
      <form>
        <input value={search}
        onChange={e => setSearch(e.target.value)}/>
        <button onClick={wordSearch}>Search for a word!</button>
      </form>
      <p>Hello, World!</p>
      <List list={list}/>
    </div>
  )
}

export default App