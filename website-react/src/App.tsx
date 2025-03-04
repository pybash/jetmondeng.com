import { Component, ReactNode } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import PageDirector from './pages/PageDirector';

class App extends Component {
  render(): ReactNode {
    return (
      <div className='App default-theme'>
        <NavBar />
        <PageDirector />
      </div>
    )
  }
}

export default App;
