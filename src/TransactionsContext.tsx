import { createContext, useEffect, useState, ReactNode } from "react"
import { api } from "./services/api"

interface Transaction {
    id: number
    title: string
    amount: number
    type: string
    category: string
    createdAt: string
}

interface TransactionsProviderProps {
    // accepts all valid React data (e.g. jsx, html, text,...)
    // this enables the component TransactionsProvider to have children elements
    children: ReactNode
}

// The provider property will make the context available for other components 
export const TransactionsContext = createContext<Transaction[]>([])

export function TransactionsProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

	useEffect(() => {
		api.get('/transactions')
			 .then(response => setTransactions(response.data.transactions))
	}, [])

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}