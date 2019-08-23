import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

// Chamar os models
import User from '../app/models/User';

// guarda todos os models da aplicação em uma array
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // instancia o sequelize passando as configurações do banco de dados
    this.connection = new Sequelize(databaseConfig);

    // percorre todos os models passando a conexão do banco de dados
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
