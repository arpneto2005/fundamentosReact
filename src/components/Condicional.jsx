import React from 'react';

export default props => {
  return (
    <div>
      <h2> O número {props.numero} </h2>
      { props.numero % 2 === 0 ? <span> É Par </span> : <span> É Impar </span> }
    </div>
    )
}
