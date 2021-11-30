const _ = require("lodash");
const { sendEmail } = require("../helpers");

const jwt = require('jsonwebtoken');
require('dotenv').config();
const expressJwt = require('express-jwt');

const User = require('../models/user');


exports.signup = async (req,res) => {

    const userExists = await User.findOne({ email: req.body.email });
    if(userExists) return res.status(403).json({ 
        error: "Email already taken!" 
    });
    let user = await new User(req.body);
    console.log(req.body);
    console.log(user);
    //default profile pic
    const base64Data = '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paanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foRAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/AABEIASwBLAMBIQACEQEDEQH/2gAMAwEAAhEDEQA/AOfooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAmit5JvuKW+grRi0S4f72E+p/wzQBdTw//ek/Jf8AE/0qwNBhHVmP5f4UAO/sKD1b8x/hTDoMPZmH5f4UAV38P/3JPzX+oP8ASqUui3CdAH+h/wAcUAZ0kEkXDqV+oqKgAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooA1bXSJp+W/dr6nr+A/wAa37fSIIeSN59W/wAOlAGmFCjAGB7U6gAooAKKACigBrKGGCAR6Gsu40eCblR5bf7PT8v/ANVAHP3WlTW/ON6+q/1HWsygAooAKKACigAooAKKACigAooAKKACigAooAKKALdrZSXTYQcd2PQV1dnpcVtzjc/94/0Hb+dAGlS0AFFABRQAUUAFFABRQAlZd5pUVx8y/I/qOh+o/r1oA5S5tJLZtsgx6HsfpVagAooAKKACigAooAKKACigAooAKKACigArX07S2ufnf5Y/1P09vegDrYoliUIgCgdhUtABRQAUUAJS0AFQT3CW67pDgfqfoKAM611hLiXy8Fc/dJ7n+lbFABRQAUUAQzQpMpRxkGuP1DTWtDuX5oz39PY/40AZlFABRQAUUAFFABRQAUUAFFABRQAUUAbGl6b9oPmSf6sf+PH/AA9fyrrw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vbx5aAL6ZBz+GcmuR1C4aeZmYYx8oHoB/nNAFKigAooAKKACigAooAKKACigArqtAYeW47hv6UAZv2Kb7X90437s9sZznPStTXWAhA7lv6GgCXR18u23HuS3+fyqO31lZ5RHtxuOM5oAq6/Hyj+xH9f8a0NM/wCPQfRv60AZWhT7ZGiPRhkfUf8A1v5Vp63/AMex/wB5aAE0Y5tsDqCRWRY2UyXQ3KQEJJJ6Y+tAF3xAwwg75JpselwzWwkjyZCuRz/F3GPrxQBX0WKVJycEKAQ2Rj6D65o17HnLjrt5/M4oAj0T/j4/4Cafrv8Arx/uj+ZoAi0T/j5H+61XdatpJZVKKWAXsPc0AYclrLENzqyj1IrrIv8Ajx/7Zn+VAGfoEv34z7MP5H+lZ+rw+VcN6Nhh+PX9c0AZlFABRQAUUAFFABRQAUUAFFABVq0u3tX3p+I7EUAbv9vrj7h3fUY/z+FYd3ePdtufgDoB0FAGgmrhIPJVOdm3Oe+MZxj15rIhk8p1cfwkH8qANO/1MXiBNm0g5znP9BT7XVxbwiLZnGec46/hQBl28xgkWQdVOf8A61ad9qwuo/L2beQc5z0/CgCnZXz2bZXlT1U9/wDA1snxAuOEO73IxQBg3Ny9y+9+vb0A9BVqx1J7P5cbkPb0+hoA1H19cfKhz7nj9K56eZp3Luck0AT2N19kk8zG7gjGcU6/vPtjh8bcDGM5/oKAGWN19kk8zG7gjGcda2v+EgH/ADz/APHv/rUAU77Vhdx+Xs25IOc56fhSrq4WDyNn8O3Of1xj+tAFCyujaSCTGeCCOmam1C+F4VIXaV465z+goAzqKACigAooAKKACigAooAKKACigAooAKKACpoIHnbYgyf89aAH3Fq9uRvxhuhByD+NQIhdgqjJPAFAFu4sJbddzgYzg4OcH0NUqALhsJQzJxlF3HntVOgC1DZyTI0iAbU68/jVWgC5bWMlyCyYwpwcnFQTQtAxRxhhQBFRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAVcsbj7PJuxuUghgPQ9aAH3sHlBWRi8LZKe3qMetN07/j5j/wB6gC/J/wAe8/8A12/rWGOtAHUP/wAfE3/XH+grl6AOr0uJhbqAPlkL7vpggfrXKspUkHqDigDUt/8Ajzl/31puq/61f+ua/wAqAMyigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAqxbXLWzbgAQQQQehB6igB9zdmcKgUIiZwo9+tV4pDE4deqnIoA0ZtSE0bR+WE3ncSp/i7k1l0Aaj6o7IRtUOy7WfuRWXQBfGoOvl4AAh6DJ5+tU5ZPMcvjG4k4+tAFu1vfIRoyiurEEhvaoLm4a4cu2AegA6ADsKAIKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigD//Z';
    user.photo.data = Buffer(base64Data, 'base64');
    user.photo.contentType = 'image/jpg'

    await user.save();
    res.status(200).json({ message: "Signup success! Please Login. " });
};

exports.signin = (req,res) => {

    // find user by email
    const {email,password,notificationToken} = req.body;
    console.log(req.body);
    User.findOne({email}, (err, user) => {
        // if error or no user found
        if(err || !user){
            return res.status(401).json({
                error: "User with that email does not exist. Please signup. "
            });
        }
        // if user is found => match the password by userschema methods authenticate
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: "Email and password do not match"
            });
        }

        if(notificationToken && notificationToken !== null){
            User.findOneAndUpdate({ email: user.email }, { $set: {"notificationToken": notificationToken} }, (err,result) => {
                if(err){
                    return res.status(401).json({
                        error: "Some error occurred! Please try again later."
                    })
                }
            })
        }
        
        //generate token with user id and secret 
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET );
        //persist the token as 't' in cookie with expiry date
        res.cookie("t", token, { expire: new Date() + 9999 });
        //return response with user and token to frontend client
        const { _id, name, email } = user;
        return res.json({ token, user: { _id, email, name }});
    });
}

exports.signout = (req,res) => {
    res.clearCookie("t")
    return res.status(200).json({ message: "signout success! " })
}


exports.requireSignin = expressJwt({
    // if the token is valid, express jwt appends the verified users id
    // in an auth key to request object
    secret: process.env.JWT_SECRET,
    userProperty: "auth"
});


exports.forgotPassword = (req, res) => {
    if (!req.body) return res.status(400).json({ message: "No request body" });
    if (!req.body.email)
        return res.status(400).json({ message: "No Email in request body" });

    console.log("forgot password finding user with that email");
    const { email } = req.body;
    console.log("signin req.body", email);
    // find the user based on email
    User.findOne({ email }, (err, user) => {
        // if err or no user
        if (err || !user)
            return res.status("401").json({
                error: "User with that email does not exist!"
            });

        // generate a token with user id and secret
        const token = jwt.sign(
            { _id: user._id, iss: "NODEAPI" },
            process.env.JWT_SECRET
        );

        // email data
        const emailData = {
            from: "noreply@node-react.com",
            to: email,
            subject: "Password Reset Instructions",
            text: `Please use the following link to reset your password: ${
                process.env.CLIENT_URL
            }/reset-password/${token}`,
            html: `<p>Please use the following link to reset your password:</p> <p>${
                process.env.CLIENT_URL
            }/reset-password/${token}</p>`
        };

        return user.updateOne({ resetPasswordLink: token }, (err, success) => {
            if (err) {
                return res.json({ message: err });
            } else {
                sendEmail(emailData);
                return res.status(200).json({
                    message: `Email has been sent to ${email}. Follow the instructions to reset your password.`
                });
            }
        });
    });
};


exports.resetPassword = (req, res) => {
    const { resetPasswordLink, newPassword } = req.body;

    User.findOne({ resetPasswordLink }, (err, user) => {
        // if err or no user
        if (err || !user)
            return res.status("401").json({
                error: "Invalid Link!"
            });

        const updatedFields = {
            password: newPassword,
            resetPasswordLink: ""
        };

        user = _.extend(user, updatedFields);
        user.updated = Date.now();

        user.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json({
                message: `Great! Now you can login with your new password.`
            });
        });
    });
};

exports.socialLogin = (req, res) => {
    // try signup by finding user with req.email
    let user = User.findOne({ email: req.body.email }, (err, user) => {
        if (err || !user) {
            // create a new user and login
            user = new User(req.body);
            req.profile = user;
            user.save();
            // generate a token with user id and secret
            const token = jwt.sign(
                { _id: user._id, iss: "NODEAPI" },
                process.env.JWT_SECRET
            );
            res.cookie("t", token, { expire: new Date() + 9999 });
            const { _id, name, email } = user;
            return res.json({ token, user: { _id, name, email } });
        } else {
            // update existing user with new social info and login
            req.profile = user;
            user = _.extend(user, req.body);
            user.updated = Date.now();
            user.save();
            // generate a token with user id and secret
            const token = jwt.sign(
                { _id: user._id, iss: "NODEAPI" },
                process.env.JWT_SECRET
            );
            res.cookie("t", token, { expire: new Date() + 9999 });
            // return response with user and token to frontend client
            const { _id, name, email } = user;
            return res.json({ token, user: { _id, name, email } });
        }
    });
};