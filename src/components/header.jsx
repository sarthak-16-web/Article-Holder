

// // ismey apan {login , logout} hisaab se header k components baatayegey
import { Container, Logo, Logout } from "./import_component"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const AuthStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const NavItem = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !AuthStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !AuthStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: AuthStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: AuthStatus,
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm ">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-105"
            >
              <div >
                <Logo width="100%"  />
              </div>
            
            </Link>
          </div>

          <ul className="flex items-center space-x-1 font-bold">
            {NavItem.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Link
                    to={item.slug}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 rounded-lg transition-all duration-200 hover:text-blue-600 hover:bg-blue-50 group "
                  >
                    <span className="relative z-10 font-bold">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
                  </Link>
                </li>
              ) : null,
            )}

            {AuthStatus && (
              <li className="ml-4 pl-4 border-l border-gray-200">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-lg p-[1px] shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="bg-white rounded-lg">
                    <Logout className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200" />
                  </div>
                </div>
              </li>
            )}
          </ul>

          <div className="md:hidden">
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </Container>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
    </header>
  )
}
