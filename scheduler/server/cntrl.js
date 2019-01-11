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
    }
}