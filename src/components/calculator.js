import React, { Component } from 'react';
import * as api from '../api/index';

class Calculator extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
    		firstNum: null,
    		secondNum: null,
    		operator: null,
    		textValue: "",
    		reset: true
    	}
    	this.performClick = this.performClick.bind(this);
   	}

   	performClick(buttonValue){
   		if(buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
   			if(this.state.textValue !== ""){
   				if(this.state.firstNum == null){
   					this.setState({
   						...this.state,
						firstNum: parseInt(this.state.textValue,10),
						operator: buttonValue,
						reset: true
					})
				} else {
					//call api
					api.calculate(this.state.firstNum,parseInt(this.state.textValue,10),this.state.operator).then((res) => {
						if(res.statusCode === 200) {
			                this.setState({
		   						...this.state,
								firstNum: res.data,
								textValue: res.data.toString(),
								operator: buttonValue,
								reset: true
							})
		            	}
		            });
				}
			}
		} else if(buttonValue === "=") {
			if(this.state.firstNum !== null && this.state.textValue !== "") {
				api.calculate(this.state.firstNum,parseInt(this.state.textValue,10),this.state.operator).then((res) => {
					if(res.statusCode === 200) {
		                this.setState({
	   						...this.state,
							firstNum: res.data,
							textValue: res.data.toString(),
							operator: buttonValue,
							reset: true
						})
	            	}
	            });
			}
   		} else if(buttonValue === "C") {
   			this.setState({
	   			firstNum: null,
	    		secondNum: null,
	    		operator: null,
	    		textValue: "",
	    		reset: true
    		});
   		} else {
   			if(this.state.reset){
   				this.setState({...this.state,textValue:buttonValue,reset:false});
   			} else {
   				this.setState({...this.state,textValue:this.state.textValue+buttonValue});
   			}
		}
   	}

  	render() {
  		return (
    		<div className="row">
          		<div className="col-xs-12 col-sm-offset-4 col-sm-4 panel panel-default calculator-container">
		      		<div className="row panel-body">
		      			<div className="col-xs-12 calc-data">
		    				<input type="text" className="form-control" id="data-input" value={this.state.textValue} disabled/>
			            </div>
			            <div className="col-xs-12 calc-buttons">
			                <button className="col-xs-3 btn btn-primary" value="1" onClick={() => {this.performClick('1')}}>1</button>
			                <button className="col-xs-3 btn btn-primary" value="2" onClick={() => {this.performClick('2')}}>2</button>
			                <button className="col-xs-3 btn btn-primary" value="3" onClick={() => {this.performClick('3')}}>3</button>
			                <button className="col-xs-3 btn btn-primary" value="+" onClick={() => {this.performClick('+')}}>+</button>
			                <button className="col-xs-3 btn btn-primary" value="4" onClick={() => {this.performClick('4')}}>4</button>
			                <button className="col-xs-3 btn btn-primary" value="5" onClick={() => {this.performClick('5')}}>5</button>
			                <button className="col-xs-3 btn btn-primary" value="6" onClick={() => {this.performClick('6')}}>6</button>
			                <button className="col-xs-3 btn btn-primary" value="-" onClick={() => {this.performClick('-')}}>-</button>
			                <button className="col-xs-3 btn btn-primary" value="7" onClick={() => {this.performClick('7')}}>7</button>
			                <button className="col-xs-3 btn btn-primary" value="8" onClick={() => {this.performClick('8')}}>8</button>
			                <button className="col-xs-3 btn btn-primary" value="9" onClick={() => {this.performClick('9')}}>9</button>
			                <button className="col-xs-3 btn btn-primary" value="*" onClick={() => {this.performClick('*')}}>*</button>
			                <button className="col-xs-3 btn btn-danger" value="C" onClick={() => {this.performClick('C')}}>C</button>
			                <button className="col-xs-3 btn btn-primary" value="0" onClick={() => {this.performClick('0')}}>0</button>
			                <button className="col-xs-3 btn btn-primary" value="=" onClick={() => {this.performClick('=')}}>=</button>
				            <button className="col-xs-3 btn btn-primary" value="/" onClick={() => {this.performClick('/')}}>/</button>
			            </div>  
		      		</div>
		      	</div>
		    </div>  	
    	);
  	}
}

export default Calculator;
