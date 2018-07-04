import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux'

import ReactDOM from 'react-dom'

import Main from './Main'
import store from './store'
require('!!style-loader!css-loader!stylus-loader?sourceMap!../styles/global.styl')

const parentElement = document.getElementById('news-aggregator')
const hist = syncHistoryWithStore(createBrowserHistory(), store)

ReactDOM.render((
    <Provider store={store}> 
        <Router history={hist}>
            <Route path='/' component={Main}/>
        </Router>
    </Provider>
), parentElement)
