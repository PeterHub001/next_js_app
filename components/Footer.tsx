import { footerLinks } from "@constants"
import Image from "next/image"
import logo from "../public/logo.svg"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="flex flex-col  text-black-100 mt-5 border-t border-gray-100 ">
        <div className="flex w-full max-w-[1200px] max-md:flex-col sm:px-16 px-6 py-10 flex-wrap">
            <div className="flex flex-col justify-start items-start gap-6">
                <Image src={logo} alt="footer-logo" width={118}
            height={18}
            className='object-contain' />
                <p className="text-base text-gray-700">CarHub2025 <br /> All Right Reserved &copy;</p>
            </div>
            <div className="footer__links">
                {footerLinks.map((link) => ( <div key={link.title} className="footer__link font-bold">
                <h3>{link.title}</h3>
                {link.links.map((item) => (
                <Link 
                key={item.title}
                href={item.url}
                className="text-gray-500"
                >
                    {item.title}
                </Link>
                ))}
                </div>
                ))}
            </div>
            
            
        </div>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                <p>@2025 CarHub. All Rights Reserved</p>
                <div className="footer__copyrights-link">
                    <Link href="/" className="text-gray-500">Privacy policy
                    </Link>
                    <Link href="/" className="text-gray-500">Terms of use
                    </Link>
                </div>
            </div>
    </footer>
  )
}

export default Footer