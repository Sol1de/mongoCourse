import { Router, Request, Response, NextFunction } from "express";
import timeLog from '#middleware/timeLog';

const router = Router();

//middleware
router.use(timeLog);

//routes
router.get('/', (req, res) => {
  res.send('Hello World')
})

router.get('/about', (req, res) => {
  res.send('About Us')
})

export default router
