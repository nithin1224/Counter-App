import React, {Component} from 'react';
//import PropTypes from 'prop-types'
import './counter.css';
import CounterButton  from './CounterButton';

class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter: 0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    }

    render() {
        return (
          <div className="Counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={20} incrementMethod={this.increment} decrementMethod={this.decrement}/>

            <span className="count"
            style = {{fontSize : "50px"}}
            >{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>Reset</button></div>
          </div>
        );
    }

    increment(by){
        //Update counter state
        //console.log('increment');
        //this.state.counter+1;
        console.log(`increment from counterButton - ${by}`)
         this.setState(
             (prevState) => {
             return {counter: prevState.counter + by}
         })
    }

    decrement(by){
        //Update counter state
        //console.log('decrement');
        //this.state.counter-1;
        console.log(`decrement from counterButton - ${by}`)
         this.setState(
             (prevState) => {
             return {counter: prevState.counter - by}
         })
    }

    reset(){
        this.setState(
            {counter: 0}
    )
    }

}

export default Counter;