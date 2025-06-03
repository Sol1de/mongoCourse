import { Request, Response, NextFunction } from 'express';
import chalk from 'chalk';
const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.blue('Time: '), chalk.green(new Date().toLocaleString('fr-FR')));
  next();
};

export default timeLog;
