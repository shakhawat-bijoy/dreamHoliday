import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import Slider from 'react-slick'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import logoImage from '../assets/images/logo.png'
import login1 from '../assets/images/login1.jpg'
import login2 from '../assets/images/login2.jpg'
import banner1 from '../assets/images/banner1.png'
import banner2 from '../assets/images/banner2.png'
import banner3 from '../assets/images/banner3.png'
import Image from '../components/common/Image'
import { createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth"
import { auth } from '../firebaseConfig'
import { Triangle } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState(0)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [agreeToTerms, setAgreeToTerms] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    })

    const loginSliderData = [
        {
            id: 1,
            image: login1,
            title: "Welcome to Dream Holidays",
            description: "Discover amazing destinations and create unforgettable memories"
        },
        {
            id: 2,
            image: login2,
            title: "Explore Paradise",
            description: "Find your perfect getaway with our exclusive travel packages"
        },
        {
            id: 3,
            image: banner1,
            title: "Adventure Awaits",
            description: "Experience the world's most beautiful destinations"
        },
        {
            id: 4,
            image: banner2,
            title: "Luxury Travel",
            description: "Indulge in premium experiences and world-class hospitality"
        },
        {
            id: 5,
            image: banner3,
            title: "Create Memories",
            description: "Make every journey an unforgettable adventure"
        }
    ]

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        // Clear error for this field
        setErrors({
            ...errors,
            [e.target.name]: ''
        })
    }

    const validateForm = () => {
        let valid = true
        const newErrors = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: ''
        }

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required'
            valid = false
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required'
            valid = false
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
            valid = false
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address'
            valid = false
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required'
            valid = false
        }

        if (!formData.password) {
            newErrors.password = 'Password is required'
            valid = false
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(formData.password)) {
            newErrors.password = 'Password must contain at least 1 lowercase, 1 uppercase, 1 numeric, 1 special character and be 8+ characters'
            valid = false
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password'
            valid = false
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Passwords do not match'
            valid = false
        }

        setErrors(newErrors)
        return valid
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!agreeToTerms) {
            toast.error('Please agree to the terms and conditions')
            return
        }

        if (!validateForm()) {
            return
        }

        setLoading(true)

        try {
            // Create user with Firebase
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            )

            // Update Firebase profile with display name and phone
            const userName = `${formData.firstName} ${formData.lastName}`
            await updateProfile(userCredential.user, {
                displayName: userName,
                phoneNumber: formData.phoneNumber
            })

            // Send email verification
            await sendEmailVerification(userCredential.user)

            toast.success('Registration successful! Please check your email for verification.')

            // Clear form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
            })
            setAgreeToTerms(false)

            // Navigate to login after 2 seconds
            setTimeout(() => {
                navigate('/login')
            }, 2000)

        } catch (error) {
            console.error('Registration error:', error)
            
            if (error.code === 'auth/email-already-in-use') {
                setErrors({ ...errors, email: 'Email already in use' })
                toast.error('Email already in use')
            } else if (error.code === 'auth/weak-password') {
                setErrors({ ...errors, password: 'Password is too weak' })
                toast.error('Password is too weak')
            } else {
                toast.error('Registration failed. Please try again.')
            }
        } finally {
            setLoading(false)
        }
    }

    const handleGoogleSignUp = async () => {
        setLoading(true)
        const provider = new GoogleAuthProvider()

        try {
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            toast.success(`Welcome ${user.displayName || 'User'}! Registration successful.`)

            // Navigate to home or dashboard after successful registration
            setTimeout(() => {
                navigate('/')
            }, 1000)

        } catch (error) {
            console.error('Google sign-up error:', error)
            
            if (error.code === 'auth/popup-closed-by-user') {
                toast.error('Sign-up cancelled')
            } else if (error.code === 'auth/account-exists-with-different-credential') {
                toast.error('An account already exists with this email')
            } else {
                toast.error('Google sign-up failed. Please try again.')
            }
        } finally {
            setLoading(false)
        }
    }

    // Check if all required fields are filled
    const isFormValid = () => {
        return (
            formData.firstName.trim() !== '' &&
            formData.lastName.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.phoneNumber.trim() !== '' &&
            formData.password.trim() !== '' &&
            formData.confirmPassword.trim() !== '' &&
            agreeToTerms
        )
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
            <div
                style={{
                    position: "absolute",
                    bottom: "1%",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
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
                {/* Progress Bar Container */}
                <div className={`
                  relative w-12 h-1 rounded-full overflow-hidden transition-all duration-700 ease-in-out
                  ${i === active ? 'bg-white/30' : 'bg-white/20 hover:bg-white/25'}
                `}>
                    {/* Active Progress Bar */}
                    <div className={`
                    absolute top-0 left-0 h-full rounded-full transition-all duration-700 ease-in-out
                    ${i === active
                            ? 'w-full bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg shadow-teal-500/50'
                            : 'w-0 bg-white/40'
                        }
                  `} />
                </div>

                {/* Slide Number */}
                <div className={`
                  absolute -top-6 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out
                  ${i === active
                        ? 'text-white font-bold text-xs opacity-100 scale-110'
                        : 'text-white/60 font-medium text-xs opacity-70 scale-100 group-hover:opacity-90 group-hover:scale-105'
                    }
                `}>
                    {String(i + 1).padStart(2, '0')}
                </div>

                {/* Active Dot */}
                <div className={`
                  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-1.5 h-1.5 rounded-full transition-all duration-300 ease-in-out
                  ${i === active
                        ? 'bg-white scale-100 opacity-100 shadow-lg shadow-white/50'
                        : 'bg-white/60 scale-0 opacity-0 group-hover:scale-75 group-hover:opacity-80'
                    }
                `} />
            </div>
        ),

        responsive: [
            {
                breakpoint: 1024,
                settings: {}
            },
            {
                breakpoint: 600,
                settings: {}
            },
            {
                breakpoint: 480,
                settings: {
                    appendDots: dots => (
                        <div
                            style={{
                                position: "absolute",
                                left: "50%",
                                bottom: "10%",
                                transform: "translateX(-50%)",
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <ul
                                style={{
                                    margin: "0px",
                                    display: "flex",
                                    gap: "12px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    listStyle: "none",
                                    padding: "0px"
                                }}
                            >
                                {dots}
                            </ul>
                        </div>
                    ),
                    customPaging: i => (
                        <div className="relative group cursor-pointer px-1">
                            {/* Mobile Progress Bar */}
                            <div className={`
                            relative w-8 h-0.5 rounded-full overflow-hidden transition-all duration-500 ease-in-out
                            ${i === active ? 'bg-white/40' : 'bg-white/20'}
                          `}>
                                <div className={`
                                absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-in-out
                                ${i === active
                                        ? 'w-full bg-gradient-to-r from-teal-400 to-blue-500'
                                        : 'w-0 bg-white/40'
                                    }
                              `} />
                            </div>

                            {/* Mobile Active Dot */}
                            <div className={`
                            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            w-1 h-1 rounded-full transition-all duration-300 ease-in-out
                            ${i === active
                                    ? 'bg-white scale-100 opacity-100'
                                    : 'bg-white/60 scale-0 opacity-0'
                                }
                          `} />
                        </div>
                    ),
                }
            }
        ],
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
                            {loginSliderData.map((slide) => (
                                <div key={slide.id}>
                                    <div className='h-screen flex items-center justify-center relative'>
                                        <div className='w-full h-[916px] relative '>
                                            <Image src={slide.image} className="w-full h-full object-cover rounded-xl" />
                                            <div className='absolute inset-0 bg-opacity-30'></div>
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

                    {/* Right Side - Sign Up Form */}
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
                                    <span className="text-xl font-semibold text-gray-900"></span>
                                </div>
                            </div>

                            {/* Sign Up Form */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign up</h2>
                                <p className="text-gray-600 mb-8">Let's get you all set up so you can access your personal account</p>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    {/* First Name and Last Name */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                                First Name
                                            </label>
                                            <input
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="John"
                                                className={`appearance-none relative block w-full px-3 py-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
                                            />
                                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Last Name
                                            </label>
                                            <input
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Doe"
                                                className={`appearance-none relative block w-full px-3 py-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
                                            />
                                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                        </div>
                                    </div>

                                    {/* Email and Phone */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john.doe@gmail.com"
                                                className={`appearance-none relative block w-full px-3 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone Number
                                            </label>
                                            <input
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                type="tel"
                                                required
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 000-0000"
                                                className={`appearance-none relative block w-full px-3 py-3 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
                                            />
                                            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="password"
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                required
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="••••••••••••"
                                                className={`appearance-none relative block w-full px-3 py-3 pr-10 border ${errors.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
                                            />
                                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                            <button
                                                type="button"
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-5 w-5 text-gray-400" />
                                                ) : (
                                                    <Eye className="h-5 w-5 text-gray-400" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Confirm Password */}
                                    <div>
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                            Confirm Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                required
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                placeholder="••••••••••••"
                                                className={`appearance-none relative block w-full px-3 py-3 pr-10 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
                                            />
                                            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                                            <button
                                                type="button"
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOff className="h-5 w-5 text-gray-400" />
                                                ) : (
                                                    <Eye className="h-5 w-5 text-gray-400" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Terms Agreement */}
                                    <div className="flex items-center">
                                        <input
                                            id="agreeToTerms"
                                            name="agreeToTerms"
                                            type="checkbox"
                                            checked={agreeToTerms}
                                            onChange={(e) => setAgreeToTerms(e.target.checked)}
                                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-900">
                                            I agree to all the{' '}
                                            <Link to="/terms" className="text-teal-600 hover:text-teal-500">
                                                Terms
                                            </Link>{' '}
                                            and{' '}
                                            <Link to="/Privecy-Policy" className="text-teal-600 hover:text-teal-500">
                                                Privacy Policies
                                            </Link>
                                        </label>
                                    </div>

                                    {/* Create Account Button */}
                                    <div>
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
                                                disabled={!isFormValid() || loading}
                                                className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white transition-colors cursor-pointer ${isFormValid() && !loading
                                                    ? 'bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
                                                    : 'bg-gray-300 cursor-not-allowed opacity-50'
                                                    }`}
                                            >
                                                Create account
                                            </button>
                                        )}
                                    </div>

                                    {/* Sign In Link */}
                                    <div className="text-center">
                                        <span className="text-sm text-gray-600">
                                            Already have an account?{' '}
                                            <Link
                                                to="/login"
                                                className="font-medium text-teal-600 hover:text-teal-500"
                                            >
                                                Login
                                            </Link>
                                        </span>
                                    </div>

                                    {/* Divider */}
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300" />
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                                        </div>
                                    </div>

                                    {/* Social Sign Up Buttons */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <Button
                                            text={
                                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path
                                                        fill="#1877F2"
                                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                                    />
                                                </svg>
                                            }
                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                                            to="#"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                toast.info('Facebook sign-up coming soon!')
                                            }}
                                        />

                                        <Button
                                            text={
                                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path
                                                        fill="#4285F4"
                                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                    />
                                                    <path
                                                        fill="#34A853"
                                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                    />
                                                    <path
                                                        fill="#FBBC05"
                                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                    />
                                                    <path
                                                        fill="#EA4335"
                                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                    />
                                                </svg>
                                            }
                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                                            to="#"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                handleGoogleSignUp()
                                            }}
                                        />

                                        <Button
                                            text={
                                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path
                                                        fill="#000000"
                                                        d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"
                                                    />
                                                </svg>
                                            }
                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                                            to="#"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                toast.info('Apple sign-up coming soon!')
                                            }}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Register