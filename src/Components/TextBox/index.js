import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setCssModule } from './../../ClassNames';
import styles from './style.css';

const cx = setCssModule.bind(styles);
const { func, bool, string, number, oneOfType } = PropTypes;

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            textVal: this.props.value
        };
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value || this.state.textVal !== nextProps.value) {
            this.setState({ isActive: this.state.isActive, textVal: nextProps.value });
        }
    }

    onInputFocus = (e) => {
        this.setState({ isActive: true });
        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    }

    onInputBlur = (e) => {
        this.setState({ isActive: false });
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    }

    onInputChange = (e) => {
        this.setState({ textVal: e.currentTarget.value });
        if (this.props.onChange) {
            this.props.onChange(e, e.currentTarget.value);
        }
    }

    render() {
        const elemProps = { onBlur: this.onInputBlur, onChange: this.onInputChange, onFocus: this.onInputFocus, placeholder: this.props.placeholder || '', type: 'text', value: this.state.textVal };
        if (this.props.disabled) {
            elemProps.disabled = true;
        }
        const classes = cx({
            active: this.state.isActive && !this.props.error,
            default: !this.state.isActive && !this.props.error,
            defaultHeight: !this.props.height,
            error: this.props.error
        });
        elemProps.className = setCssModule(classes, this.props.className);

        const blockStyle = {};
        if (this.props.width) {
            blockStyle.width = this.props.width;
        }
        if (this.props.height) {
            blockStyle.height = this.props.height;
        }
        if (this.props.multiline) {
            return (
                <textarea {...elemProps} ref='refInput' style={blockStyle} />
            );
        }
        return (
            <input {...elemProps} ref='refInput' style={blockStyle} />
        );
    }
}

TextBox.propTypes = {
    className: string,
    disabled: bool,
    error: bool,
    height: oneOfType([string, number]),
    multiline: bool,
    name: string,
    onBlur: func,
    onChange: func,
    onFocus: func,
    placeholder: string,
    value: string,
    width: oneOfType([string, number])
};

export default TextBox;