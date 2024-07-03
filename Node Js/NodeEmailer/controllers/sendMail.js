const nodemailer = require('nodemailer')

const sendMail = async(req,res) => {
    let testAccount = await nodemailer.createTestAccount()

    // connect with smtp
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'genesis.walsh@ethereal.email',
            pass: 's6tyRTsXP1VTsGWK7k'
        }
    });

    let info = await transporter.sendMail({
        from: '"Yash R. 👻" <genesis.walsh@ethereal.email>', // sender address
        to: "sqyash786@gmail.com", // list of receivers
        subject: "Hello NodeMailer ✔", // Subject line
        text: "Hello, this test mail of NodeMailer Programme", // plain text body
        html: "<b>Hello world?</b>", // html body
    })

    console.log("Message sent: %s", info.messageId);
    res.json(info)
}

module.exports = sendMail