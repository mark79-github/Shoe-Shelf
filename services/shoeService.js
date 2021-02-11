const {Shoe, User} = require('../models');

async function getAllShoes() {
    return Shoe.aggregate([{
        $project: {
            name: 1, price: 1, imageUrl: 1,
            buyers_count: {
                $size: '$buyers'
            }
        }
    }]).sort({buyers_count: -1});
}

function getById(id, populateData) {
    if (populateData) {
        return Shoe.findById(id).populate('buyers').lean();
    } else {
        return Shoe.findById(id).lean();
    }
}

function create(data, userId) {
    let shoe = new Shoe({...data, creator: userId});
    return shoe.save();
}

function update(id, data) {
    return Shoe.findByIdAndUpdate(id, {...data});
}

function remove(id) {
    return Shoe.findByIdAndDelete(id);
}

function buy(id, userId) {
    return Shoe.findOne({_id: id})
        .then((shoe) => {
            return Promise.all([shoe, User.findById(userId)])
        }).then(([s, user]) => {

            s.buyers.push(user);
            user.offersBought.push(s);

            return Promise.all([s.save(), user.save()]);
        });
}

module.exports = {
    create,
    update,
    getAllShoes,
    getById,
    remove,
    buy
}