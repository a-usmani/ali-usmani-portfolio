import BackgroundSquaresAbout from "../components/about/background-squares-about";
import Resume from "../components/about/resume";
import Socials from "../components/about/socials";
import Bouncing from "../components/bouncing";

export default function About(props){
    return (
        <div className=" lg:min-h-[800px] lg:h-screen max-lg:my-20 lg:mx-16 flex ">
            <div className="flex flex-col  items-center justify-center  mx-auto " id="about">
                <div className="lg:grid lg:grid-cols-3 lg:gap-4 flex flex-row max-lg:flex-col">
                    <div className="lg:col-span-2 max-lg:items-center max-lg:mb-20 flex flex-col  justify-center ">
                        <h1 className=" text-5xl text-blue-600 font-bold font-lexend-mega items-center">About Me</h1>
                        <p className="my-8 text-[22px] w-3/4 max-md:mx-auto items-center">I am a developer and designer that has a passion for creating new projects pertaining to full-stack development and engineering systems. I am always eager to explore any new opportunties that challenge me. Currently, I am a third year studying Computer Engineering (Co-op) at Toronto Metropolitan University and have over a year of experience working as a maintenance technician at YMCA. I am determined to improve my skills and implement solutions at any given opportunity. Please feel free to reach out! </p>
                        <Socials/>
                    </div>
                    <div className=" lg:col-span-1 relative">
                        <div className="flex flex-col h-full items-center justify-center w-[400px] mx-auto md:mr-auto">
                            <div className="relative">
                                <img src="DSC_0145.jpg" className="w-88 h-auto" />
                                <div>
                                <img src="bird2.png" className="absolute -top-[68px] left-52  w-60 z-50" />

                                </div>
                            </div>                           
                            <Resume/>
                        </div>
                    </div>
                </div>
                
                <div className="text-2xl font-bold flex items-center justify-center max-lg:hidden mt-8 ">
                    <button onClick={() => props.scrollTo(props.refer)} className="">
                        SKILLS <Bouncing/>
                    </button>
                </div>
            </div>
        </div>
    )
}