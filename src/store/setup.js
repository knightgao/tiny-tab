import { createPinia } from 'pinia';
export async function setupStore(app) {
    const pinia = createPinia();
    app.use(pinia);
}