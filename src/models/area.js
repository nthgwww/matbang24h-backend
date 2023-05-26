'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //   Area.hasMany(models.Post, {foreignKey:'AreaId', as:'Area'})
    }
  }
  Area.init({
    code:DataTypes.STRING,
    value:DataTypes.STRING,
    order:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Area',
  });
  return Area;
};