import bcrypt from 'bcrypt-nodejs'
import User from './../models/User'
import * as auth from './../services/auth'

/* Login user with username and password */
export const signin = async (req, res) => {
    const { username, password } = req.body
    
    try {
        // Get user by username
        const user = await User.findOne({ username })
        
        if (user) {
            // Verify if the password is correct
            if (bcrypt.compareSync(password, user.password)) {
                user.password = undefined // Hiding the password in response
                const token = await auth.generateToken(user)
                res.json({ 
                    ok: true,
                    message: 'Login done successfully',
                    user,
                    token
                })
            }
            else {
                res.json({
                    ok: false,
                    message: 'Password incorrect' 
                })
            }
        }
        else {
            res.json({
                ok: false,
                message: 'User not found' 
            })
        }
    }
    catch (err) {
        res.status(500).json({ 
            ok: false,
            error: err.message
        })
    }
}