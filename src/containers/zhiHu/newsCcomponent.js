import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import BaseStyle from "../../lib/baseStyle";
import  Color from '../../lib/color';
import PropTypes from 'prop-types';

export default class NewsCcomponent extends Component {

    static propTypes = {
        url: PropTypes.string,
        title: PropTypes.string,
        onPress: PropTypes.func,
    };

    static defaultProps = {
        url: '',
        title: '',
        onPress: null,
    };

    render() {

        const {url, title, onPress} = this.props;

        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.item}>
                    <Image style={styles.icon}
                           resizeMode={'cover'}
                           source={{uri: url}}/>
                    <Text ellipsizeMode={'tail'} numberOfLines={2}
                          style={[BaseStyle.s16c333333, styles.title]}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: Color.cD9D9D9,
    },

    icon: {
        width: 80,
        height: 80,
        marginRight: 15,
    },

    title: {
        height: 80,
        flex: 1,
    }
});