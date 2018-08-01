'use strict';

module.exports = {
  up: (queryInterface) => {
    queryInterface.sequelize.query(
      `CREATE TABLE session (
          id int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT "主键" ,
          sessId varbinary(128) NOT NULL,
          data blob NOT NULL,
          deadline int(10) UNSIGNED NOT NULL,
          createdTime int(10) UNSIGNED NOT NULL,
          updatedTime int(10) UNSIGNED NOT NULL,
          PRIMARY KEY (id)
        ) ENGINE=InnoDB  AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;`
    );
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('session');
  }
};
