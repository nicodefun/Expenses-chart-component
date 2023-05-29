import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Expenses-chart-component/'
})

// https://github.com/nicodefun/Expenses-chart-component.git