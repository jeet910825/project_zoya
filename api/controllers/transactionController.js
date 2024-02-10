
const Employee = require("../models/employeeModel");
const Transactions = require("../models/transactionModel")

exports.transactionCredit = async (req, res, next) => {
  try {
    const {e_id,t_date,t_amount:amount} = req.body;
    const balance = await Employee.addBalance(e_id,amount);
    const credit = await Transactions.credit({
      e_id,
      t_date,
      credit:amount,
      balance
    })
    res.status(200).json({message:"transaction successfull"})
  }
  catch(error){
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.transactionDebit = async (req,res,next) =>{
  try{
    const {e_id,t_date,t_amount:amount} = req.body;
    
    
    const employeeDetails = await Employee.findByID(e_id);
    if(employeeDetails.balance < amount){
      return res.status(401).json({message:"insufficient balance"});
    }
    const balance = await Employee.removeBalance(e_id,amount);
    const debit = await Transactions.debit({
      e_id,
      t_date,
      debit:amount,
      balance
    })
    res.status(200).json({message: "transaction successfull"})
  }
  catch(error){
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


