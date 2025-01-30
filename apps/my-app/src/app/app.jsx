// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import { Orders } from '@my-js-monorepo/orders';

import { Orders } from '@my-js-monorepo/orders';
import NxWelcome from './nx-welcome';

import { Route, Routes } from 'react-router-dom';
export function App() {
  return (
    <div>
      {/* <NxWelcome title="my-app" /> */}
      App in react JS
      <Routes>
        <Route path="/" element={<NxWelcome title="my-app" />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}
export default App;
