const pool = require("../config/db");

const Employee = {
  async create(employeeData) {
    const { e_name, e_number, e_password, e_msi_id, e_passport } = employeeData;
    try {
      await pool
        .promise()
        .query(
          "INSERT INTO employee (e_name, e_number, e_password, e_msi_id, e_passport) VALUES (?, ?, ?, ?, ?)",
          [e_name, e_number, e_password, e_msi_id, e_passport]
        );

      const [row, fields] = await pool
        .promise()
        .query("select * from employee where e_number = ? and e_passport = ?", [
          e_number,
          e_passport,
        ]);

      return row[0];

    } catch (err) {
      throw new Error(`Error creating employee: ${err.message}`);
    }
  },

  async findByNumber(e_number, e_passport) {
    try {
      console.log(e_number)
      const [rows, fields] = await pool.promise().query("SELECT * FROM employee WHERE e_number = ? or e_passport = ?", [
          e_number,
          e_passport,
        ]);
      return rows[0];
    } catch (err) {
      throw new Error(`Error retrieving employee: ${err.message}`);
    }
  },

  async findByID(e_id) {
    try {
      const [rows, fields] = await pool.promise().query('SELECT * FROM employee WHERE e_id = ?', [e_id]);
      return rows[0];
    } catch (err) {
      throw new Error(`Error retrieving employee: ${err.message}`);
    }
  },
  async addBalance(e_id,amount) {
    try {
      await pool.promise().query('update employee set balance = balance + ? WHERE e_id = ?', [amount,e_id]);
      const [rows,fields] = await pool.promise().query("select balance from employee where e_id = ?",[e_id]);
      return rows[0].balance;
    } catch (err) {
      throw new Error(`Error retrieving employee: ${err.message}`);
    }
  },
  async removeBalance(e_id,amount) {
    try {
      await pool.promise().query('update employee set balance = balance - ? WHERE e_id = ?', [amount,e_id]);
      const [rows,fields] = await pool.promise().query("select balance from employee where e_id = ?",[e_id]);
      return rows[0].balance;
    } catch (err) {
      throw new Error(`Error retrieving employee: ${err.message}`);
    }
  },
};

module.exports = Employee;
