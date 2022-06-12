import os from 'os';
import process from 'process';
os;

export const getOSInfo = (answer) => {
  try {
    const param = answer.slice(2).trim();
    if (!param) {
      throw new Error('Invalid input');
    }
    switch (param) {
      case '--EOL':
        console.log(`EOL: ${JSON.stringify(os.EOL)}`);
        break;
      case '--cpus':
        const arr = [];
        const res = os.cpus().map((el) => {
          return {
            model: el.model,
            speed: el.speed / 1000 + ' GHz',
          };
        });
        console.log(`\nHost machine CPUs info:`, res);
        break;
      case '--homedir':
        console.log(`\nHome directory: ${os.homedir()}`);
        break;
      case '--username':
        console.log(`\nCurrent system user name: ${os.userInfo().username}`);
        break;
      case '--architecture':
        console.log(`\nCPU architecture: ${os.arch()}`);
        break;
      default:
        throw new Error('Invalid input');
    }
  } catch (e) {
    console.log(e.message);
  }
};
