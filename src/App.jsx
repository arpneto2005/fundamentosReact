import React from 'react';
import './App.css';

import Primeiro from './components/Primeiro';
import ComParametros from './components/ComParametros';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';

export default props => (
<div className='App'>
  <Card titulo='Primeiro Componente'>
    <Primeiro />
  </Card>

  <Card titulo='Componente com Parametros'>
    <ComParametros titulo='Esse é o título' subtitulo='Esse é o subtitulo' />
  </Card>

  <Card titulo='Componente com Filhos'>
    <ComFilhos>
      <ul>
        <li> Ana </li>
        <li> Bia </li>
        <li> Carlos </li>
        <li> Pedro </li>
        <li> Daniel </li>
      </ul>
    </ComFilhos>
  </Card>

  <Card titulo='Componente Repetição'>
    <Repeticao />
  </Card>

  <Card titulo='Componente Condicional V1'>
    <Condicional numero={15} />
  </Card>

  <Card titulo='Componente Condicional V2'>
    <Condicional numero={20} />
  </Card>

  <Card titulo='Exercício X'>
    Conteúdo
  </Card>
  {/**/
  }
</div>
)
