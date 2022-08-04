import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import rootReducer from "./modules";

const store = createStore(rootReducer, composeWithDevTools()); // 스토어 생성

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'),
   );