const ROUTING_ID = process.env.ROUTING_ID || 'default_web_routing';
console.log(ROUTING_ID);
import { lazy, Suspense } from 'react';
const Main = lazy(() => import(`./routing/${ROUTING_ID}/main.web.tsx`));
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Main />
  </Suspense>,
);
