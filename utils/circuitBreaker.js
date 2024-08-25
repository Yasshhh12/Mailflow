
const logger = require('./logger');

class CircuitBreaker {
    constructor(failureThreshold, cooldownTime) {
        this.failureCount = 0;
        this.failureThreshold = failureThreshold;
        this.cooldownTime = cooldownTime;
        this.lastFailureTime = null;
    }

    isOpen() {
        if (this.lastFailureTime && Date.now() - this.lastFailureTime > this.cooldownTime) {
            this.reset();
            return false;
        }
        return this.failureCount >= this.failureThreshold;
    }

    recordFailure() {
        this.failureCount++;
        this.lastFailureTime = Date.now();
        logger.error('Circuit breaker tripped');
    }

    recordSuccess() {
        this.reset();
        logger.info('Circuit breaker reset');
    }

    reset() {
        this.failureCount = 0;
        this.lastFailureTime = null;
    }
}

module.exports = CircuitBreaker;
