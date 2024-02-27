export default function Quotes({quotes}){
    return(
        <>
            <div className="text-2xl l:text-3xl">
                {quotes.quote}
            </div>
        </>
    )
}