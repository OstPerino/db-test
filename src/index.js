import express from 'express';
import 'dotenv/config';

import {initCreditCardEntity} from "./model/CreditCard.js";
import {initCustomerEntity} from "./model/Customer.js";

const port = process.env.PORT || 3000;
const app = express();

app.listen(port, async () => {
    console.log(`server is running on ${port}`);

    await initCustomerEntity();
    await initCreditCardEntity();
})