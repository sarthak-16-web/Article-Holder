
import { Link } from "react-router-dom"
import Logo from "./container/logo"

function Footer() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 border-t border-gray-200">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                  <Logo width="100%"  /> 
                
              </div>
              <div>
                <p className="text-sm text-gray-600 leading-relaxed">Copyright © 2023. All Rights Reserved by DevUI.</p>
              </div>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-sm font-semibold text-gray-800">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-sm font-semibold text-gray-800">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Account
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Help
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-sm font-semibold text-gray-800">Legals</h3>
              <ul className="space-y-3">
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
