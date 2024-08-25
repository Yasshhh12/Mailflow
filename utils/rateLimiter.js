class RateLimiter{
    constructor(maxRequests,WindowTime)
    {
        this.maxRequests = maxRequests;
        this.WindowTime = WindowTime;
        this.requests = [];
    }

    check(){
        const now = Date.now();
        this.requests = this.requests.filter(time=>now-time<this.WindowTime);

        if(this.requests.length >= this.maxRequests){
            throw new Error('Rate limit exceeded');
        }

        this.requests.push(now);
    }
}

module.exports = RateLimiter;