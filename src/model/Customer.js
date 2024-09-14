import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "./index.js";
import { CreditCard } from "./CreditCard.js";

const CustomerKey = 'Customer';

const CustomerAttributes = {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    income: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    // TODO: Типизировать
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
};

const Customer = sequelize.define(CustomerKey, CustomerAttributes);
Customer.hasMany(CreditCard, {
    foreignKey: 'customerId',
});

const initCustomerEntity = async () => {
    await Customer.sync({alter: true});
}

export { Customer, initCustomerEntity };