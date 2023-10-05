export default function Header(props) {
    return (
        <header className=" absolute lg:fixed h-20 z-50 flex items-center  ">
            <button onClick={() => props.scrollTo(props.refer)}>
                <img src='bird3.png' className="w-32 " />
            </button>
        </header>
    )
}