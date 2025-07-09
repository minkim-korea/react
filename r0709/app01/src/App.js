import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Counter from './comp/Counter';
import'./css/Style.css';
import Form from './comp/Form';
import Shape from './comp/Shape';

function App() {
  return (
    <div className="App">
     <h2>메인페이지</h2>
     <div className='d_form'>
     <Form/>
     </div>
     <div className='t_shape'>
     <Shape/> 
     <Shape/> 

     </div>
      <Counter/>
      
    </div>
  );
}

export default App;
