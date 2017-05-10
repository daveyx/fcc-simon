export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export const random = () => Math.floor(Math.random()*(4-1+1)+1);
