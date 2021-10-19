import React from 'react';
import If from './If';

export default props => {
  return (
    <div>
      <If test={props.numero % 2 === 0}>
        <span> É Par </span>
      </If>
      <If test={props.numero % 2 === 1}>
        <span> É Impar </span>
      </If>
      <h2> O número {props.numero} </h2>
    </div>
    )
}
