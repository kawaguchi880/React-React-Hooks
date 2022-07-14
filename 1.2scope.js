const global = 'global';

const sampleFunc = () => {
  const local = 'local';

  console.log(global);
  console.log(local);
}

sampleFunc();

console.log(global);