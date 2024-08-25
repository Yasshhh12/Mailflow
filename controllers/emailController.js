const emailService = require('../services/emailService');

class EmailController{
    async sendEmail(req,res){
        try{
            const emailId = await emailService.sendEmail(req.body);
            res.status(200).json({emailId,message:'Email sent Succesfully!!'});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
}

module.exports = new EmailController();