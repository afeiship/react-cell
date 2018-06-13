import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    borderd: PropTypes.bool,
  };

  static defaultProps = {
    borderd: true
  };
  /*===properties end===*/

  render() {
    const { className, borderd, ...props } = this.props;
    return (
      <div data-borderd={borderd} className={classNames('react-cell-left', className)} {...props} />
    );
  }
}
