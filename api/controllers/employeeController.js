const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const Employee = require("../models/employeeModel");
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
  const { e_id, password } = req.body;
  
  try {
    const employee = await Employee.findByID(e_id);
    if (!employee) {
      return res.status(401).json({ error: 'Authentication failed. Invalid e_id or password.' });
    }
    const passwordMatch = await bcrypt.compare(password, employee.E_PASSWORD);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed. Invalid e_id or password.' });
    }
    const token = jwt.sign({ e_id: employee.e_id }, 'your_secret_key', { expiresIn: '1h' });
    res.status(200).json({message:"login successful", token });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.registerEmployee = asyncHandler(async (req, res) => {
  try {
    const { e_name, e_number, e_password, e_msi_id, e_passport } = req.body;

    const existingEmployee = await Employee.findByNumber(e_number, e_passport);
    if (existingEmployee) {
      return res.status(401).json({ error: "Employee already exists" });
    }else{
      console.log("employee does not exits")
    }

    const hashedPassword = await bcrypt.hash(e_password, 10);

    const employee = await Employee.create({
      e_name,
      e_number,
      e_password: hashedPassword,
      e_msi_id,
      e_passport,
    });

    res
      .status(200)
      .json({ message: "Employee registered successfully", data: employee });
  } catch (error) {
    console.error("Error registering employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
