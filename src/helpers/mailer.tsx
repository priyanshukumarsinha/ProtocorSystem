import nodemailer from 'nodemailer';

export const sendEmail = async ({email, emailType, userId}:any) => {
    try {
        // TODO: Configure mail for usage
        
        const transporter = nodemailer.createTransport({
            host : 'smtp.forwardemail.net',
            port : 465,
            secure : true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
        });

        const mailOptions = {
            from : '', // sender address
            to : email, // list of receivers
            subject : emailType === 'VERIFY' ? "Verify Your Email" : "Reset Your Password", // Subject line
            html : '', // html body
        };

        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse;

    } catch (error: any) {
        throw new Error(error.message); 
    }
}