import Pages from "./pages";

export default function SideImage(props){
    return (
        <div className="hidden lg:block relative grid-span-1 col-span-1 bg-white">
            
            <div className="absolute top-0 left-2">
                    <Pages scrollTo={props.scrollTo} sections={props.sections}/>
                    </div>   
            <img src="Untitled3.png" className="ml-auto h-full"/>
        </div>
    )
}