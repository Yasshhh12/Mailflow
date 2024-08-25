# Email Service Project

## Description

This project implements a resilient email service using Node.js, Express, and MongoDB. 
The service supports retry logic, fallback between providers, idempotency, rate limiting, status tracking, 

## Setup Instructions

### Prerequisites

1)Node.js installed on your machine.
<br>
2)MongoDB installed and running locally.
<br>


### Installation

1. Clone the repository:
   ```bash
   git clone "https://github.com/Yasshhh12/Mailflow.git"
   cd email-service
<br>   

2.Install Express,Mongoose
<br>
3.Install Nodemon,UUID
<br>

###To Run
<br>
=>Simply Run "nodmeon server.js" in terminal
<br>

###To test
<br>
=>Simply Run it on POSTMAN
<br>
1.Perform new Request
<br>
2.Set Post
<br>
3.Then in post enter this url http://localhost:3000/api/emails/send
<br>
4.choose raw and click on JSON
<br>
5.Press Send
