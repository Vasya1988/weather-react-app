import react from 'react';
import './App.css';
import Weather from './containers/Weather/Weather';

class App extends react.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Weather />
      </div>
    )
  }
}

export default App;
