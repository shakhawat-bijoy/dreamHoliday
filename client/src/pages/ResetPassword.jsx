import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Slider from 'react-slick'
import Container from '../components/common/Container'
import logoImage from '../assets/images/logo.png'
import login1 from '../assets/images/login1.jpg'
import login2 from '../assets/images/login2.jpg'
import banner1 from '../assets/images/banner1.png'
import banner2 from '../assets/images/banner2.png'
import banner3 from '../assets/images/banner3.png'
import Image from '../components/common/Image'
import { sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { Triangle } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ResetPassword = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState(0)
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({
        email: ''
    })

    const sliderData = [
        {
            id: 1,
            image: login1,
            title: "Secure Your Account",
            description: "Reset your password securely and regain access to your account"
        },
        {
            id: 2,
            image: login2,
            title: "Quick Recovery",
            description: "Get back to planning your dream vacation in just a few steps"
        },
        {
            id: 3,
            image: banner1,
            title: "Protected Journey",
            description: "Your security is our priority - travel with peace of mind"
        },
        {
            id: 4,
            image: banner2,
            title: "Easy Access",
            description: "Simple and secure password recovery process"
        },
        {
            id: 5,
            image: banner3,
            title: "Stay Connected",
            description: "Never miss out on your next adventure"
        }
    ]

    const handleEmailSubmit = async (e) => {
        e.preventDefault()

        if (!email.trim()) {
            setErrors({ ...errors, email: 'Email is required' })
            return
        }

        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
            setErrors({ ...errors, email: 'Invalid email address' })
            return
        }

        setLoading(true)

        try {
            await sendPasswordResetEmail(auth, email)
            toast.success('Password reset email sent! Please check your inbox.')
            
            setTimeout(() => {
                toast.info('Click the link in your email to reset your password')
            }, 2000)

            // Clear form after 3 seconds
            setTimeout(() => {
                setEmail('')
                navigate('/login')
            }, 4000)

        } catch (error) {
            console.error('Password reset error:', error)
            
            if (error.code === 'auth/user-not-found') {
                setErrors({ ...errors, email: 'No account found with this email' })
                toast.error('No account found with this email')
            } else if (error.code === 'auth/invalid-email') {
                setErrors({ ...errors, email: 'Invalid email address' })
                toast.error('Invalid email address')
            } else {
                toast.error('Failed to send reset email. Please try again.')
            }
        } finally {
            setLoading(false)
        }
    }

    const handleGoogleLogin = async () => {
        setLoading(true)
        const provider = new GoogleAuthProvider()

        try {
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            toast.success(`Welcome back ${user.displayName || 'User'}!`)

            // Navigate to home page after successful login
            setTimeout(() => {
                navigate('/')
            }, 1000)

        } catch (error) {
            console.error('Google login error:', error)

            if (error.code === 'auth/popup-closed-by-user') {
                toast.error('Login cancelled')
            } else if (error.code === 'auth/account-exists-with-different-credential') {
                toast.error('An account already exists with this email')
            } else {
                toast.error('Google login failed. Please try again.')
            }
        } finally {
            setLoading(false)
        }
    }

    const handleFacebookLogin = () => {
        toast.info('Facebook login coming soon!')
    }

    const handleGithubLogin = () => {
        toast.info('GitHub login coming soon!')
    }



    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_, next) => {
            setActive(next);
        },
        appendDots: dots => (
            <div style={{
                position: "absolute",
                bottom: "1%",
                left: "50%",
                transform: "translateX(-50%)",
            }}>
                <ul style={{
                    margin: "0px",
                    display: "flex",
                    gap: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px 0",
                    listStyle: "none"
                }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="relative group cursor-pointer">
                <div className={`relative w-12 h-1 rounded-full overflow-hidden transition-all duration-700 ease-in-out
                  ${i === active ? 'bg-white/30' : 'bg-white/20 hover:bg-white/25'}`}>
                    <div className={`absolute top-0 left-0 h-full rounded-full transition-all duration-700 ease-in-out
                    ${i === active ? 'w-full bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg shadow-teal-500/50' : 'w-0 bg-white/40'}`} />
                </div>
                <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out
                  ${i === active ? 'text-white font-bold text-xs opacity-100 scale-110' : 'text-white/60 font-medium text-xs opacity-70 scale-100 group-hover:opacity-90 group-hover:scale-105'}`}>
                    {String(i + 1).padStart(2, '0')}
                </div>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ease-in-out
                  ${i === active ? 'bg-white scale-100 opacity-100 shadow-lg shadow-white/50' : 'bg-white/60 scale-0 opacity-0 group-hover:scale-75 group-hover:opacity-80'}`} />
            </div>
        ),
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="min-h-screen py-4 md:py-0">
                <Container>
                <div className="min-h-screen flex">
                    {/* Left Side - Slider */}
                    <div className="hidden lg:block relative flex-1 min-h-screen overflow-hidden rounded-3xl">
                        <Slider {...sliderSettings}>
                            {sliderData.map((slide) => (
                                <div key={slide.id}>
                                    <div className='h-screen flex items-center justify-center relative'>
                                        <div className='w-full h-[916px] relative'>
                                            <Image src={slide.image} className="w-full h-full object-cover rounded-xl" />
                                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>
                                            <div className='absolute bottom-16 left-8 right-8 text-white'>
                                                <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold font-league mb-3 leading-tight'>
                                                    {slide.title}
                                                </h3>
                                                <p className='text-base sm:text-lg lg:text-xl font-medium font-montserrat opacity-90 leading-relaxed max-w-md'>
                                                    {slide.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Right Side - Reset Password Form */}
                    <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
                        <div className="max-w-md w-full space-y-8">
                            {/* Logo */}
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-6">
                                    <Image
                                        to={'/'}
                                        src={logoImage}
                                        alt="Dream Holidays"
                                        className="h-8 w-auto mr-2"
                                    />
                                </div>
                            </div>

                            {/* Back to Login Link */}
                            <Link 
                                to="/login" 
                                className="inline-flex items-center text-sm text-gray-600 hover:text-teal-600 transition-colors mb-4"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to login
                            </Link>

                            {/* Enter Email */}
                            <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot your password?</h2>
                                    <p className="text-gray-600 mb-8">
                                        Don't worry, happens to all of us. Enter your email below to recover your password
                                    </p>

                                    <form className="space-y-6" onSubmit={handleEmailSubmit}>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value)
                                                    setErrors({ ...errors, email: '' })
                                                }}
                                                placeholder="john.doe@gmail.com"
                                                className={`appearance-none relative block w-full px-3 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                        </div>

                                        {loading ? (
                                            <div className="flex justify-center">
                                                <Triangle
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    color="#14b8a6"
                                                    ariaLabel="triangle-loading"
                                                />
                                            </div>
                                        ) : (
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
                                            >
                                                Submit
                                            </button>
                                        )}
                                    </form>

                                    {/* Divider */}
                                    <div className="relative mt-6">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300" />
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-2 bg-white text-gray-500">Or login with</span>
                                        </div>
                                    </div>

                                    {/* Social Login Buttons */}
                                    <div className="grid grid-cols-3 gap-3 mt-6">
                                        <button 
                                            onClick={handleFacebookLogin}
                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </button>
                                        <button 
                                            onClick={handleGoogleLogin}
                                            disabled={loading}
                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                        </button>
                                        <button 
                                            onClick={handleGithubLogin}
                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default ResetPassword
