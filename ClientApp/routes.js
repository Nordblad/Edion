import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'
import EdPage from 'components/ed-page'
import EdionUi from 'components/edion-ui'

export const routes = [
    { name: 'home', path: '/', component: HomePage, display: 'Home', style: 'glyphicon glyphicon-home' },
    // { path: '/counter', component: CounterExample, display: 'Counter', style: 'glyphicon glyphicon-education' },
    // { path: '/fetch-data', component: FetchData, display: 'Fetch data', style: 'glyphicon glyphicon-th-list' },
    { name: 'page', path: '/page/:id/:languageCode', component: EdionUi, display: 'SIDA', style: '', props: true }
    //{ name: 'page', path: '/page/:id/:language', component: EdPage, display: 'SIDA', style: '', props: true }
]