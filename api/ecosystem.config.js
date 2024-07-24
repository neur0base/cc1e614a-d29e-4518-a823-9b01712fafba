module.exports = {
    apps : [{
        name: "Jenify-Admin-API",
        script: "node dist/api/index.js",
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: "3G",
    }]
};