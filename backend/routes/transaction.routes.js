import express , {Router} from 'express';
import {
    addTransaction,
    getAllTransactions,
    updateTransaction,
    deleteTransaction,
}  from  '../controllers/transactioncontroller.js'

const router  = Router();

router.route('/addTransaction').post(addTransaction);
router.route('/getTransactions').get(getAllTransactions);
router.route('/Update/:id').put(updateTransaction);
router.route('/deleteTransaction/:id').delete(deleteTransaction)


export default router ; 