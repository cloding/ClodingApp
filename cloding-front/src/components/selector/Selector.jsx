import React, { Component } from 'react'
import Cloth from './Cloth';

export default class selector extends Component {
  render() {
    return (
      <React.Fragment>
        <Cloth
          cloth="t-shirt"
          clothText="T-shirt made in sustainable fabrics, cotton 100%, that create awareness of the need to protect our planet."
          price="30"
          clothImage="https://res.cloudinary.com/dgp1wgz95/image/upload/v1557998622/Cloding/wear/tShirtDesigner_mrnlmr.png"
        />
        <Cloth
          cloth="trousers"
          clothText="Trousers made in sustainable fabrics, cotton 100%, that create awareness of the need to protect our planet."
          price="60"
          clothImage="https://res.cloudinary.com/dgp1wgz95/image/upload/v1558001311/Cloding/wear/trousersDesigner_owwvnz.png"
        />
        <Cloth
          cloth="sweatshirt"
          clothText="Sweatshirt made in sustainable fabrics, cotton 100%, that create awareness of the need to protect our planet."
          price="40"
          clothImage="https://res.cloudinary.com/dgp1wgz95/image/upload/v1558001724/Cloding/wear/sudaderaDesigner_jxrnyb.png"
        />
      </React.Fragment>
    )
  }
}
