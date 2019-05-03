import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'
 
export default class Page extends Component {
  render() {
        // scroll to #section1 without saving that hash update in history
        goToAnchor('home')
        goToAnchor('home', false)
        
        // scroll to #section1, saving that hash update in history
        goToAnchor('home', true)
    return (
      <div>
        <a href='#home'> Home </a>
        <a href='#history'> History </a>
        <a href='#about'> About </a>
        <ScrollableAnchor id={'home'}>
          <div></div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'history'}>
          <div></div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'about'}>
          <div></div>
        </ScrollableAnchor>


      </div>
    )
  }
}