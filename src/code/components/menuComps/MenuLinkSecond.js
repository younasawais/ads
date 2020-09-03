import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class MenuLinkSecond extends Component {
    constructor(props){
        super(props);
        this.linkPressed = this.linkPressed.bind(this);        
    }

    async linkPressed(link) {
        console.log(link);
        const response = await axios.post('http://localhost:4000/getarticleinfo', {
          'linkId': link
        }, {timeout: 20000});
        console.log(this.props);
        this
          .props
          .dispatch({
            type: 'updateArticlePage',
            payload: {
              articleInfo: response.data.articleInfo
            }
          })
        console.log(response);
      }

    render() {
        const {name, router} = this.props.item;
        return (
            <NavLink onClick={() => {this.linkPressed(router)}} 
                className="text-black dropdown-item display-4" to={'/article/'+ router} aria-expanded="false">
                {name}
            </NavLink>
        );
    }
}

export default connect(state => state)(MenuLinkSecond);