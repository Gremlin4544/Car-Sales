import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../src/reducers/reducer";

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);
// console.log(store); displays obj with 4 

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
