export default function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

// how to export named function with arrow function?
//export default sleep2(ms) => new Promise(resolve => setTimeout(resolve, ms));
