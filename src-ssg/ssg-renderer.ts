import { defineSsgGetPages, defineSsgRenderPreloadTag } from '#q-app';

export const getSsgPages = defineSsgGetPages(() => [
  { route: '/' },
  { route: '/about' },
  { route: '/work' },
  { route: '/github' },
  { route: '/stack' },
]);

const jsRE = /\.js$/;
const cssRE = /\.css$/;
const woffRE = /\.woff$/;
const woff2RE = /\.woff2$/;
const gifRE = /\.gif$/;
const jpgRE = /\.jpe?g$/;
const pngRE = /\.png$/;

export const renderPreloadTag = defineSsgRenderPreloadTag((file /* , { ssrContext } */) => {
  if (jsRE.test(file)) {
    return `<link rel="modulepreload" href="${file}" crossorigin>`;
  }

  if (cssRE.test(file)) {
    return `<link rel="stylesheet" href="${file}" crossorigin>`;
  }

  if (woffRE.test(file)) {
    return `<link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  }

  if (woff2RE.test(file)) {
    return `<link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  }

  if (gifRE.test(file) || jpgRE.test(file) || pngRE.test(file)) {
    return `<link rel="preload" href="${file}" as="image" crossorigin>`;
  }

  return '';
});
