import styles from './Aggregator.styl'
import CSSModules from 'react-css-modules'
class Aggregator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            feeds: new Map()
        }
    }

    componentDidMount() {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json)
        .then((result) => {
            this.setState({
                isLoaded: true,
                feeds: result
            });
        }, (error) => {
            this.setState({
                isLoaded: true,
                feeds: error
            });
        })
    }


    render() {
        return <div> Hello from Component </div>
    }
}

export default CSSModules(Aggregator, styles)
