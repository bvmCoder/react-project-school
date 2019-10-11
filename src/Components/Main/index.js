import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "./../Button";
import Information from './../Information';

import styles from './style.css';

const { number, string } = PropTypes;

class Main extends Component {
    render() {
        return (
            <div id="main-container">
                <Information
                    daysLeft={3}
                    donorsNumber={42}
                />
                <div className="button-area">
                    <Button className="left">Save For Later</Button>
                    <Button className="right">Tell Your Friends</Button>
                </div>
            </div>
        );
    }
}

export default Main;