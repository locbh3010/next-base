import createCache from '@emotion/cache';

const createEmotionCache = () => createCache({ key: 'lb', prepend: true });

export default createEmotionCache;
