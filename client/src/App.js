import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {out: 'hello'};
  }

  componentDidMount() {
    this.getBackend();
  }

  getBackend = () => {
    fetch('/express_backend')
      .then(res => res.json())
      .then(res => this.setState({out: res.out}));
      
  }

  render() {
    
    return (
      <div className="App">
        <div id="cards">
          <div class="container">   
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
            <Card name="Pablo the Pablano" tier="SSS" dogtype="Pupper" upvotes="1002" downvotes="0" attributes="supreme cuddler, lick monster, hand shaker"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
