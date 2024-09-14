import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const CustomerKey = 'Customer';

const CustomerAttributes = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
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