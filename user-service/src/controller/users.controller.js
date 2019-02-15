const db = require('../database');
const bcrypt = require('bcrypt')
const Users = db.Users;
const pubNoti = require('../services/pubNotification');

async function register(req, res) {
    try{
        const { email, password } = req.body;
        
        const user = await Users.findOne({
            where: {
                email : email
            }
        });
       
        if(!user) {
            let salt = await bcrypt.genSalt(10);
            let hashPassword = await bcrypt.hash(password, salt);
            await Users.create({
                email: email,
                password: hashPassword
            })

            await res.status(200).json({
                success: true
            })

            pubNoti.pubNotification(email);
        } else {
            throw new Error("user exist")
        }
    } catch(err) {
        return res.status(400).json({
            success: false,
            reason: err.message
        })
    }
}

module.exports = {
    register
}