const exxpress = require('express')
const router = exxpress.Router()


router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'show all bootcamps' })
})

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: 'get specific bootcamp' })
})

router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'create bootcamp' })
})

router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: 'delete bootcamp' })
})

module.exports = router