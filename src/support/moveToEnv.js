const putVariableToEnv = (prop, val) => {
  process.env[prop] = val;
};

export { putVariableToEnv };
