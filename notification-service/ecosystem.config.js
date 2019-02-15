module.exports = {
  apps : [{
    name: 'subcribers',
    script: 'index.js',
    exec_mode: "cluster",
    env: {
      "NODE_ENV": "local",
    },
    instances: 'max'
  }],
};
