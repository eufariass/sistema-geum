import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: '📊' },
  { path: '/vendas', label: 'Vendas', icon: '💰' },
  { path: '/corretores', label: 'Corretores', icon: '👥' },
  { path: '/imoveis', label: 'Imóveis', icon: '🏠' },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-2 rounded-lg group ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <span className="flex-1 whitespace-nowrap">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
