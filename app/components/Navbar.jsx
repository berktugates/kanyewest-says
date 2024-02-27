import Image from "next/image"
import Logo from "../../public/next.svg"
import Link from "next/link"
export default function Navbar(){
    return(
        <>
            <div className="bg-transparent flex gap-4 justify-around border p-3">
                <Image
                    src={Logo}
                    alt="logo"
                    width={100}
                    height={100}
                />
                <h1 className="font-semibold text-md l:text-lg"><Link href={{pathname:"https://kanye.rest/"}} target="_blank">Kanye West Quotes</Link></h1>
            </div>
        </>
    )
}