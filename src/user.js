const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "mysql1917",
  database: "wptexam",
};

const insert = async (obj) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `insert into msgtable values("${obj.msg}");`;
  await connection.queryAsync(sql);
  //console.log("Connected");
  await connection.endAsync();
};
//let obj = { msg: "First entry" };
//insert(obj);

const select = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `select * from msgtable;`;
  const list = await connection.queryAsync(sql);
  //console.log(list);
  await connection.endAsync();
  return list;
};
select();

module.exports = { insert, select };
