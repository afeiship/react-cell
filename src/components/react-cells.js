import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BORDER_DIRECTION = ['top', 'bottom', 'both', 'none'];

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    leftBorder: PropTypes.bool,
    borders: PropTypes.oneOf(BORDER_DIRECTION)
  };

  static defaultProps = {
    leftBorder: true,
    borders: 'both'
  };
  /*===properties end===*/


  render() {
    const { className, borders, leftBorder, ...props } = this.props;
    return (
      <section
        data-borders={borders}
        data-left-border={leftBorder}
        className={classNames('react-cells', className)}
        {...props} />
    );
  }
}
