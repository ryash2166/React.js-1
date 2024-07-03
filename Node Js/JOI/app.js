const express = require('express');
const Joi = require('joi');
const app = express()

const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email: Joi.string().email({minDomainSegments: 2 , tlds: {allow: ['com' , 'net']}}).required(),
})

const data = {
    username: 'Yash123',
    password: '1234',
    email: 'yash@gmail.net'
}

const result = schema.validate(data)

if(result.error){
    console.error(result.error.details);
}else{
    console.log('Data is Valid');
}

app.listen(5100, console.log('App is Running on port 5100'))