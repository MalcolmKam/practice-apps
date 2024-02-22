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
    .catch((err) => {
      console.error('No matching entry found')
    })
  }

  const goBack = () => {
    event.preventDefault();
    axios.get('/test')
    .then((response) => {
      setList(response.data);
    })
    .catch((error) => {
      console.error('error getting data')
    })
  }

  const deleteEntry = (word) => {
    event.preventDefault();
    axios.delete(`/test/${word}`)
    .then((response) => {
      console.log(response)
    })
    .then(() => {
      return axios.get('/test')
    })
    .then((response) => {
      setList(response.data)
    })
    .catch((err) => {
      console.error('failed to delete entry: ', err);
    })
  }

  const updateEntry = (word, definition) => {
    event.preventDefault();
    axios.put(`/test/${word}`, {
      'definition': definition
    })
    .then((response) => {
      console.log(response);
    })
    .then(() => {
      return axios.get('/test')
    })
    .then((response) => {
      setList(response.data)
    })
    .catch((err) => {
      console.error(err);
    })
  }

  return(
    <div>
      <p>DICTIONARY</p>
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
        <button onClick={goBack}>Return to full list!</button>
      </form>
      <List list={list} deleteEntry={deleteEntry} updateEntry={updateEntry}/>
    </div>
  )
}

export default App