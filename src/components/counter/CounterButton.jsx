import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './counter.css';

class CounterButton extends Component{
    //Defining the initial state in a constructor
    //state -> counter 0
    constructor(){
        super();
        // this.state={
        //     counter: 0
        // }
        // this.increment=this.increment.bind(this);
        // this.decrement=this.decrement.bind(this);
    }
    render(){
        return(
        <div className="counter">
            <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            {/*<span className="count" style = {{fontSize : "50px"}}>{this.state.counter}</span>*/}
        </div>
        );
    }

}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default CounterButton;