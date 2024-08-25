// src/services/emailService.js
const { v4: uuidv4 } = require('uuid');
const { mockProvider1, mockProvider2 } = require('./mockProviders');
const CircuitBreaker = require('../utils/circuitBreaker');
const RateLimiter = require('../utils/rateLimiter');
const logger = require('../utils/logger');

class EmailService {
    constructor() {
        this.retryAttempts = 3;
        this.backoffFactor = 2000;
        this.circuitBreaker = new CircuitBreaker(5, 10000);
        this.rateLimiter = new RateLimiter(5, 10000);
    }

    async sendWithProvider(provider, emailData) {
        for (let attempt = 0; attempt < this.retryAttempts; attempt++) {
            try {
                this.rateLimiter.check();
                await provider(emailData);
                logger.info(`Email sent via ${provider.name} on attempt ${attempt + 1}`);
                return true;
            } catch (error) {
                logger.error(`Attempt ${attempt + 1} failed for ${provider.name}: ${error.message}`);
                await new Promise(res => setTimeout(res, this.backoffFactor * (attempt + 1)));
            }
        }
        return false;
    }

    async sendEmail(emailData) {
        const emailId = uuidv4();
        logger.info(`Sending email with ID: ${emailId}`);

        if (this.circuitBreaker.isOpen()) {
            const errorMsg = 'Circuit breaker is open, cannot send email.';
            logger.error(errorMsg);
            throw new Error(errorMsg);
        }

        let success = await this.sendWithProvider(mockProvider1, emailData);
        if (!success) {
            success = await this.sendWithProvider(mockProvider2, emailData);
        }

        if (!success) {
            this.circuitBreaker.recordFailure();
            const errorMsg = 'Failed to send email after multiple attempts.';
            logger.error(errorMsg);
            throw new Error(errorMsg);
        }

        this.circuitBreaker.recordSuccess();
        logger.info(`Email sent successfully with ID: ${emailId}`);
        return emailId;
    }
}

module.exports = new EmailService();
