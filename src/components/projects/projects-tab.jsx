import projectData from './projects-data'

export default function ProjectsTab(props){

    const projects = projectData.data.projects
    return(
        <div className="heloo col-span-1  lg:h-[90vh] w-screen lg:ml-16" >
            
            <div className="flex flex-col   justify-between  text-slate-500 w-5/6 max-lg:mx-auto">
                <div className="flex flex-row ">
                    <h1 className=" titles font-lexend-mega text-5xl font-bold mr-auto">Projects</h1>
                    <p className="text-3xl text-slate-400 font-bold flex text-center items-center">{projects.length}</p>
                </div>
                {projects?.map((project) => {
                    return(
                        <div key={project.id} className=" flex flex-col justify-between ">
                            <hr className='w-full my-6'/>
                            <button onClick={() => props.setActiveProject(project)} className='text-left flex flex-row relative w-full h-full overflow-hidden group '>
                                <div className='arrow flex flex-row mr-auto  -translate-x-4 group-hover:translate-x-0 transition ease-in-out'>
                                    <svg className="w-4 stroke-slate-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    <h1 className="titles font-lexend-mega text-xl font-bold ">{project.name}</h1>
                                </div>
                                <p className="text-lg text-slate-400 font-bold flex items-center">{project.tag}</p>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}