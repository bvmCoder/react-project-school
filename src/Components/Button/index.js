import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setCssModule } from './../../ClassNames';
import styles from './style.css';

const cx = setCssModule.bind(styles);
const { func, bool, string } = PropTypes;

class Button extends Component {
    constructor(props) {
        super(props);
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        console.log(`Button Clicked!`);
        if (this.props.onClick) {
            this.props.onClick(event, this);
        }
    }

    render() {
        const elemProps = {};
        if (this.props.disabled) {
            elemProps.disabled = true;
        }
        const classes = cx(this.props.className, {
            button: true,
            disabled: this.props.disabled
        });

        return (
            <button className={classes} {...elemProps} type='button' onClick={this.handleClick}>
                {this.props.children}
            </button>
        );
    }
}

Button.propTypes = {
    className: string,
    disabled: bool,
    onClick: func
};


export default Button;