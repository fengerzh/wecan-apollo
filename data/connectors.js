import Sequelize from 'sequelize';

const db = new Sequelize('mysql://root@localhost:3306/wecan');

const AProject = db.define('a_project', {
  ida_project: Sequelize.INTEGER,
  pro_name: Sequelize.STRING,
  group_name: Sequelize.STRING,
});

export default { AProject };
