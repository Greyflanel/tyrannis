import React from "react";
import Jinxy from './Jinxy'

class App extends React.Component {
    
state = {
    colors: ['red', 'green', 'blue']
};

componentDidMount() {
  this.setState  ({
  colors: [...this.state.colors, "yellow", "purple", "orange"]
});
}
  render() {
      console.log(this.state.colors);

    return (
      <div className="container">
    <div className="color">
    <Jinxy colors={this.state.colors.filter(color => 
      color !== "red"
    ).join(' ')}/>
    </div>
    </div>
     )};
    };

export default App;
