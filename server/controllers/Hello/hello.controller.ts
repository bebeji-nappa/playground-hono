import type { Hono } from "hono";

const helloController = (app: Hono) => {
  app.get('/hello', (c) => {
    return c.json({
      message: 'Hello from Hono!'
    })
  })
};

export default helloController;
