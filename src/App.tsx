import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Loading from './components/Loading';

export type FormType = {
  loading: boolean;
  handleLoading: (data: boolean) => void;
};

function App() {
  

  return (
    <div className='App'>
      <Form />
    </div>
  );
}

export default App;
