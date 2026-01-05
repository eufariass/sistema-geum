export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gray-900">
              Sistema GEUM
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div className="text-sm text-gray-700">
                <span className="font-medium">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
