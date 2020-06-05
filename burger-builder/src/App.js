import React from 'react';
import './App.scss';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout/Layout';

function App() {

  return (
    <div className="App">
      <Layout>
        <BurgerBuilder /> 
      </Layout>
    </div>
  );
}

export default App;
