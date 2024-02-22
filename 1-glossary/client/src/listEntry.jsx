import React from 'react';

const ListEntry = ({entry}) => {
  return(
    <div>
      <p><b>Word:</b> {entry.word}</p>
      <p><em>Definition:</em>{entry.definition}</p>
    </div>
  )
}

export default ListEntry