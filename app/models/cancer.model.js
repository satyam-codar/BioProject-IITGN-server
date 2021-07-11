module.exports = (sequelize, Sequelize) => {
    const CancerTable = sequelize.define("cancerdata", {
      LncRNA_name:{
        type: Sequelize.STRING, 
        allowNull:false,
        // defaultValue:"not sure"
      },
      Cancer_name:{
        type: Sequelize.STRING, 
        allowNull:false
      },
      Method_of_Identification:{
        type: Sequelize.STRING, 
        allowNull:false
      },
      Expression_pattern:{
        type: Sequelize.STRING,
        allowNull:false
      },
      Pubmed_ID:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      Alias:{
        type: Sequelize.STRING,
        allowNull:false
      },
      Subcellular_localization:{
        type: Sequelize.STRING,
        allowNull:false
      }

    },
    {
      // options
      // sequelize,
      modelName: 'CancerTable',
      tableName: 'cancer',
      // createdAt: 'date_created',
      // updatedAt: 'date_updated',
      underscore: true,
      timestamps: false,
      updatedAt: false,
      createdAt: false
    }
    );
    // `sequelize.define` also returns the model
    // console.log(User === sequelize.models.User); // true
  
    return CancerTable;
  };




// Defining models using class, benifits of using class model could be(find at below url):
// url: https://sequelize.org/master/manual/model-basics.html#:~:text=true%2C%20fields%3A%20%5B%27someUnique%27%5D%20%7D%5D%0A%7D)%3B-,Taking%20advantage%20of%20Models%20being%20classes,-The%20Sequelize%20models

// const { Model } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class FooBar extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   FooBar.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//      first_name: DataTypes.STRING,
//      last_name: DataTypes.STRING,
//      email: DataTypes.STRING,
//      date_created: DataTypes.DATE,
//      date_updated: DataTypes.DATE
//     },
//     {
//       // options
//       sequelize,
//       modelName: 'FooBar',
//       tableName: 'foo_bars',
//       createdAt: 'date_created',
//       updatedAt: 'date_updated',
//       underscore: true,
//     },
//   );
//   return FooBar;
// };
