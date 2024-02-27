import Image from "next/image"
import Logo from "../../public/next.svg"
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
                <h1 className="font-semibold text-lg">Kanye West Quotes</h1>
            </div>
        </>
    )
}