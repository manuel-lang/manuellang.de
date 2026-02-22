import ScrollReveal from 'scrollreveal';

const isSSR = globalThis.window === undefined;
const sr = isSSR ? null : ScrollReveal();

export default sr;