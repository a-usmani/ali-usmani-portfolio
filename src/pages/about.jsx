import BackgroundSquaresAbout from "../components/about/background-squares-about";
import Resume from "../components/about/resume";
import Socials from "../components/about/socials";
import Bouncing from "../components/bouncing";

export default function About(props){
    return (
        <div className="relative max-lg:my-20 lg:mx-16">
            <div className="flex lg:h-screen   mx-auto " id="about">
                <div className="lg:grid lg:grid-cols-3 lg:gap-4 flex max-lg:flex-col">
                    <div className="lg:col-span-2 max-lg:items-center max-lg:mb-20 flex flex-col  justify-center ">
                        <h1 className=" text-5xl text-blue-600 font-bold font-lexend-mega items-center">About Me</h1>
                        <p className="my-8 text-[22px] w-3/4 max-md:mx-auto items-center">I am a developer and designer that has a passion for creating new projects pertaining to full-stack development, object oriented programming, and digital systems; Although I am always eager to explore any new opportunties that challenge me. Currently, I am a third year studying Computer Engineering (Co-op) at Toronto Metropolitan University. Along with my techincal skills, I have over a year of experience working as a maintence technician at YMCA which demonstrates my commitment to working hard and continuous learning. I am committed to improving my skills given any opportunity, so feel free to reach out!</p>
                        <Socials/>
                    </div>
                    <div className=" lg:col-span-1 relative">
                        <div className="relative flex flex-col h-full items-center justify-center w-[400px] mx-auto md:mr-auto">
                            <img src="DSC_0145.jpg">
                            </img>
                            <img src="bird2.png" className="absolute -top-[68px] lg:top-[118px] left-52  w-60 z-50" />
                            <Resume/>
                        </div>
                    </div>
                </div>
                
                <div className="text-2xl font-bold absolute bottom-20 left-0 right-0 flex items-center justify-center max-lg:hidden">
                    <button onClick={() => props.scrollTo(props.refer)} className="">
                        SKILLS <Bouncing/>
                    </button>
                </div>
            </div>
        </div>
    )
}