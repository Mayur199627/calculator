import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
    return (
      <div className='header'>
      <div className="display-cont">
            {this.props.display.value}
      </div>
      </div>
    )
  }
}
