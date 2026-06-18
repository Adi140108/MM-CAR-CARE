// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://Adi140108.github.io',
  base: process.env.GITHUB_ACTIONS ? '/MM-CAR-CARE' : '/'
});

