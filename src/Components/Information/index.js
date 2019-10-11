import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './../Button';
import TextBox from './../TextBox';

import styles from './style.css';
const { number, string } = PropTypes;

class Information extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: 50
        }
    }

    onHandleChange = (evt, value) => {
        this.setState({
            inputValue: value
        });
    }

    render() {
        const { inputValue } = this.state;
        return (
            <div className="information-conatiner">
                <div><span className="days-left">Only {this.props.daysLeft}</span> days left to fund this project.</div>
                <div>Join the <span className="donors-number">{this.props.donorsNumber}</span> other donors who have already supported this project. Ever ydollar helps.</div>
                <div className="">
                    <TextBox width="35%" value={inputValue} onChange={this.onHandleChange} />
                    <Button className="give-now">Give Now</Button>
                </div>
                {inputValue && <div className="why-amount">Why give ${inputValue}?</div>}
            </div>
        );
    }
}

Information.propTypes = {
    text: string,
    daysLeft: number,
    donorsNumber: number
}

export default Information;