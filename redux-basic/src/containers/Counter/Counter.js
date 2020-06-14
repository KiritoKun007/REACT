import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdditionToCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractToCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResult.map(result => {
                        return <li onClick={() => this.props.onDeleteResult(result.id)} key={result.id}>{result.val}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter.counter,
        storedResult: state.results.results

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdditionToCounter: () => dispatch({type: actionTypes.ADDITION, value: 5}),
        onSubtractToCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, id: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);