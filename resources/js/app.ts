import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { ZiggyVue } from 'ziggy-js';
import { initializeTheme } from './composables/useAppearance';
import { definePreset } from '@primeuix/themes';

const themePreset = definePreset(Aura,{
  preset: Aura,
  semantic: {
    primary: {
      50: '{stone.50}',
      100: '{stone.100}',
      200: '{stone.200}',
      300: '{stone.300}',
      400: '{stone.400}',
      500: '{stone.500}',
      600: '{stone.600}',
      700: '{stone.700}',
      800: '{stone.800}',
      900: '{stone.900}',
      950: '{stone.950}',
    },
    colorScheme: {
      dark: {
        surface: {
          50: '{red.50}',
          100: '{red.100}',
          200: '{red.200}',
          300: '{red.300}',
          400: '{red.400}',
          500: '{red.500}',
          600: '{red.600}',
          700: '{red.700}',
          800: '{red.800}',
          900: '{red.900}',
          950: '{red.950}',
        },
      },
    },
  },
})

/* PrimeVue */
import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .use(PrimeVue, { theme: { preset: themePreset } })
      .mount(el);
  },
  progress: { color: '#4B5563' },
});

// This will set light / dark mode on page load...
initializeTheme();
