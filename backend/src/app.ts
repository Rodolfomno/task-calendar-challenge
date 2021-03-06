import express from 'express';
import errorHandler from './middlewares/errorHandler';
import taskRouter from './routes/taskRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorHandler();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }
  
  private routes(): void {
    this.app.use('/tasks', taskRouter);
  }

  private errorHandler(): void {
    this.app.use(errorHandler);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`ouvindo a porta ${PORT || 3001}`));
  }
  
}

export { App };
