export const lazyDelay = time => promiseResult =>
  new Promise(resolve => setTimeout(() => resolve(promiseResult), time))
