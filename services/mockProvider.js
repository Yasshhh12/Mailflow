async function mockProvider1(emailData){
    if(Math.random()<0.5) throw new Error('Provider 1 failed');
    console.log('Email sent through Provider 1');
}

async function mockProvider2(emailData){
    if(Math.random()<0.5) throw new Error('Provider 2 failed');
    console.log('Email sent through Provider 2');
}

module.exports = {mockProvider1,mockProvider2};

