import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/components/Register.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { AuthProvider } from './components/context/AuthProvider';

const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);

// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


