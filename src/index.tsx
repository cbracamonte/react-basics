import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

// Si desea que su aplicación funcione sin conexión y se cargue más rápido, puede cambiar
// anular el unregister () para register () a continuación. Tenga en cuenta que esto viene con algunas trampas.
// Obtenga más información sobre los trabajadores de servicios: https://bit.ly/CRA-PWA
serviceWorker.unregister();
