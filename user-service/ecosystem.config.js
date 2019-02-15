module.exports = {
  apps : [{
    name: 'publishers',
    script: 'index.js',
    env: {
      "NODE_ENV": "local",
    },
    exec_mode: "cluster",
    instances: 'max'
  }],
};
