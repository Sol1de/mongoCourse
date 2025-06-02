import { Request, Response, NextFunction } from 'express';

const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', new Date().toLocaleString('fr-FR'));
  next();
};

export default timeLog;
