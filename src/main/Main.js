import React from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import styles from '../styles/Main.styl'


class Main extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <div>Hello world from React Main!</div>
        )
    }
}

export default connect((x) => x)(CSSModules(Main, styles))