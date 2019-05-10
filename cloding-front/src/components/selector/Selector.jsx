import React, { Component } from 'react'
import Cloth from './Cloth';

export default class selector extends Component {
  render() {
    return (
      <React.Fragment>
        <Cloth />
        <Cloth />
        <Cloth />
      </React.Fragment>
    )
  }
}
