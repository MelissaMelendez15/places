const express = require('express')
const router = express.Router()

const Site = require('../models/site.model')

// Endpoints

router.get('/getAllSites', (req, res) => {

    Site.find()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.get('/getOneSite/:site_id', (req, res) => {

    const id = req.params.site_id

    Site.findById(id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.post('/newSite', (req, res) => {

    Site.create(req.body)
        .then(response => res.json(response))
        .catch(error => console.log(error))
})

router.put('/editSite/:site_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.site_id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Site.findByIdAndUpdate(req.params.site_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/:site_id/delete', (req, res) => {

    const id = req.params.site_id

    Site.findByIdAndDelete(id) 
        .then(response => res.jason(response))
        .catch(error => res.status(500).json(error))

})


module.exports = router
