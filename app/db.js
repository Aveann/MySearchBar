var RNBModel = require('react-native-db-models');

var DB = {
  'search_query': new RNBModel.create_db('search_query')
};

module.exports = DB;
