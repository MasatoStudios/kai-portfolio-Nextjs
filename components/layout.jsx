import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'


const layout = ({ children }) => {
    return (
        <>
            
            <main>{children}</main>
        </>
    )
}

export default layout
