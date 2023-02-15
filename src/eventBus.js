import { createApp } from "vue";
import emitter from 'tiny-emitter';

const app = createApp({});

const eventBus = app.config.globalProperties.$eventBus;

export default eventBus;