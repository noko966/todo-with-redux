import React, { Component } from 'react'
import Icon from '../elements/icon'

export default class iconGenerator extends Component {
    constructor(props){
        super(props)

        this.state = {
            fonts: [1,2,3,4,5]
        }
    }

    addFont = (e) => {
        var icons = []
        var icon = e.target.value;
        e.target.value='';
        icons.push(icon);
        console.log(icons)
        this.setState({fonts: icons})
    }

  render() {
    return (
      <div>
        <input onChange={this.addFont} type="text"/>
            <div>
            {this.state.fonts.map(el =>{
               return <Icon sportId={el}></Icon>
            }
               
            )}
            </div>
      </div>
    )
  }
}
