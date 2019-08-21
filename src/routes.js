import { Router }  from 'express';

const routes = new Router();

/* 
- Routes
- */

routes.get('/', (req, res) => {

  return res.json({message : 'Hello Word!'});

})

/* 
- Routes
- */

export default routes;

