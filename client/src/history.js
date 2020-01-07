import createHistory from 'history/createBrowserHistory';

// this helps store browsing data to stop the need of repeated log in
// but also because of this you may need to clear all your browsing data when wanting to log back in

export default createHistory({
    forceRefresh: true
})