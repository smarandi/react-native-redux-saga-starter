import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { SplashActions } from './SplashActions';
import Styles from './SplashStyles';

@connect(store => ({ splash: store.splash }))
class Splash extends Component {
  /**
   * Header and Header Mode set to null & none to remove
   * the top header from a screen/View
   * @type {{header: null, headerMode: string}}
   */
  static navigationOptions = {
    header: null,
    headerMode: 'none',
  };

  static propTypes = {
    splash: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    // navigation: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.dispatch(SplashActions.load());
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.splash.data.test}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(Styles);

/**
 *  Exported wrapped in a stack navigator
 */
export default StackNavigator({ Splash: { screen: Splash } });
