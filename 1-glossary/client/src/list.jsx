import React from 'react';
import ListEntry from './listEntry.jsx';

const List = ({list}) => {
  return(
    <div>
      List Entries
      {list.map((item) => {
        return <ListEntry key={item.name} entry={item}/>
      })}
    </div>
  )
}

export default List