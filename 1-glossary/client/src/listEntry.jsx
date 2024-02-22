import React, {useState} from 'react';

const ListEntry = ({entry, deleteEntry, updateEntry}) => {
  const deleteEntryEx = () => {
    deleteEntry(entry.word);
  }

  let [newDefinition, setNewDefinition] = useState('')

  const updateEntryEx = () => {
    updateEntry(entry.word, newDefinition)
  }

  return(
    <div>
      <p><b>Word:</b> {entry.word}</p>
      <p><em>Definition:</em>{entry.definition}</p>
      <form>
        <input value={newDefinition} onChange={e => setNewDefinition(e.target.value)}></input>
        <button onClick={updateEntryEx}>Edit Definition</button>
      </form>
      <button onClick={deleteEntryEx}>Delete</button>
    </div>
  )
}

export default ListEntry