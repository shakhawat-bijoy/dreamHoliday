import { Plane, Building2 } from 'lucide-react'
import Container from './Container'
import Button from './Buttton'
import Image from './Image'
import logoImage from '../../assets/images/navLogo.png'
import { Link } from 'react-router'

const Navbar = () => {

    return (

        <nav className="absolute top-5 left-0 right-0 z-50 bg-transparent">
            <Container className='px-2'>
                <div className="relative z-10 flex items-center justify-between py-4">
                    {/* Left Side - Navigation Tabs */}
                    <div className="flex items-center gap-4">

                        <Link to={'/'} className='flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300'>

                            <Plane className="w-4 h-4 text-white" />
                            <span className="text-white">Find Flights</span>

                        </Link>

                        <Link to={'/'} className='flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300'>

                            <Building2 className="w-4 h-4 text-white" />
                            <span className="text-white">Find Stays</span>

                        </Link>
                    </div>

                    {/* Center - Logo */}
                    <div className="flex items-center space-x-2">
                        <Image
                            to={'/'}
                            src={logoImage}
                            alt="Dream Holidays"
                            className="h-8 w-auto"
                        />

                    </div>

                    {/* Right Side - Auth Buttons */}
                    <div className="flex items-center space-x-3">
                        <Button
                            text="Login"
                            to="/login"
                            className="text-white hover:text-black hover:bg-white font-medium px-4 py-2 transition-all duration-500 rounded-lg"
                        />

                        <Button
                            text="Sign up"
                            to="/register"
                            className="text-white hover:text-black hover:bg-white font-medium px-4 py-2 transition-all duration-500 rounded-lg"
                        />
                    </div>
                </div>


            </Container>
        </nav>
    )
}

export default Navbar