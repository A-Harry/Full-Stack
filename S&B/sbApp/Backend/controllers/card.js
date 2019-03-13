const mongoose = require('mongoose');
const mtg = require('mtgsdk')


module.exports.card = (req, res, next) => {
    var cardValue = req.body.cardName;
    var cards = []
    mtg.card.all({ name:cardValue, pageSize: 1 })
        .on('data', x => {
            cards.push(x)
        })

setTimeout(function(){
    res.send(cards)
},3000)
}

// module.exports.card = (req, res, next) => {
//     console.log("Got request.")
//     var cardValue = req.body.cardName;
//     mtg.card.all({ name:"", pageSize: 1 })
//         .on('data', x => {
//             var Card = mongoose.model('Card')
//             const ToMongo = new Card();
//             ToMongo.name = x.name
//             ToMongo.set = x.set
//             ToMongo.text = x.text
//             ToMongo.imageUrl = x.imageUrl
//             ToMongo.save((err,doc)=>{
//                 if(!err){
//                     //res.send(doc);
//                 }
//             });
//         })
// // setTimeout(function(){
// //     res.send(cards)
// // },3000)
// }