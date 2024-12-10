import Image from "next/image"
import { Input } from "./ui/input"
import { SearchIcon } from "lucide-react"
import DarkToggle from "./DarkToggle"
import Link from "next/link"

const Navbar = () => {
    return(
        <nav className="w-full flex justify-between px-5 py-3">
            <Link href={"/"}><Image src={"/logo-rater.png"} alt="Logo" width={150} height={50}/></Link>
            <section className="flex items-center border-[1px] px-5 rounded-3xl">
            <button className="bg-background botao rounded-full p-2"><SearchIcon className=""/></button>               
            <Input type="search" placeholder="Search..."/>
            </section>
            <DarkToggle/>
        </nav>
    )
}


export default Navbar