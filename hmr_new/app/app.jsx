import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
    <App/>,
    document.getElementById('content')
);

// 模块热替换的 API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(App)
    });
}