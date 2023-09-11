import Bouncing from "../components/bouncing";
import Intro from "../components/home/intro";
import SideImage from "../components/home/side-image";


export default function Home(props){
    return(
    <div className="relative   mx-auto h-screen ">
        <div className=" grid grid-cols-3 gap-4  ">
            <Intro />
            <SideImage />
        </div>
        <div className="text-2xl text-white  font-bold absolute bottom-20 left-0 right-0 flex items-center justify-center max-lg:hidden">
            <button onClick={() => props.scrollTo(props.refer)} className="[&>*]:fill-white" >
                ABOUT ME <Bouncing/>
            </button>
        </div>
    </div>
    )
}