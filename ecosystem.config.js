module.exports = {
  apps: [
    {
      name: "product-api",
      script: "server.js",
      instances: "max",
      exec_mode: "cluster"
    }
  ]
};