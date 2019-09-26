import React from "react";
import Jinxy from './Jinxy';

class App extends React.Component {
    
state = {
    colors: ['red', 'green', 'blue']
};


componentDidMount() {
  this.setState  ({
  colors: [...this.state.colors, "yellow", "purple", "orange"],
  jinxes: [ ...this.state.colors, "indigo", "magenta" ]
});
}
  render() {
      console.log(this.state.colors);

    return (
      <div className="container">
    <div className="color">
    <Jinxy jinxes={this.state.jinxes} colors={this.state.colors.filter(color => 
      color !== "purple"
    ).join(' ')}/>
    </div>
    </div>
     )};
    };


    
export default App;
