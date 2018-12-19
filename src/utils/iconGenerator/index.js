import React, { Component } from 'react';
import Icon from '../../elements/icon';

export default class index extends Component {

    constructor(props){
        super(props)
        this.state = {
            icons: [1,2,3]
        }  
    }

    handleKeydown = (e) => {
        if(e.keyCode === 13){
            debugger
            var val = Number(e.target.value);
            this.setState((state) => ({
                icons: [...state.icons, val]
            }));
            console.log(this.state.icons)
        }
    } 

  render() {
    return (
      <div>
        <input onKeyDown={this.handleKeydown} type="text"/>
        {
            this.state.icons.map((el, index) =>  
                <Icon key={index} sportId={el} />
            )
        }
      </div>
    )
  }
}
