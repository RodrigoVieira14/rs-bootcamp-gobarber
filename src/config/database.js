module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'postgres',
  password: 'root',
  database: 'gobarber',
  define: {
    timestamps: true, // cria os campos de criação e alteração em todas as tabelas
    underscored: true,
    unserscoredAll: true,
  },
};
