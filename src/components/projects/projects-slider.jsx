import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay  } from 'swiper/modules';
import { useEffect } from 'react';
import gsap from 'gsap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

export default function ProjectsSlider(props){
    useEffect(() => {
        gsap.fromTo('.waddup', {
            duration: 2,
            opacity: 0,
            ease: "power4",
        }, {
            duration: 2,
            opacity: 1,
            ease: "power4",
        })
    }, [props.project])

    const project = props.project
    return(
        
        <div className="lg:col-span-1 w-full h-full flex flex-col max-lg:my-8 waddup">

            
            {!project?.slides ? <div className="w-full "></div> :
                <Swiper
                    className=" w-[83.3333333vw] h-1/2  lg:w-5/6"
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={50}
                    loop={true}
                    navigation
                    slidesPerView={1}
                    autoplay={{delay:3500}}
                    pagination={{ clickable: true }}
                >
                    {project.slides?.map((slide) => {
                        return(
                            <SwiperSlide key={slide}>
                                <img src={slide} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                
            }
            {project?.github ? <div className="h-1/2 w-5/6  flex flex-col [&>*]:mt-4 mx-auto">
                <div className="flex flex-row [&>*]:mr-4">
                    <a href={project.github} target="_blank">
                        <button  className="border-4 group border-blue-600 rounded-full w-20 h-20 hover:scale-105 hover:bg-blue-600 transition ease-in-out delay-150" >
                            <svg className="w-14 fill-blue-600 group-hover:fill-white items-center mx-auto my-auto transition ease-in-out delay-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </button>
                    </a> {project.link ?
                    <a href={project.link} target="_blank">
                        <button  className="border-4 group border-blue-600 rounded-full w-20 h-20 hover:scale-105 hover:bg-blue-600 transition ease-in-out delay-150">
                        <svg className="w-14 stroke-blue-600 group-hover:stroke-white items-center mx-auto my-auto transition ease-in-out delay-150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
                        </button>
                    </a> : <div className='w-14 mx-auto my-auto '></div>}
                </div>
                <p className="text-xl text-slate-500 font-bold">
                    {project.desc}
                </p>
            </div> : <div className='h-1/2 w-5/6 mx-auto'></div>}
        </div>
    )
}