import { createContext, useEffect, useState, ReactNode, useContext } from "react"
import { api } from '../services/api'

interface Transaction {
    id: number
    title: string
    amount: number
    type: string
    category: string
    createdAt: string
}

// TransactionInput is Transaction without 'id' and 'createdAt'
// a valid alternative to select (instead of exclude) fields would be:
// Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
    // accepts all valid React data (e.g. jsx, html, text,...)
    // this enables the component TransactionsProvider to have children elements
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[]
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

// The provider property will make the context available for other components 
const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

	useEffect(() => {
		api.get('/transactions')
		   .then(response => setTransactions(response.data.transactions))
	}, [])

    async function createTransaction(transactionInput: TransactionInput) {        
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider 
            value={ {transactions, createTransaction} }
        >
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)
    return context
}