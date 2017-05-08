import './style.scss';

import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    leftBorder: PropTypes.bool,
    borders: PropTypes.oneOf([
      'top',
      'bottom',
      'both',
      'none'
    ])
  };

  static defaultProps = {
    leftBorder: true,
    borders: 'both'
  };
  /*===properties end===*/


  render() {
    const {className, children, borders, leftBorder,...props} = this.props;
    return (
      <section {...props} data-borders={borders} data-left-border={leftBorder}
               className={classNames('react-cells', className)}>{children}</section>
    );
  }
}
