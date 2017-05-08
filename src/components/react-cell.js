import './style.scss';

import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {};
  /*===properties end===*/

  render() {
    const {className, children} = this.props;
    return (
      <div className={classNames('react-cell', className)}>{children}</div>
    );
  }
}
