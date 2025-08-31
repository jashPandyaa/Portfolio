import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'

const Projects = () => {
  return (
    //Give font white
    <div className='py-20' id="projects">
        <h1 className='heading text-slate-100'>
            A small selection of my {" "}
            <span className='text-purple'>
                Recent Projects
            </span>
        </h1>
        <div className='flex flex-wrap  items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({
                id,
                title,
                des,
                img,
                iconLists,
                link,
             }) => (
                <div className='sm:h-[41rem] lg:min-h-[32.5] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] text-white' key={id}>
                    <PinContainer title={link} href={link}> 
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                                <img src={img} alt={title} className='z-10 absolute bottom-0'/>
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-slate-300'>
                            {des}
                        </p>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon , index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center ' style={{
                                        transform: `translateX(-${5 * index * 2}px)`}}> 
                                        <img src={icon} alt={icon} className='p-2' style={{ 
                                             filter: icon.includes('next.svg') ? 'invert(1)' : 'invert(0)' 
                                         }} />
                                    </div>
                                ))}
                                <div className='flex justify-center items-center ms-3 text-purple font-bold lg:text-lg text-sm'>
                                    <p className=' text-purple'>Check Live Site</p>
                                    <FaLocationArrow className='ms-3' color='#CBACF9'/>
                                </div>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects