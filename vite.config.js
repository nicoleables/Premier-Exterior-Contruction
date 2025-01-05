import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
    server: {
    port: 3003,
    open: true,
  },
  alias: {
    'react-bootstrap': 'react-bootstrap/dist/react-bootstrap.esm.min.js'
  },
});
