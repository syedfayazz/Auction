const mongoose=require('mongoose');

const BidSchema=mongoose.Schema({
    user : String,
    amount : Number,
});
module.exports = mongoose.model('bid',BidSchema,'bids');