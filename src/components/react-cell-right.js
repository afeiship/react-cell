import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Arrow from './react-cell-arrow';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string
  };
  /*===properties end===*/

  render() {
    const { className, children, ...props } = this.props;
    const _children = children || <Arrow />;
    return (
      <div
        className={classNames('react-cell-right', className)}
        children={_children}
        {...props}
      />
    );
  }
}
