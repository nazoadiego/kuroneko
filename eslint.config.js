import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import prettier from 'eslint-config-prettier';
import vue from 'eslint-plugin-vue';
import vueAccessibility from 'eslint-plugin-vuejs-accessibility';

export default defineConfigWithVueTs(
  // Vue recommended config
  vue.configs['flat/recommended'],

  // TypeScript support
  vueTsConfigs.recommended,

  // Accessibility rules
  {
    plugins: {
      'vuejs-accessibility': vueAccessibility,
    },
    rules: {
      ...vueAccessibility.configs.recommended.rules,
    },
  },

  // Ignored files/folders
  {
    ignores: ['vendor', 'node_modules', 'public', 'bootstrap/ssr', 'tailwind.config.js', 'resources/js/components/ui/*'],
  },

  // Custom rule overrides
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      // Optional: override specific a11y rules here
      // 'vuejs-accessibility/label-has-for': 'off',
    },
  },

  // Prettier last to prevent conflicts
  prettier,
);
