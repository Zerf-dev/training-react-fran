import loading from './loading.json';

export const SPINNER_KEYS = {
  LOADING: 'loading'
};

export const SPINNER_TYPES = {
  [SPINNER_KEYS.LOADING]: loading
};

export const getOptions = ({ type, loop = true, autoplay = true, rendererSettings }) => ({
  loop,
  autoplay,
  animationData: SPINNER_TYPES[type] || SPINNER_TYPES.loading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
    ...rendererSettings
  }
});
