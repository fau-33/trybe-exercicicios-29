import './App.css';
import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render(){
    const { countState } = this.props;
    
    return (
      <div className='App'>
      <h1>Contador</h1>
      <p>{ countState }</p>
      <button>Incrementar 1</button>
      <button>Incrementar 5</button>
    </div>      
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
});

export default connect(mapStateToProps)(App);
