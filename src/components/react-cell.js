import './style.scss';

import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    clickable: PropTypes.bool
  };

  static defaultProps = {
    borders: 'both',
    clickable: true
  };
  /*===properties end===*/

  render() {
    const {className, children, borders, clickable,...props} = this.props;
    return (
      <div {...props} data-clickable={clickable} data-borders={borders}
           className={classNames('react-cell', className)}>{children}</div>
    );
  }
}
