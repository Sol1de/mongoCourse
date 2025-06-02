import { Request, Response, NextFunction } from 'express';

const pageSwitch = (req: Request, res: Response, next: NextFunction) => {
  console.log('Page:', req.path);
  next();
};

export default pageSwitch;