import React, { Component } from 'react';
import {WebView} from 'react-native';

class NewsDetails extends Component {
    render() {
        const {params} = this.props.navigation.state;
        const url = params? params.url: '';
        return (
            <WebView  
                source={{uri:url}}
                style={{marginTop: 20}}
            />
        );
    }
}

export default NewsDetails;