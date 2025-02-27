import { authorizeRoles } from './../middleware/auth';
import exprees from 'express';
import { isAuthenticated } from '../middleware/auth';
import { createOrder, getAllOrders } from '../controllers/order.controller';

const orderRouter = exprees.Router();

orderRouter.post('/create-order', isAuthenticated, createOrder);

orderRouter.get('/get-orders', isAuthenticated, authorizeRoles('admin'), getAllOrders);


export default orderRouter;