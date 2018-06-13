import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
  };
  /*===properties end===*/

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classNames('react-cell-body', className)} {...props} />
    );
  }
}
