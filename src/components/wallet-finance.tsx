import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon, CreditCardIcon, DollarSignIcon, PlusIcon, SendIcon } from "lucide-react"

export default function Component() {
    
    const transactions = [
        { id: 1, type: 'credit', amount: 500, description: 'Salário', date: '2023-05-01' },
        { id: 2, type: 'debit', amount: 50, description: 'Grocery Shopping', date: '2023-05-02' },
        { id: 3, type: 'debit', amount: 30, description: 'Netflix Assinatura', date: '2023-05-03' },
        { id: 4, type: 'credit', amount: 100, description: 'Freelance Work', date: '2023-05-04' },
        { id: 5, type: 'credit', amount: 80, description: 'Pagamento Joshua', date: '2024-09-20' },
        { id: 5, type: 'debit', amount: 10, description: 'Coxinha', date: '2024-09-20' },
    ]

return (
<div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
    <div className="max-w-4xl mx-auto space-y-6">
        <Card>
            <CardHeader>
                <CardTitle>Saldo da Carteira</CardTitle>
                <CardDescription>Seu saldo atual e ações rápidas</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-bold mb-4">R$ 54.450,00</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <Button className="flex items-center justify-center space-x-2">
                        <PlusIcon className="w-4 h-4" />
                        <span>Adicionar Fundos</span>
                    </Button>
                    <Button className="flex items-center justify-center space-x-2">
                        <CreditCardIcon className="w-4 h-4" />
                        <span>Adicionar Compra</span>
                    </Button>
                    <Button className="flex items-center justify-center space-x-2">
                        <SendIcon className="w-4 h-4" />
                        <span>-</span>
                    </Button>
                    <Button className="flex items-center justify-center space-x-2">
                        <DollarSignIcon className="w-4 h-4" />
                        <span>Investimento</span>
                    </Button>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Transações Recentes</CardTitle>
                <CardDescription>Suas últimas atividades financeiras</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {transactions.map((transaction) => (
                    <li key={transaction.id}
                        className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                        <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-full ${transaction.type==='credit' ? 'bg-green-100'
                                : 'bg-red-100' }`}>
                                {transaction.type === 'credit' ? (
                                <ArrowDownIcon className="w-4 h-4 text-green-600" />
                                ) : (
                                <ArrowUpIcon className="w-4 h-4 text-red-600" />
                                )}
                            </div>
                            <div>
                                <p className="font-medium">{transaction.description}</p>
                                <p className="text-sm text-gray-500">{transaction.date}</p>
                            </div>
                        </div>
                        <div className={`font-semibold ${transaction.type==='credit' ? 'text-green-600' : 'text-red-600'
                            }`}>
                            {transaction.type === 'credit' ? '+' : '-'}R${transaction.amount.toFixed(2)}
                        </div>
                    </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button variant="outline" className="w-full">Visualizar todas as transações</Button>
            </CardFooter>
        </Card>
    </div>
</div>
)
}