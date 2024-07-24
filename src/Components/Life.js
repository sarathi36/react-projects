import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }

  addHeader = () => {
    this.setState({show: true});
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div id='life'>
      {myheader}
      <button type="button" onClick={this.addHeader}>Add </button>
      <button type="button" onClick={this.delHeader}>Delete </button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.log("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h2>The Earth is the third planet from the sun. It is also called the blue plane. The Earth is the only planet that supports life because of the availability of air, water, and gases needed for survival. The climate of the Earth is mild.</h2>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container />);

export default Container;