export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-gold-500 mb-2">
              Harsoyo, S.IP, SH., MKn
            </h2>
            <p className="text-gray-400">Notaris & PPAT Tegal</p>
            <p className="text-gray-400 mt-2">Melayani dengan profesionalisme dan integritas</p>
            <p className="text-gray-400 mt-2">
              JL. Hasyim Dirjo Subroto Desa Wangandawa, Kecamatan Talang, Kabupaten Tegal
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Kantor Notaris & PPAT Harsoyo, Tegal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}