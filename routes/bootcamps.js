const exxpress = require('express')
const router = exxpress.Router()
const { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp } = require('../controller/bootcamps')


router
    .route('/')
    .get(getBootcamp)
    .post(createBootcamp)

router
    .route('/:id')
    .get(getBootcamps)
    .put(updateBootcamp)
    .delete(deleteBootcamp)

module.exports = router