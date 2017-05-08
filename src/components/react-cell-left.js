import './style.scss';

import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    border: PropTypes.bool,
  };

  static defaultProps = {
    border: true
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {className, children, border} = this.props;
    return (
      <div data-border={border} className={classNames('react-cell-left', className)}>{children}</div>
    );
  }
}
