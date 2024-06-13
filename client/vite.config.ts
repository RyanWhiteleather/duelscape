import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` (development, production, etc.)
  // .env.[mode] will override .env
  process.env = {...process.env, ...loadEnv(mode, process.cwd(), '')};
  const port = process.env.PORT || '3000';

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'https://epic-duels-api-lirlkgncfq-uc.a.run.app/',
          changeOrigin: true,
          rewrite: (path) => {
            const newPath = path.replace(/^\/api/, '');
            console.log(`Rewriting ${path} to ${newPath}`);
            return newPath;
          },
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              console.log(`Proxying request to: ${proxyReq.path}`);
            });
          }
        }
      },
      port: parseInt(port)
    }
  }
})


