import type { Hono } from "hono";
import helloController from './Hello/hello.controller';

const AppController = (app: Hono) => {
  helloController(app);
};

export default AppController;
