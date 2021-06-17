const bcrypt = require('bcryptjs')
const db = require('../models')
const User = db.User

const userCotroller = {
  signUpPage: (req, res) => {
    return res.render('signup')
  },
  signUp: (req, res) => {
    const { name, email, password } = req.body
    User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    })
      .then(user => {
        return res.redirect('/signin')
      })
  }
}

module.exports = userCotroller