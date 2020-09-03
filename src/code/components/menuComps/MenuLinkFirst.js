import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class MenuLinkFirst extends Component {
    constructor(props){
        super(props);
        this.linkPressed = this.linkPressed.bind(this);        
    }

    async linkPressed(link) {
        const response = await axios.post('http://localhost:4000/getarticleinfo', {
          'linkId': link
        }, {timeout: 20000});
        this
          .props
          .dispatch({
            type: 'updateArticlePage',
            payload: {
              val: response.data.articleMenuItems,
              articleInfo: response.data.articleInfo
            }
          })
        console.log(response);
      }

    render() {
        const {name, router} = this.props.item;
        return (
            <li className="nav-item">
                <NavLink onClick={() => {this.linkPressed(router)}} className="nav-link link text-black display-4" to={'/article/' + router}>
                    {name}
                </NavLink>
            </li>
        );
    }
}

export default connect(state => state)(MenuLinkFirst);