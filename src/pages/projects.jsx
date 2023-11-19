import ProjectsSlider from "../components/projects/projects-slider";
import ProjectsTab from "../components/projects/projects-tab";
import projectData from '../components/projects/projects-data'
import { useState } from "react";
import Bouncing from "../components/bouncing";

export default function Projects(props){
    const [activeProject, setActiveProject] = useState(projectData.data.projects[0])

    return(
        <div className=" lg:min-h-[800px] lg:h-screen w-full flex flex-col items-center justify-center  mx-auto max-lg:my-16" >
            
                <div className="flex-col  lg:grid grid-cols-2 gap-4">
                    <div className="flex  w-full mx-auto">
                        <ProjectsTab setActiveProject={setActiveProject}/>
                    </div>
                    <div className="flex  w-full mx-auto">
                        <ProjectsSlider project={activeProject}/>
                    </div>
                </div>
            <div className="text-2xl font-bold flex items-center justify-center max-lg:hidden mt-8 ">
                <button onClick={() => props.scrollTo(props.refer)}>
                    CONTACT ME <Bouncing/>
                </button>
            </div>
        </div>
    )
}