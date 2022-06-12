import process from 'process';

const sayHello = () => {
  console.log(`Welcome to the File Manager, ${process.env.USERNAME}!\n`);
};

const sayBye = () => {
  console.log(`Thank you for using File Manager, ${process.env.USERNAME}!`);
};

const writeCurrentDir = () => {
  console.log(`\nYou are currently in ${process.env.CURRENTDIR}\n`);
};

export { sayHello, sayBye, writeCurrentDir };
