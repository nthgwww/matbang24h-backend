'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //   Price.hasMany(models.Post, {foreignKey:'PriceId', as:'Price'})
    }
  }
  Price.init({
    code:DataTypes.STRING,
    value:DataTypes.STRING,
    order:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};