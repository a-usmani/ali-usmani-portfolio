import ProjectsSlider from "../components/projects/projects-slider";
import ProjectsTab from "../components/projects/projects-tab";
import projectData from '../components/projects/projects-data'
import { useState } from "react";
import Bouncing from "../components/bouncing";

export default function Projects(props){
    const [activeProject, setActiveProject] = useState(projectData.data.projects[0])

    return(
        <div className=" lg:min-h-[800px] lg:h-screen w-full flex relative max-lg:my-16" >
            <div className="max-lg:flex-col lg:absolute bottom-0 lg:grid grid-cols-2 gap-4">
                <div className="flex items-center w-full mx-auto">
                    <ProjectsTab setActiveProject={setActiveProject}/>
                </div>
                <div className="flex items-center w-full mx-auto">
                    <ProjectsSlider project={activeProject}/>
                </div>
            </div>
            <div className="text-2xl  font-bold absolute bottom-20 left-0 right-0 flex items-center justify-center max-lg:hidden">
                <button onClick={() => props.scrollTo(props.refer)}>
                    CONTACT ME <Bouncing/>
                </button>
            </div>
        </div>
    )
}