import { Router, Request, Response, NextFunction } from "express";
import timeLog from '#middleware/timeLog';
import pageSwitch from '#middleware/pageSwitch';

const router = Router();

//middleware
router.use(pageSwitch, timeLog);

//routes
router.get('/', (req, res) => {
  res.send('Hello World')
})

router.get('/about', (req, res) => {
  res.send('About Us')
})

export default router
