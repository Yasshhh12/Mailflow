# Email Service Project

## Description

This project implements a resilient email service using Node.js, Express, and MongoDB. 
The service supports retry logic, fallback between providers, idempotency, rate limiting, status tracking, 

## Setup Instructions

### Prerequisites

1)Node.js installed on your machine.
2)MongoDB installed and running locally.


### Installation

1. Clone the repository:
   ```bash
   git clone "https://github.com/Yasshhh12/Mailflow.git"
   cd email-service

2.Install Express,Mongoose
3.Install Nodemon,UUID

###To Run
=>Simply Run "nodmeon server.js" in terminal

###To test
=>Simply Run it on POSTMAN
1.Perform new Request
2.Set Post
3.Then in post enter this url http://localhost:3000/api/emails/send
4.choose raw and click on JSON
5.Press Send
