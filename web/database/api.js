const express = require('express')
const router = express.Router()

const User = require('./model')

router.get('/', (req, res) => {
    res.json({status: 200})
})

router.get('/user/:id', async (req, res) => {
    const id = req.params.id
    if(!id) return res.json({status: 500, error: 'User ID is empty'})
    if(!parseInt(id)) return res.json({status: 501, error: 'User ID must be a number'})
    const user = await User.findOne({userId: id}) 
    if(!user) return res.json({status: 404, error: 'User ID not found'})
    res.json({status: 200, data: user})
})


module.exports = router
