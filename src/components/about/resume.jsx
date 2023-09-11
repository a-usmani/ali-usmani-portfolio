export default function Resume(){
    return(
        <div>
            <a 
            href={"/Ali-Usmani-Resume.pdf"}
            download={true}
            target="_blank"
            rel="noreferrer">
                <div 
                    className="relative mt-8 overflow-hidden border-[5px] border-black text-black text-4xl font-bold p-3 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_rgba(37,144,235,1)]">
                    RESUME
                    <img src="gray-dots-full.png" className="absolute rotate-[135deg] top-0 left-16 -z-50" ></img>
                </div>
            </a>
        </div>
    )
}