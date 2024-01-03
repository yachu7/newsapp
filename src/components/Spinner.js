import React, { Component } from 'react'
import Pinwheel from './Pinwheel.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
        <img src={Pinwheel} alt="Pinwheel" />
      </div>
    )
  }
}
