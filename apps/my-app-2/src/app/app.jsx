// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { Orders } from '@my-js-monorepo/orders';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
export function App() {
  return (
    <div>
      {/* <NxWelcome title="my-app-2" /> */}
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/page-2" element={<NxWelcome title="my-app-2" />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}
export default App;
