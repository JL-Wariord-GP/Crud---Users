const router = require('express').Router()
const userServices = require('./users.services')

router.get('/users', userServices.getUsers)

router.post('/users', userServices.creatNewUser)

router.get('/users/:id', userServices.getOneUsers)

module.exports = router