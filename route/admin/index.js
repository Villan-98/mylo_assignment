const router=require('express').Router()
router.use('/permission',require('./permission'))
router.use('/role',require('./role'))
module.exports=router