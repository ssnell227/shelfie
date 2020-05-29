module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send(err))
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const id = req.params.id
        db.get_item(id)
        .then(item => res.status(200).send(item))
        .catch(err => res.status(500).send(err))
    },
    addItem: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        db.create_item([name, price, img])
        .then(item => res.status(200).send(item))
        .catch(err => res.status.send(err))
    },
    editItem: (req, res) => {
        const db = req.app.get('db')
        const id = req.params.id
        const {name, price, img} =req.body
        db.update_item(id, name, price, img)
        .then(item => res.status(200).send(item))
        .catch(err => res.status(500).send(err))
    },
    deleteItem: (req, res) => {
        const db = req.app.get('db')
        const id = req.params.id
        db.delete_item(id)
        .then(() => res.sendStatus(200))
        .catch(err=> res.status(500).send(err))
    }
}