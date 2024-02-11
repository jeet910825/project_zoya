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
    },
    async getTransaction(start_date, end_date) {
        try {
            const query = `
                SELECT 
                    e.E_NAME,
                    t.T_DATE,
                    (SELECT BALANCE FROM transaction_table WHERE T_DATE = '${start_date}' AND E_ID = e.E_ID LIMIT 1) AS opening_balance,
                    (SELECT BALANCE FROM transaction_table WHERE T_DATE = '${end_date}' AND E_ID = e.E_ID ORDER BY T_DATE DESC LIMIT 1) AS closing_balance,
                    e.BALANCE AS available_balance
                FROM 
                    transaction_table t
                JOIN 
                    employee_table e ON t.E_ID = e.E_ID
                WHERE 
                    t.T_DATE BETWEEN '${start_date}' AND '${end_date}'
                GROUP BY 
                    t.E_ID, t.T_DATE;
            `;
            const [rows, fields] = await pool.promise().query(query);
            return rows;
        } catch (err) {
            throw new Error(`Error retrieving transactions: ${err.message}`);
        }
    }
    
}

module.exports = Transactions;