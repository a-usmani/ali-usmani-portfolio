export default function Skill(props){
    return(
        <div className="flex flex-col text-center items-center justify-between">
            <button  className={` flex group relative  hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] rounded-full w-36 h-36 bg-blue-700 hover:scale-110 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0)]  hover:bg-orange-400 transition ease-in-out delay-150 [&>*]:transition [&>*]:ease-in-out [&>*]:delay-150`} onClick={() => props.updateDesc(props.icon,props.desc)}>
                {props.icon}
            </button>
            <h1 className="text-3xl text-orange-100 font-bold mt-3">{props.name}</h1>
        </div>
    )
}