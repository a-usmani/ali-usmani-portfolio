import BackgroundSquaresHome from "./background-square-home";

export default function Intro(){
    return(
    <>
        <div className="col-span-3 lg:col-span-2 bg-gradient-to-r from-blue-600 from-40% to-blue-500">
            <div className=" flex flex-col  justify-center h-screen mx-32 ">
                <div className="max-w-screen-lg relative ">
                    <div className="relative">
                        <img src="bird1.png" className="absolute -top-9 left-52  w-48 z-50" />
                        <h1 className="font-kanit text-white text-7xl font-bold items-center drop-shadow-lg">Ali Usmani</h1>
                    </div>
                </div>
                <div>
                    <p className=" items-center text-2xl">Frontend Developer.</p>
                </div>
            </div>
        </div>
    </>
    )
}