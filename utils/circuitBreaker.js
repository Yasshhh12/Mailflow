class CircuitBreaker{
    constructor(failureThreshold,cooldownTime){
        this.failureCount = 0;
        this.failureThreshould = failureThreshold;
        this.cooldownTime = cooldownTime;
        this.lastFailureTime = null;
    }

    isOpen(){
        if(this.lastFailureTime && Date.now()-this.lastFailureTime>this.cooldownTime)
        {
            this.reset();
            return false;
        }
        return this.failureCount >= this.failureThreshould;
    }

    recordFailure(){
        this.failureCount++;
        this.lastFailureTime = Date.now();
    }

    recordSuccess(){
        this.reset;
    }

    reset(){
        this.failureCount = 0;
        this.lastFailureTime = null;
    }
}

module.exports = CircuitBreaker;