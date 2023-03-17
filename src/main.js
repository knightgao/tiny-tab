import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
import { setupStore } from './store/setup';

async function setupApp() {
    const vueApp = createApp(App)
    vueApp.use(ContextMenu)
    await setupStore(vueApp)
    vueApp.mount('#app')
}

setupApp()