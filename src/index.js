import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import  { Home }  from './/components/home/Home.js';

import reportWebVitals from './reportWebVitals';
import { Switch, Route } from 'wouter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Switch>

<Route path="/"> <App /> </Route>
<Route path="/An" component={Home}></Route>



<Route>Page has not been found</Route>


</Switch>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
