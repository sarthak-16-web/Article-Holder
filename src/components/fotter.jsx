
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
                <p className="text-sm text-gray-600 leading-relaxed">Copyright © 2025</p>
              </div>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-sm font-semibold text-gray-800">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                   Email : kasat4309@gmail.com
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                   No : 8959089535
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Git : sarthak-web-dev
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                   Ig : sarthak_kasat_
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-sm font-semibold text-gray-800">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                   All rights reserved 
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Section : 48X
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm" to="/">
                    Upcoming changes 
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
