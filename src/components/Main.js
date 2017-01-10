require('normalize.css/normalize.css');
require('styles/App.css');

import React,{ Component } from 'react';
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

const App = () => {(
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)}
