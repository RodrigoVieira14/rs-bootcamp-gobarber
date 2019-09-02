import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import databaseConfig from '../config/database';

// Chamar os models
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

// guarda todos os models da aplicação em uma array
const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    // instancia o sequelize passando as configurações do banco de dados
    this.connection = new Sequelize(databaseConfig);

    // percorre todos os models passando a conexão do banco de dados
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://192.168.99.100:27017/gobarber',
      { useNewUrlParser: true, useFindAndModify: true }
    );
  }
}

export default new Database();
