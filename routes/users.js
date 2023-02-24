import express from 'express'
import User from '../models/data/User.js';
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async (req,res) =>{
  try {
    let user = await User.create(req.body)
    return res.status(201).json({
      response: 'created',
      user
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      path: req.url,
      response: error.message
    })
  }
})


export default router
