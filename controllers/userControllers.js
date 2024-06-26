const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../config/tokenGenerate');

const registerUser = asyncHandler(async (req, res) => {
        const { name, email, password, image } = req.body;

        if (!name, !email, !password, !image) {
                res.status(404);
                throw new Error('Please fill all the field!')
        }

        const user = await User.create({
                name, email, password, image
        })

        if (user) {
                res.status(201).json({
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        token: generateToken(user._id)
                })
        } else {
                res.status(400);
                throw new Error('Failed to signup')
        };

        const authUser = asyncHandler(async (req, res) => {
                const { email, password } = req.body;

                const user = await User.findOne({ email });
                if (user) {
                        res.json({
                                _id: user._id,
                                name: user.name,
                                email: user.email,
                                image: user.image,
                                token: generateToken(user._id)
                        })
                }else{
                        res.status(401)
                        throw new Error('Invalid Email or passowrd')
                }
        })

});