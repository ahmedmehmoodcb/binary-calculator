import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      Operand1: "",
      Operand2: "",
      LastOperation: "",
      Result: ""
    };
  }

  async componentDidMount() {

  }

  handleChange = async event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value });
  }

  operatorFunc = (operator) => async event => {
    
    if(this.state.Operand1.match(/^[0-1]+$/) === null || this.state.Operand2.match(/^[0-1]+$/) === null){
      alert("Invalid operands, Only 0 and 1 allowed.");
      return false;
    }
    var x = parseInt(this.state.Operand1, 2);
    var y = parseInt(this.state.Operand2, 2);
    let result = "";
    if(operator === "+"){
      var sum = x + y;
      result = sum.toString(2);
    }else if(operator === "-"){
      var sub = x - y;
      result = sub.toString(2);
    }else if(operator === "*"){
      var mul = x * y;
      result = mul.toString(2);
    }else if(operator === "/"){
      var div = x / y;
      result = div.toString(2);
    }
    
    //alert(result);
    var LastOperation = this.state.Operand1 + " " + operator + " " + this.state.Operand2;
    this.setState({LastOperation: LastOperation, Result: result });
  }
  render() {
    return (
    <div className="container">
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="col-lg-4">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" name="Operand1" id="InputName" placeholder="Operand 1" value={this.state.Operand1} onChange={this.handleChange} required />
                    </div>
                    <label htmlFor="Operand1">Operand 1</label>
                  </div>
                </div>
              <div className="col-lg-4">
                  <button className="btn" id="plus" onClick={this.operatorFunc("+")}>+</button>
                  <button className="btn" id="minus" onClick={this.operatorFunc("-")}>-</button>
                  <button className="btn" id="multiply" onClick={this.operatorFunc("*")}>*</button>
                  <button className="btn" id="divide" onClick={this.operatorFunc("/")}>/</button>
                  <br />
                  <label htmlFor="InputName">operator</label>
                  <div className="form-group">
                    <div className="input-group text-center">
                      <input type="text" className="form-control" name="LastOperation" placeholder="Last Operation" value={this.state.LastOperation} disabled={true} />
                    </div>
                    <label htmlFor="InputEmail">Last Operation</label>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" name="Result" placeholder="Result" value={this.state.Result}  disabled={true} />
                    </div>
                    <label htmlFor="InputEmail">Result</label>
                  </div>                  
                </div>
              <div className="col-lg-4">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" id="Operand2" name="Operand2" placeholder="Operand 2" value={this.state.Operand2} onChange={this.handleChange} required  />
                    </div>
                    <label htmlFor="Operand2">Operand 2</label>
                  </div>
                </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
        </div>
    );
  }
}

export default App;