import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { increment, doubleAsync } from 'actions/counter'

export class Counter extends Component {

  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    doubleAsync: PropTypes.func.isRequired
  }

  render() {
    const { counter, increment, doubleAsync } = this.props;

    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Counter: {counter}</h2>
        <button className='btn btn-primary' onClick={increment}>
          Increment
        </button>
        {' '}
        <button className='btn btn-secondary' onClick={doubleAsync}>
          Double (Async)
        </button>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  increment: () => increment(1),
  doubleAsync
}, dispatch);

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

