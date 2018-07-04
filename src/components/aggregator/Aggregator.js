import styles from './Aggregator.styl'
import CSSModules from 'react-css-modules'

var HNService = require('../../services/HackernewsService')

class Aggregator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            feeds: []
        }
    }

    componentDidMount() {
        HNService.fetchTopStories()
        .then((result) => {
            let stories = HNService.fetchStoryDetails(result)
            console.log(stories)
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
        return <div> {this.state.feeds} </div>
    }
}

export default CSSModules(Aggregator, styles)
