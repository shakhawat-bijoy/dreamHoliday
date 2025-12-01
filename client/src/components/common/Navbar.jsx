import { useState, useEffect } from 'react'
import { Plane, Building2, Menu, X, User, LogOut } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import Image from './Image'
import logoImage from '../../assets/images/logo.png'
import { Link, useLocation, useNavigate } from 'react-router'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Navbar = () => {
    const navigate = useNavigate()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [user, setUser] = useState(null)
    const location = useLocation()
    const isAccountPage = location.pathname === '/account'

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => unsubscribe()
    }, [])

    const handleSignOut = async () => {
        try {
            await signOut(auth)
            toast.success('Signed out successfully!')
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } catch (error) {
            console.error('Sign out error:', error)
            toast.error('Failed to sign out')
        }
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const isHomePage = location.pathname === '/'
    const isOtherRoute = !isHomePage && !isAccountPage

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <nav className={`${isOtherRoute ? '' : isAccountPage ? 'absolute top-0' : 'absolute md:top-5 top-0'} ${!isOtherRoute ? 'absolute' : ''} left-0 right-0 z-50 bg-transparent`}>
                <Container className='px-2'>
                <div className="relative z-10 flex items-center justify-between py-4">
                    {/* Left Side - Navigation Tabs (Desktop) */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link to={'/flights'} className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${isOtherRoute ? 'hover:bg-gray-100' : isAccountPage ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
                            <Plane className={`w-4 h-4 ${isOtherRoute ? 'text-black' : isAccountPage ? 'text-black' : 'text-white'}`} />
                            <span className={isOtherRoute ? 'text-black' : isAccountPage ? 'text-black' : 'text-white'}>Find Flights</span>
                        </Link>

                        <Link to={'/hotels'} className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${isOtherRoute ? 'hover:bg-gray-100' : isAccountPage ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
                            <Building2 className={`w-4 h-4 ${isOtherRoute ? 'text-black' : isAccountPage ? 'text-black' : 'text-white'}`} />
                            <span className={isOtherRoute ? 'text-black' : isAccountPage ? 'text-black' : 'text-white'}>Find Stays</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className={`lg:hidden p-2 rounded-lg transition-all duration-300 cursor-pointer ${isOtherRoute ? 'text-black hover:bg-gray-100' : isAccountPage ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>

                    {/* Center - Logo */}
                    <div className="flex items-center space-x-2">
                        <Image
                            to={'/'}
                            src={logoImage}
                            alt="Dream Holidays"
                            className="h-10 md:h-12 w-auto"
                        />
                    </div>

                    {/* Right Side - Auth Buttons (Desktop) */}
                    <div className="hidden lg:flex items-center space-x-3">
                        {user ? (
                            isAccountPage ? (
                                <button
                                    onClick={handleSignOut}
                                    className="flex items-center gap-2 font-medium px-4 py-2 transition-all duration-500 rounded-lg text-black hover:bg-gray-100 cursor-pointer"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span>Sign Out</span>
                                </button>
                            ) : (
                                <Link
                                    to="/account"
                                    className={`flex items-center gap-2 font-medium px-4 py-2 transition-all duration-500 rounded-lg ${isOtherRoute ? 'text-black hover:bg-gray-100' : 'text-white hover:text-black hover:bg-white'}`}
                                >
                                    <User className="w-4 h-4" />
                                    <span>My Account</span>
                                </Link>
                            )
                        ) : (
                            <>
                                <Button
                                    text="Login"
                                    to="/login"
                                    className={isOtherRoute ? 'text-black hover:bg-gray-100 font-medium px-4 py-2 transition-all duration-500 rounded-lg' : isAccountPage ? 'text-black hover:bg-gray-100 font-medium px-4 py-2 transition-all duration-500 rounded-lg' : 'text-white hover:text-black hover:bg-white font-medium px-4 py-2 transition-all duration-500 rounded-lg'}
                                />

                                <Button
                                    text="Sign up"
                                    to="/register"
                                    className={isOtherRoute ? 'text-black hover:bg-gray-100 font-medium px-4 py-2 transition-all duration-500 rounded-lg' : isAccountPage ? 'text-black hover:bg-gray-100 font-medium px-4 py-2 transition-all duration-500 rounded-lg' : 'text-white hover:text-black hover:bg-white font-medium px-4 py-2 transition-all duration-500 rounded-lg'}
                                />
                            </>
                        )}
                    </div>

                    {/* Mobile Auth Buttons (Tablet) */}
                    <div className="hidden md:flex lg:hidden items-center space-x-2">
                        {user ? (
                            isAccountPage ? (
                                <button
                                    onClick={handleSignOut}
                                    className="flex items-center gap-2 font-medium px-3 py-2 text-sm transition-all duration-500 rounded-lg text-black hover:text-white hover:bg-black cursor-pointer"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span>Sign Out</span>
                                </button>
                            ) : (
                                <Link
                                    to="/account"
                                    className={`flex items-center gap-2 font-medium px-3 py-2 text-sm transition-all duration-500 rounded-lg ${isOtherRoute ? 'text-black hover:text-white hover:bg-black' : 'text-white hover:text-black hover:bg-white'}`}
                                >
                                    <User className="w-4 h-4" />
                                    <span>My Account</span>
                                </Link>
                            )
                        ) : (
                            <>
                                <Button
                                    text="Login"
                                    to="/login"
                                    className={isOtherRoute ? 'text-black hover:text-white hover:bg-black font-medium px-3 py-2 text-sm transition-all duration-500 rounded-lg' : isAccountPage ? 'text-black hover:text-white hover:bg-black font-medium px-3 py-2 text-sm transition-all duration-500 rounded-lg' : 'text-white hover:text-black hover:bg-white font-medium px-3 py-2 text-sm transition-all duration-500 rounded-lg'}
                                />

                                <Button
                                    text="Sign up"
                                    to="/register"
                                    className={isOtherRoute ? 'text-black hover:text-white hover:bg-black font-medium px-3 py-2 text-sm transition-all duration-500 rounded-lg' : isAccountPage ? 'text-black hover:text-white hover:bg-black font-medium px-3 py-2 text-sm transition-all duration-500 rounded-lg' : 'text-white hover:text-black hover:bg-white font-medium px-3 py-2 text-sm transition-all duration-500 rounded-lg'}
                                />
                            </>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-18 left-0 right-0 mt-2 bg-white/70 rounded-xl shadow-lg border border-white/20 z-50">
                        <div className="p-4 space-y-4">
                            {/* Mobile Navigation Links */}
                            <div className="space-y-2">
                                <Link
                                    to={'/flights'}
                                    className='flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 text-gray-800'
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Plane className="w-5 h-5 text-teal-600" />
                                    <span className="font-bold">Find Flights</span>
                                </Link>

                                <Link
                                    to={'/hotels'}
                                    className='flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 text-gray-800'
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Building2 className="w-5 h-5 text-teal-600" />
                                    <span className="font-bold">Find Stays</span>
                                </Link>
                            </div>

                            {/* Mobile Auth Buttons */}
                            <div className="md:hidden pt-4 border-t border-gray-200 space-y-2">
                                {user ? (
                                    isAccountPage ? (
                                        <button
                                            onClick={() => {
                                                handleSignOut()
                                                setIsMobileMenuOpen(false)
                                            }}
                                            className="w-full flex items-center justify-center gap-2 bg-transparent border border-teal-600 text-black hover:bg-teal-600 hover:text-white font-bold px-4 py-3 transition-all duration-300 rounded-lg cursor-pointer"
                                        >
                                            <LogOut className="w-5 h-5" />
                                            <span>Sign Out</span>
                                        </button>
                                    ) : (
                                        <Link
                                            to="/account"
                                            className="w-full flex items-center justify-center gap-2 bg-transparent border border-teal-600 text-black hover:bg-teal-600 hover:text-white font-bold px-4 py-3 transition-all duration-300 rounded-lg"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <User className="w-5 h-5" />
                                            <span>My Account</span>
                                        </Link>
                                    )
                                ) : (
                                    <>
                                        <Button
                                            text="Login"
                                            to="/login"
                                            className="w-full text-center bg-transparent border border-teal-600 text-black hover:bg-teal-600 hover:text-white font-bold px-4 py-3 transition-all duration-300 rounded-lg"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        />

                                        <Button
                                            text="Sign up"
                                            to="/register"
                                            className="w-full text-center bg-transparent border border-teal-600 text-black hover:bg-teal-600 hover:text-white font-bold px-4 py-3 transition-all duration-300 rounded-lg"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </nav>
        </>
    )
}

export default Navbar