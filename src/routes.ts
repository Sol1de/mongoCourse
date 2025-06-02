import { Router, Request, Response, NextFunction } from "express";

const router = Router();

//middleware
const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

//routes
router.get('/', (req, res) => {
  res.send('Hello World')
})

router.get('/about', (req, res) => {
  res.send('About Us')
})

export default router
