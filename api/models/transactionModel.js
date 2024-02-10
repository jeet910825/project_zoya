const pool = require("../config/db");

const Transactions = {
    async credit(transactionDetails){
        try {
            const [row,fields] = await pool.promise().query("insert into transactions (e_id,t_date,credit,balance) value (?,?,?,?)",[
                transactionDetails.e_id,
                transactionDetails.t_date,
                transactionDetails.credit,
                transactionDetails.balance
            ])
            return true;
        } catch (err) {
            throw new Error(`Error retrieving employee: ${err.message}`);
        }
    },
    async debit(transactionDetails){
        try {
            await pool.promise().query("insert into transactions (e_id,t_date,debit,balance) value (?,?,?,?)",[
                transactionDetails.e_id,
                transactionDetails.t_date,
                transactionDetails.debit,
                transactionDetails.balance
            ])
            return true;
            
        } catch (err) {
            throw new Error(`Error retrieving employee: ${err.message}`);
        }
    }
}

module.exports = Transactions;