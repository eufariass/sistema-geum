import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import MetricCard from '../components/MetricCard'

const salesData = [
  { month: 'Jan', vendas: 12, valor: 2400000 },
  { month: 'Fev', vendas: 15, valor: 3000000 },
  { month: 'Mar', vendas: 18, valor: 3600000 },
  { month: 'Abr', vendas: 14, valor: 2800000 },
  { month: 'Mai', vendas: 20, valor: 4000000 },
  { month: 'Jun', vendas: 25, valor: 5000000 },
]

const topCorretores = [
  { nome: 'João Silva', vendas: 15, valor: 3000000 },
  { nome: 'Maria Santos', vendas: 12, valor: 2400000 },
  { nome: 'Pedro Costa', vendas: 10, valor: 2000000 },
  { nome: 'Ana Lima', vendas: 8, valor: 1600000 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Visão geral das métricas de vendas imobiliárias</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total de Vendas"
          value="104"
          icon="💰"
          trend="+15.3%"
          trendPositive={true}
        />
        <MetricCard
          title="Valor Total"
          value="R$ 20.8M"
          icon="💵"
          trend="+23.1%"
          trendPositive={true}
        />
        <MetricCard
          title="Imóveis Ativos"
          value="87"
          icon="🏠"
          trend="-2.4%"
          trendPositive={false}
        />
        <MetricCard
          title="Corretores Ativos"
          value="32"
          icon="👥"
          trend="+5.2%"
          trendPositive={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Vendas por Mês</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="vendas" stroke="#3b82f6" strokeWidth={2} name="Vendas" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Valor por Mês (R$)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="valor" fill="#10b981" name="Valor" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Corretores</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vendas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Valor Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topCorretores.map((corretor, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {corretor.nome}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {corretor.vendas}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      R$ {(corretor.valor / 1000000).toFixed(1)}M
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
