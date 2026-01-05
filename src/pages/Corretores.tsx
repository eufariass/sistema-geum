const corretoresData = [
  { id: 1, nome: 'João Silva', email: 'joao.silva@geum.com', telefone: '(11) 98765-4321', vendas: 15, valorTotal: 3000000, status: 'Ativo' },
  { id: 2, nome: 'Maria Santos', email: 'maria.santos@geum.com', telefone: '(11) 98765-4322', vendas: 12, valorTotal: 2400000, status: 'Ativo' },
  { id: 3, nome: 'Pedro Costa', email: 'pedro.costa@geum.com', telefone: '(11) 98765-4323', vendas: 10, valorTotal: 2000000, status: 'Ativo' },
  { id: 4, nome: 'Ana Lima', email: 'ana.lima@geum.com', telefone: '(11) 98765-4324', vendas: 8, valorTotal: 1600000, status: 'Ativo' },
  { id: 5, nome: 'Carlos Mendes', email: 'carlos.mendes@geum.com', telefone: '(11) 98765-4325', vendas: 6, valorTotal: 1200000, status: 'Inativo' },
]

export default function Corretores() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Corretores</h1>
          <p className="text-gray-600 mt-1">Gerenciamento de corretores da imobiliária</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
          + Novo Corretor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total de Corretores</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">32</p>
            </div>
            <div className="text-4xl">👥</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Corretores Ativos</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">28</p>
            </div>
            <div className="text-4xl">✅</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Média de Vendas</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">3.2</p>
            </div>
            <div className="text-4xl">📈</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Telefone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vendas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Valor Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {corretoresData.map((corretor) => (
                  <tr key={corretor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {corretor.nome}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {corretor.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {corretor.telefone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {corretor.vendas}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      R$ {(corretor.valorTotal / 1000000).toFixed(1)}M
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        corretor.status === 'Ativo'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {corretor.status}
                      </span>
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
