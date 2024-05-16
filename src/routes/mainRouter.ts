import { Router } from 'express';
import productRoutes from './productRoutes';

const mainRouter = Router();

mainRouter.use('/products', productRoutes)

/* Server Status */
mainRouter.get('/', (req, res) => {
    res.send('Server is OK 🎉');
})



export default mainRouter;