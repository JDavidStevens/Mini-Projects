module.exports = {
    eventList: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.readEvents().then(events => {
            res.status(200).send(events)
        })
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops! Something went wrong.' })
                console.log(err)
            })
    },

    roster: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.enrolled(req.query.id).then(phoneNumbers => {
            console.log('phone',phoneNumbers)
            res.status(200).send(phoneNumbers)})
            .catch(err => {
                res.status(500).send({ errorMessage: 'Error' })
            console.log(err)})
    }
}