import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class Welcome extends Component {
    

    render() {
        return (
           <View><Text>Welcome</Text></View>
        );
    }
}

Welcome.propTypes = {

};

export default Welcome;