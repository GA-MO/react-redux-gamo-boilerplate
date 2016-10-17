import React from 'react';
import { findDOMNode } from 'react-dom';
export TransitionGroup from 'react-addons-transition-group';
import './tweenMax.js'

const defaultOptions = {
  beforeEnter: {
    y: 100,
    opacity: 0,
  },
  afterEnter: {
    y: 0,
    opacity: 1,
  },
  beforeLeave: {
    y: 0,
    opacity: 1,
  },
  afterLeave: {
    y: -100,
    opacity: 0,
  },
  enterDuration: 0.3,
  leaveDuration: 0.3,
}
function makeAnimates(Component, options = {}) {
  options = Object.assign({}, defaultOptions, options);
  return class FadesUp extends React.Component {
    componentWillEnter(callback) {
      const el = findDOMNode(this);
      TweenMax.fromTo(
        el,
        options.enterDuration,
        options.beforeEnter,
        { ...{ onComplete: callback }, ...options.afterEnter },
        // Object.assign({onComplete: callback}, options.afterEnter)
      );
    }

    componentWillLeave(callback) {
      const el = findDOMNode(this);
      TweenMax.fromTo(
        el,
        options.leaveDuration,
        options.beforeLeave,
        { ...{ onComplete: callback }, ...options.afterLeave },
        // Object.assign({onComplete: callback}, options.afterLeave)
      );
    }

    render() {
      return <Component {...this.props} />;
    }
  }
}

export function animates(Component) {
  return typeof arguments[0] === 'function'
    ? makeAnimates(arguments[0])
    : Component => makeAnimates(Component, arguments[0]);
}