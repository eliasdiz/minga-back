import userRouter from './users.js'
import express from 'express'
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Servidor Corriendo');
});


router.use('/users', userRouter)

export default router