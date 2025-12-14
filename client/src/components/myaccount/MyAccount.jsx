import { useState, useEffect } from 'react'
import {
  User, Mail, Phone, MapPin, Calendar, Camera,
  X, Check, CreditCard, History, Settings,
  Edit3, Bell, Shield, Globe, LogOut, Trash2,
  Plus, Star, Plane, Download, Eye
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { toast } from 'react-toastify'
import Image from '../common/Image'

const Account = () => {
  const profileGifSrc = `${import.meta.env.BASE_URL}bijoy.gif`
  const profileVideoSrc = `${import.meta.env.BASE_URL}bijoy.mp4`
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('profile')
  const [loading, setLoading] = useState(true)
  const [editMode, setEditMode] = useState({
    name: false,
    phone: false,
    address: false,
    dateOfBirth: false
  })

  // User data from Firebase and database
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    avatar: '',
    coverImage: '',
    uid: ''
  })

  const [editedInfo, setEditedInfo] = useState({
    name: '',
    phone: '',
    address: '',
    dateOfBirth: ''
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Fetch user data from Firebase only
        const userData = {
          name: currentUser.displayName || '',
          email: currentUser.email || '',
          phone: currentUser.phoneNumber || '',
          address: '',
          dateOfBirth: '',
          avatar: currentUser.photoURL || '',
          coverImage: '',
          uid: currentUser.uid
        }

        setUserInfo(userData)
        setEditedInfo({
          name: userData.name,
          phone: userData.phone,
          address: userData.address,
          dateOfBirth: userData.dateOfBirth
        })
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleEditToggle = (field) => {
    setEditMode({ ...editMode, [field]: !editMode[field] })
  }

  const handleInputChange = (field, value) => {
    setEditedInfo({ ...editedInfo, [field]: value })
  }

  const handleSave = async (field) => {
    try {
      // Update Firebase profile
      if (auth.currentUser) {
        const updates = {}

        if (field === 'name') {
          updates.displayName = editedInfo[field]
        }

        if (field === 'phone') {
          updates.phoneNumber = editedInfo[field]
        }

        if (Object.keys(updates).length > 0) {
          await updateProfile(auth.currentUser, updates)
        }
      }

      // Update local state
      setUserInfo({ ...userInfo, [field]: editedInfo[field] })
      setEditMode({ ...editMode, [field]: false })
      toast.success('Profile updated successfully!')
    } catch (error) {
      console.error('Error updating profile:', error)
      toast.error('Failed to update profile')
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      toast.success('Signed out successfully!')
      navigate('/')
    } catch (error) {
      console.error('Sign out error:', error)
      toast.error('Failed to sign out')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    )
  }

  const paymentMethods = [
    {
      id: 1,
      cardType: 'visa',
      cardNumber: '4242',
      nameOnCard: 'John Anderson',
      expiryDate: '12/25',
      isDefault: true,
      country: 'United States'
    },
    {
      id: 2,
      cardType: '',
      cardNumber: '5555',
      nameOnCard: 'John Anderson',
      expiryDate: '09/26',
      isDefault: false,
      country: 'United States'
    }
  ]

  const bookings = [
    {
      id: 1,
      bookingReference: 'DH-2024-ABC123',
      departureAirport: 'JFK',
      arrivalAirport: 'LAX',
      flightNumber: 'AA 1234',
      airline: 'American Airlines',
      departureTime: '2024-12-25T10:00:00',
      arrivalTime: '2024-12-25T13:30:00',
      totalAmount: '450.00',
      currency: 'USD',
      status: 'confirmed',
      bookingDate: '2024-11-15T14:30:00',
      passenger: {
        firstName: 'John',
        lastName: 'Anderson',
        email: 'john.anderson@example.com'
      }
    }
  ]

  const getCardGradient = (cardType) => {
    switch (cardType) {
      case 'visa':
        return 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900'
      case 'mastercard':
        return 'bg-gradient-to-br from-red-500 via-orange-600 to-yellow-500'
      default:
        return 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
    }
  }

  const getCardLogo = (cardType) => {
    switch (cardType) {
      case 'visa':
        return <div className="text-white font-bold text-2xl italic tracking-wider">VISA</div>
      case 'mastercard':
        return (
          <div className="flex gap-1">
            <div className="w-8 h-8 rounded-full bg-red-500 opacity-90"></div>
            <div className="w-8 h-8 rounded-full bg-yellow-500 opacity-90 -ml-3"></div>
          </div>
        )
      default:
        return <CreditCard className="w-8 h-8 text-white" />
    }
  }

  // ------------------------------------------------
  // PROFILE TAB
  // ------------------------------------------------

  const renderProfileContent = () => (
    <div className="space-y-8">
      <div className="relative">
        <div className="h-52 lg:h-96 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl">
          <Image src={'https://ik.imagekit.io/abpj7jifz/G0010808.JPG'} alt="Cover Image" className="w-full h-full object-cover" />

          <button className="absolute lg:top-6 lg:right-6 top-2 right-2 bg-white/35 hover:bg-white text-gray-900 lg:px-5 px-2.5 lg:py-2.5 py-1.5 lg:rounded-xl rounded-md font-medium text-sm lg:text-base transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl backdrop-blur-sm">
            <Camera className="w-4 h-4" />
            Upload Cover
          </button>

          <div className="flex items-center gap-5 flex-wrap sm:flex-nowrap">
            <div className="absolute -bottom-20 left-4 sm:left-8">
              <div className="relative">
                <div className="w-32 lg:w-52 h-32 lg:h-52 rounded-full bg-white shadow-2xl ring-4 ring-white overflow-hidden">
                  <video
                    src={profileVideoSrc}
                    poster={profileGifSrc}
                    controls={false}
                    playsInline
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <button className="absolute bottom-2 right-2 w-10 sm:w-12 h-10 sm:h-12 bg-teal-500 hover:bg-teal-600 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  <Camera className="w-5 sm:w-6 h-5 sm:h-6" />
                </button>
              </div>
            </div>

            <div className="z-10 absolute lg:left-64 left-40 lg:top-98 top-56 max-w-[70%]">
              <h1 className="text-xl md:text-4xl font-bold text-black tracking-wider">
                {userInfo.name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mt-32 sm:mt-28">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Personal Information</h2>

        <div className="space-y-6">
          {/* Name */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <div className="flex items-center space-x-4 flex-1">
              <User className="w-5 h-5 text-gray-400" />
              <div className="flex-1 mr-2">
                <p className="text-sm text-gray-500">Full Name</p>
                {editMode.name ? (
                  <input
                    type="text"
                    value={editedInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="font-medium text-gray-900 mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="John Anderson"
                  />
                ) : (
                  <p className="font-medium text-gray-900 mt-1">{userInfo.name || 'Not set'}</p>
                )}
              </div>
            </div>
            {editMode.name ? (
              <div className="flex gap-2 self-end mb-1">
                <button
                  onClick={() => handleSave('name')}
                  className="p-2 text-white bg-teal-600 hover:bg-teal-700 rounded-lg cursor-pointer transition-colors"
                  title="Save"
                >
                  <Check className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    setEditedInfo({ ...editedInfo, name: userInfo.name })
                    handleEditToggle('name')
                  }}
                  className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                  title="Cancel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleEditToggle('name')}
                className="p-2 text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg cursor-pointer transition-colors self-end mb-1"
                title="Edit"
              >
                <Edit3 className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Email */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <div className="flex items-center space-x-4 flex-1">
              <Mail className="w-5 h-5 text-gray-400" />
              <div className="flex-1 mr-2">
                <p className="text-sm text-gray-500">Email Address</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="font-medium text-gray-900">{userInfo.email}</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <div className="flex items-center space-x-4 flex-1">
              <Phone className="w-5 h-5 text-gray-400" />
              <div className="flex-1 mr-2">
                <p className="text-sm text-gray-500">Phone Number</p>
                {editMode.phone ? (
                  <input
                    type="tel"
                    value={editedInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="font-medium text-gray-900 mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="+1 (555) 123-4567"
                  />
                ) : (
                  <p className="font-medium text-gray-900 mt-1">{userInfo.phone || 'Not set'}</p>
                )}
              </div>
            </div>
            {editMode.phone ? (
              <div className="flex gap-2 self-end mb-1">
                <button
                  onClick={() => handleSave('phone')}
                  className="p-2 text-white bg-teal-600 hover:bg-teal-700 rounded-lg cursor-pointer transition-colors"
                  title="Save"
                >
                  <Check className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    setEditedInfo({ ...editedInfo, phone: userInfo.phone })
                    handleEditToggle('phone')
                  }}
                  className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                  title="Cancel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleEditToggle('phone')}
                className="p-2 text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg cursor-pointer transition-colors self-end mb-1"
                title="Edit"
              >
                <Edit3 className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Address */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <div className="flex items-center space-x-4 flex-1">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div className="flex-1 mr-2">
                <p className="text-sm text-gray-500">Address</p>
                {editMode.address ? (
                  <input
                    type="text"
                    value={editedInfo.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="font-medium text-gray-900 mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="123 Main Street, New York, NY 10001"
                  />
                ) : (
                  <p className="font-medium text-gray-900 mt-1">{userInfo.address || 'Not set'}</p>
                )}
              </div>
            </div>
            {editMode.address ? (
              <div className="flex gap-2 self-end mb-1">
                <button
                  onClick={() => handleSave('address')}
                  className="p-2 text-white bg-teal-600 hover:bg-teal-700 rounded-lg cursor-pointer transition-colors"
                  title="Save"
                >
                  <Check className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    setEditedInfo({ ...editedInfo, address: userInfo.address })
                    handleEditToggle('address')
                  }}
                  className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                  title="Cancel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleEditToggle('address')}
                className="p-2 text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg cursor-pointer transition-colors self-end mb-1"
                title="Edit"
              >
                <Edit3 className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* DOB */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4 flex-1">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div className="flex-1 mr-2">
                <p className="text-sm text-gray-500">Date of Birth</p>
                {editMode.dateOfBirth ? (
                  <input
                    type="date"
                    value={editedInfo.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="font-medium text-gray-900 mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                ) : (
                  <p className="font-medium text-gray-900 mt-1">
                    {userInfo.dateOfBirth ? new Date(userInfo.dateOfBirth).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : 'Not set'}
                  </p>
                )}
              </div>
            </div>
            {editMode.dateOfBirth ? (
              <div className="flex gap-2 self-end mb-1">
                <button
                  onClick={() => handleSave('dateOfBirth')}
                  className="p-2 text-white bg-teal-600 hover:bg-teal-700 rounded-lg cursor-pointer transition-colors"
                  title="Save"
                >
                  <Check className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    setEditedInfo({ ...editedInfo, dateOfBirth: userInfo.dateOfBirth })
                    handleEditToggle('dateOfBirth')
                  }}
                  className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                  title="Cancel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleEditToggle('dateOfBirth')}
                className="p-2 text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg cursor-pointer transition-colors"
                title="Edit"
              >
                <Edit3 className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  // ------------------------------------------------
  // PAYMENT TAB
  // ------------------------------------------------

  const renderPaymentContent = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
            <p className="text-gray-500 mt-1">Manage your saved payment methods</p>
          </div>

          <Link to="/payment-method">
            <button className="flex items-center lg:gap-2 gap-0.5 lg:px-6 lg:py-3 px-3 py-1.5 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium lg:text-2xl text-sm">
              <Plus className="w-5 h-5" /> Add Card
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {paymentMethods.map((payment) => (
            <div key={payment.id} className="relative">
              <div className={`relative ${getCardGradient(payment.cardType)} rounded-2xl p-6 shadow-2xl overflow-hidden`}>

                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    {getCardLogo(payment.cardType)}

                    {payment.isDefault && (
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Star className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                        <span className="text-xs text-white font-medium">Default</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="w-12 h-9 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-md shadow-lg"></div>
                  </div>

                  <div className="flex items-center gap-3 text-white text-xl font-mono tracking-wider mb-6">
                    <span>••••</span>
                    <span>••••</span>
                    <span>••••</span>
                    <span className="font-semibold">{payment.cardNumber}</span>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/60 text-xs">Card Holder</p>
                      <p className="text-white font-semibold text-sm">
                        {payment.nameOnCard}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-white/60 text-xs">Expires</p>
                      <p className="text-white font-semibold text-sm">{payment.expiryDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                {!payment.isDefault && (
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Set Default
                  </button>
                )}
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium">
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <Globe className="w-4 h-4" />
                <span>{payment.country}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // ------------------------------------------------
  // BOOKING HISTORY TAB
  // ------------------------------------------------

  const renderHistoryContent = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Booking History</h2>

        <div className="space-y-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Plane className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {booking.departureAirport} → {booking.arrivalAirport}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Booking Reference:
                      <span className="font-medium text-gray-700"> {booking.bookingReference}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xl font-bold text-teal-600">
                    ${booking.totalAmount} {booking.currency}
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Confirmed
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Flight</div>
                  <div className="font-semibold text-gray-900">{booking.flightNumber}</div>
                  <div className="text-sm text-gray-600">{booking.airline}</div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Departure</div>
                  <div className="font-semibold text-gray-900">
                    {new Date(booking.departureTime).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    {new Date(booking.departureTime).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Passenger</div>
                  <div className="font-semibold text-gray-900">
                    {booking.passenger.firstName} {booking.passenger.lastName}
                  </div>
                  <div className="text-sm text-gray-600">{booking.passenger.email}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  Booked on{' '}
                  {new Date(booking.bookingDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors text-sm font-medium">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )

  // ------------------------------------------------
  // SETTINGS TAB
  // ------------------------------------------------

  const renderSettingsContent = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>

        <div className="space-y-4">

          <div className="flex items-center justify-between py-3 border-b border-gray-100 mr-4">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-500">Receive booking updates and offers</p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
            </div>
            <button className="px-4 py-2 text-sm text-gray-300 font-medium">
              Enable
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">Language & Region</p>
                <p className="text-sm text-gray-500">English (US)</p>
              </div>
            </div>

            <button className="px-4 py-2 text-sm text-gray-300 font-medium">
              Change
            </button>
          </div>

        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Danger Zone</h2>

        <div className="space-y-4">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>

          <div className="border-t border-gray-200 pt-4">
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
              <Trash2 className="w-5 h-5" />
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  // ------------------------------------------------
  // MAIN RETURN
  // ------------------------------------------------

  return (
    <div className="min-h-screen bg-gray-50 mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="bg-white shadow-sm border border-gray-200 rounded-2xl mb-8">
          <div className="px-6 py-4">
            <nav className="flex space-x-6 sm:space-x-8 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${activeTab === 'profile'
                    ? 'bg-teal-100 text-teal-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                <User className="w-4 h-4" /> Profile
              </button>

              <button
                onClick={() => setActiveTab('history')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${activeTab === 'history'
                    ? 'bg-teal-100 text-teal-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                <History className="w-4 h-4" /> History
              </button>

              <button
                onClick={() => setActiveTab('payment')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${activeTab === 'payment'
                    ? 'bg-teal-100 text-teal-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                <CreditCard className="w-4 h-4" /> Payment
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${activeTab === 'settings'
                    ? 'bg-teal-100 text-teal-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                <Settings className="w-4 h-4" /> Settings
              </button>

            </nav>
          </div>
        </div>

        {activeTab === 'profile' && renderProfileContent()}
        {activeTab === 'history' && renderHistoryContent()}
        {activeTab === 'payment' && renderPaymentContent()}
        {activeTab === 'settings' && renderSettingsContent()}

      </div>
    </div>
  )
}

export default Account
