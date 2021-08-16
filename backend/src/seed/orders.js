const mongoose = require('mongoose');

module.exports = [{
    "user": mongoose.Types.ObjectId("611977d56d34ab001467911d"),
    "guitars": [{"_id": "611977d56d34ab001467911c"}],
    "price": 850000,
    "shipped": true,
    "bill": {"_id": "61197b5313125f00149bf744"},
    "time": "2021-08-15 12:00:00"
}, {
    "user": mongoose.Types.ObjectId("611977d66d34ab00146748f9"),
    "guitars": [{"_id": "611977d66d34ab0014615f67"}],
    "price": 2950000,
    "shipped": true,
    "bill": {"_id": "61197b5313125f00149bf744"},
    "time": "2021-08-16 17:58:45"
}, {
    "user": mongoose.Types.ObjectId("611977d66d34ab001468ff49"),
    "guitars": [{"_id": "611977d66d34ab00146f86f2"}],
    "price": 390000,
    "shipped": false,
    "bill": {"_id": "61197b5313125f00149bf744"},
    "time": "2021-08-10 11:13:15"
}]