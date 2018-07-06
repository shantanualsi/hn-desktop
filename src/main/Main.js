import React from "react";
import Aggregator from "../components/aggregator/Feeds";
import { connect } from "react-redux";
import CSSModules from "react-css-modules";
import styles from "../styles/Main.styl";


class Main extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <Aggregator/>
        )
    }
}

export default connect((x) => x)(CSSModules(Main, styles))