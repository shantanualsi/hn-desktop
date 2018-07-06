import styles from "./Feeds.styl";
import CSSModules from "react-css-modules";
import { connect } from "react-redux";

import { fetchTopStories } from "../../actions/feedsActions";

import * as HNService from "../../services/HackernewsService";

class Feeds extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchTopStories();
    }

    

    render() {
        return (
            <div>
                { this.props.feeds }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    feeds: state.feeds.items
});

export default connect(mapStateToProps, { fetchTopStories })(CSSModules(Feeds, styles));
