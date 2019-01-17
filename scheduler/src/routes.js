import React from 'ract';
import {Switch, Route} from 'react-router-dom';

import Classes from './components/classes/classes';
import Payment from './components/payment/payment';

export default <Switch>
    <Route component={Classes} exact path='/'/>
    <Route component={Payment} path='/payment'/>
</Switch>