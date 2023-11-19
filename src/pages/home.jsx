import Bouncing from "../components/bouncing";
import Intro from "../components/home/intro";
import Pages from "../components/home/pages";
import SideImage from "../components/home/side-image";


export default function Home(props){
    return(
    <div className="relative lg:min-h-[800px] lg:h-screen  mx-auto  ">
        <div className=" grid grid-cols-3 gap-4  ">
            <Intro />
            <SideImage scrollTo={props.scrollTo} sections={props.sections}/>
        </div>
        <div className="text-2xl text-white  font-bold absolute bottom-20 left-0 right-0 flex items-center justify-center max-lg:hidden">
            <button onClick={() => props.scrollTo(props.refer)} className="[&>*]:fill-white" >
                ABOUT ME <Bouncing/>
            </button>
        </div>
    </div>
    )
}