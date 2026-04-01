import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Bonjour depuis React ! Mon architecture est en place.</h1>
  </React.StrictMode>
);
