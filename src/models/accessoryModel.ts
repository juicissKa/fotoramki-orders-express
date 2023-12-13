import { DataTypes, Sequelize } from "sequelize";
import dotenv from "dotenv";
import { Request } from "express";
dotenv.config();

const sequelize = new Sequelize(process.env.DB as string, {
  dialect: "postgres",
});

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testDbConnection();

const Accessory = sequelize.define(
  "accessory",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

sequelize.sync().then(() => {
  console.log("Models synced");
});

export function getAccessories(req: Request) {
  return new Promise(function (resolve, reject) {
    const where = req.query;
    console.log(where);
    Accessory.findAll({ where: where })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

module.exports = {
  getAccessories,
};
