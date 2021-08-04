const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
}

const account = {
    balance: 0,
    transactions: [],
    id: 0,

    createTransactions(amount, type){
        let transaction = {};
        return transaction = {
            amount,
            type,
            idCl: this.id += 1,
        }
    },

    deposit(amount){
        this.balance += amount;
        this.transactions.push(this.createTransactions(amount, 'deposit'));
        return this.transactions;
    },

    withdraw(amount){
        if(this.balance > amount){
            this.transactions.push(this.createTransactions(amount, 'withdraw'));
            this.balance = this.balance - amount;
            return this.balance;
        }
        console.log('Недостаточно средств! Произвести операцию невозможно!');
    },

    getBalance(){
        return this.balance;
    },

    getTransactionDetails(id){
        for(let i = 0; i < this.transactions.length; i += 1){
            const {amount, type, idCl} = this.transactions[i];
            if(idCl === id){
                return this.transactions[i];
            }
        }
    },

    getTransactionTotal(type){
        let total_dep = 0;
            for(let transaction of this.transactions){
                const {amount, type: type_, idCl} = transaction;
                if(type_ === type){
                    total_dep += amount;
                }
            }
            return total_dep;
    }
}

console.log(account.deposit(400));
console.log(account.deposit(1000));
console.log(account.deposit(800));
console.log(account.getBalance());
console.log(account.getTransactionDetails(0));
console.log(account.withdraw(300));
console.log(account.withdraw(300));
console.log(account.withdraw(300));
console.log(account.withdraw(300));
console.log(account.withdraw(300));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));