import React from "react";
import ReactDOM from 'react-dom/client';



class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
     
    }
    
    render() {
      if (this.state.errorInfo) {
        
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
     
      return this.props.children;
    }  
  }
  
  class BuggyCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    
    render() {
      if (this.state.counter === 5) {
       
        throw new Error('I crashed!');
      }
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
  }
  
  function Error() {
    return (
      <div>
        <p>
          <h2>
            Error Boundaries 
            <br /><br />
            Click on the numbers to 5 and  get the Uncaught Run Time Error :) .
            <br />
           
          </h2>
        </p>
        <hr />
        <ErrorBoundary>
          
          <BuggyCounter />
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
       
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Error />);

  export default Error;
  