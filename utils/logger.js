// src/utils/logger.js
const fs = require('fs');
const path = require('path');

class Logger {
    constructor() {
        this.logFilePath = path.join(__dirname, '../../logs/app.log');
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `${timestamp} - ${message}\n`;
        console.log(logMessage); 
        fs.appendFileSync(this.logFilePath, logMessage); 
    }

    error(message) {
        this.log(`ERROR: ${message}`);
    }

    info(message) {
        this.log(`INFO: ${message}`);
    }
}

module.exports = new Logger();
