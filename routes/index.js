const router = require("express").Router()

// router.get("/", (req, res) => {
//   Manager
//     .findAll({
//       include: [
//         {
//           model: Band,
//         },
//       ]
//     })
//     .then(data => {
//       res.send(data)
//     })
//     .catch(err => {
//       console.log(err);
//       res.send(err)
//     })
// });

// router.get('/eiger', Controller.show);
// router.get('/all', Controller.all);
// router.get('/manager', Controller.addManager);

router.use('/songs', require('./songs'))
// router.get('/all', Controller.hanldeEagerLoading);
// router.get('/manager', Controller.renderManager);
// router.post('/manager', Controller.createNewManager);

module.exports = router
