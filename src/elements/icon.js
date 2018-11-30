import React, { Component } from 'react'
import PropTypes from 'prop-types';



export default class Icon extends Component {
    constructor(props){
        super(props)
        this.sportId = this.props.sportId;
    }

    generateTextFromSportId = (sId) => {
        var htmlCode = 32 + sId
        return String.fromCharCode(htmlCode) ;
    }

    render() {
        var icon = this.generateTextFromSportId(this.sportId);
        
        return (
        <i className = {'icon icon'+this.sportId}>
            {icon}
        </i>
        )
    }
}


Icon.propTypes = {
    sportId: PropTypes.number
};

Icon.defaultProps = {
    sportId: 0
};

