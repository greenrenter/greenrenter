import React from 'react';
import LandingPage from './LandingPage';
import FormPage from './FormPage';
import SummaryPage from './SummaryPage';

import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LandingPage} />
            <Route path="/forms" exact component={FormPage} />
            <Route path="/summary" exact component={SummaryPage} />
        </BrowserRouter>
    );
}

export default App;