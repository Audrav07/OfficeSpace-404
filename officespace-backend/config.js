// import {accessKeyId,secretAccessKey} from './s3-config.json'
// // // export const smtp = {
// // //     host: 'smtp.sendgrid.net',
// // //     port: 587,
// // //     secure: false, // true for 465, false for other ports
// // //     auth: {
// // //         user: 'apikey', // generated ethereal user
// // //         pass: 'SendGridApiKey'  // generated ethereal password
// // //     }
// // // };
//
//
//
// export const url = 'http://localhost:3000';
//
// export const s3Config = {
//     accessKeyId: accessKeyId,
//     secretAccessKey: secretAccessKey,
//     region: 'us-east-2'
//
// };

let  emailConfig = module.exports = {
    service: 'Gmail',
    auth: {
        user: 'officespace.fileshare@gmail.com', //gmail account email address
        pass: 'PasswordOne' // gmail account password
    }
};

