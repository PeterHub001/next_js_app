import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.svg"
const Footer = () => {
  return (
    <footer className="flex">
        <div className="flex gap-10">
            <div>
                <Image src={logo} alt="footer-logo" width={118}
            height={118}
            className='object-contain' />
                <p>CarHub2025</p>
                <p>All Right Reserved @</p>
            </div>
            <ul>
                <li className="font-bold">About</li>
                <li>How it works</li>
                <li>feature</li>
                <li>partnership</li>
                <li>Business Relation</li>
            </ul>
            <ul>
                <li className="font-bold">About</li>
                <li>How it works</li>
                <li>feature</li>
                <li>partnership</li>
                <li>Business Relation</li>
            </ul>
            <div>
            <ul>
                <li className="font-bold">About</li>
                <li>How it works</li>
                <li>feature</li>
                <li>partnership</li>
                <li>Business Relation</li>
            </ul>
            <ul>
                <li className="font-bold">About</li>
                <li>How it works</li>
                <li>feature</li>
                <li>partnership</li>
                <li>Business Relation</li>
            </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer