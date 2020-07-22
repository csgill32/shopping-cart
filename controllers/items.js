const db = require('../models')

const index = (req, res) => {
    db.Item.find({}, (err, foundItems) => {
        if (err) console.log('Error in Items#index:', err)

        if (!foundItems) return res.json({
            message: 'No Items found in database.'
        })

        res.status(200).json({ items: foundItems });
    })
}

module.exports = {
    index,
}