import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string
  };
  /*===properties end===*/

  render() {
    const { className, ...props } = this.props;
    return (
      <i className={classNames('webkit-sassui-icon-line-arrow', className)}
         data-direction="right"
         data-type="hairline" {...props} />
    );
  }
}
