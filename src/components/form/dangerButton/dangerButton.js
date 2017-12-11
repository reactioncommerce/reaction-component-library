import React from 'react'
import PropTypes from 'prop-types'

/**
 * Perform an operation that may possibly have adverse side-effects
 */
class DangerButton extends React.Component {
    static propTypes = {
        /** Description of prop "foo". */
        text: PropTypes.string,
        /** Description of prop "baz". */
        baz: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    };
    static defaultProps = {
        foo: 42
    };

    render() {
        return (
            <button>{this.props.foo}</button>
        )
    }
}

export default DangerButton;
