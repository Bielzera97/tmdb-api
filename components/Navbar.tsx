import Image from "next/image"
import { Input } from "./ui/input"
import { SearchIcon } from "lucide-react"
import DarkToggle from "./DarkToggle"

const Navbar = () => {
    return(
        <nav className="w-full flex justify-between">
            <Image src={"/"} alt="Logo" width={100} height={50}/>
            <section className="flex items-center">
                <Input type="search" placeholder="Search..."/>
                <SearchIcon/>
            </section>
            <DarkToggle/>
        </nav>
    )
}


export default Navbar