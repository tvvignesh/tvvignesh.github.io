import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 Burdenoff Consultancy Services Pvt Ltd
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">CEO: Vignesh T.V</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Email: contact@boiler.com</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Phone: +91-7358445777</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Address</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              No.43, Veeramani Nagar,
              <br />
              2nd Cross Street, Nanmangalam,
              <br />
              Chennai - 600117
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <div className="flex justify-center space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:underline">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-600 dark:text-gray-400 hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
