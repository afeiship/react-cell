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


  render() {
    const {className, children, border} = this.props;
    return (
      <section data-border={border} className={classNames('react-cells', className)}>{children}</section>
    );
  }
}
