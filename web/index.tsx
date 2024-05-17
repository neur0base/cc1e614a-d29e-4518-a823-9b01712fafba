const ROUTING_ID = process.env.ROUTING_ID || 'default_web_routing';
console.log("ROUTING_ID:", ROUTING_ID);

import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './styles';
const App = lazy(() => import(`../src/routing/${ROUTING_ID}/main.web.tsx`));

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
);
