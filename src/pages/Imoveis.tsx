const imoveisData = [
  { id: 1, tipo: 'Apartamento', endereco: 'Rua das Flores, 123 - Centro', quartos: 3, area: 85, valor: 450000, status: 'Disponível' },
  { id: 2, tipo: 'Casa', endereco: 'Av. Principal, 456 - Jardim América', quartos: 4, area: 220, valor: 850000, status: 'Vendido' },
  { id: 3, tipo: 'Apartamento', endereco: 'Rua Boa Vista, 789 - Boa Vista', quartos: 2, area: 65, valor: 320000, status: 'Reservado' },
  { id: 4, tipo: 'Casa', endereco: 'Rua Vila Nova, 321 - Vila Nova', quartos: 3, area: 180, valor: 680000, status: 'Disponível' },
  { id: 5, tipo: 'Cobertura', endereco: 'Av. Central, 654 - Centro', quartos: 4, area: 250, valor: 1200000, status: 'Disponível' },
  { id: 6, tipo: 'Apartamento', endereco: 'Rua do Sol, 987 - Jardim', quartos: 2, area: 70, valor: 380000, status: 'Disponível' },
]

export default function Imoveis() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Imóveis</h1>
          <p className="text-gray-600 mt-1">Gerenciamento de imóveis cadastrados</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
          + Novo Imóvel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total de Imóveis</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">87</p>
            </div>
            <div className="text-4xl">🏠</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Disponíveis</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">62</p>
            </div>
            <div className="text-4xl">✅</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Vendidos</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">25</p>
            </div>
            <div className="text-4xl">🎯</div>
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
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Endereço
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quartos
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Área (m²)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Valor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {imoveisData.map((imovel) => (
                  <tr key={imovel.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      #{imovel.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {imovel.tipo}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {imovel.endereco}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {imovel.quartos}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {imovel.area}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      R$ {imovel.valor.toLocaleString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        imovel.status === 'Disponível'
                          ? 'bg-green-100 text-green-800'
                          : imovel.status === 'Vendido'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {imovel.status}
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
