// - Каждая кредитная карта содержит: срок годности, номер, кредитные лимит, стоимость обслуживания.
// - Подумай, какова связь между клиентами банка и кредитными картами. Как её лучше выразить с помощью SQL? Задай необходимые ключи/ограничения.

import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const CreditCardKey = 'CreditCard';

const CreditCardAttributes = {
    endDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    creditLimit: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    serviceCost: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
};

const CreditCard = sequelize.define(CreditCardKey, CreditCardAttributes);

const initCreditCardEntity = async () => {
    await CreditCard.sync({alter: true});
}

export { CreditCard, initCreditCardEntity };
