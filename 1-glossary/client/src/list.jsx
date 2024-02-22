import React from 'react';
import ListEntry from './listEntry.jsx';

const List = ({list, deleteEntry, updateEntry}) => {
  return(
    <div>
      List Entries
      {list.map((item) => {
        return <ListEntry key={item.word} entry={item} deleteEntry={deleteEntry} updateEntry={updateEntry}/>
      })}
    </div>
  )
}

export default List