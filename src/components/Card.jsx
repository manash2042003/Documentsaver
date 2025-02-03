import React from 'react'
import { AiOutlineFileText } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { motion } from "motion/react"

const Card = ({data,reference}) => {
  return (
    <motion.div drag  dragConstraints={reference}
    whileDrag={{scale:1.1 }}
    dragElastic={0.1}
    dragTransition={{bounceStiffness:100,bounceDamping:30}}
    className='relative flex -shrinkw-60 h-72   rounded-[45px] bg-zinc-900/90  text-white py-10 px-8 overflow-hidden'>
        <AiOutlineFileText/>
     
    <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p> 
    <div className='footer absolute bottom-0 w-full left-0'>
    <div className='flex items-center justify-between mb-3 py-3 px-8'>
        <h5>{data.filesize}</h5>
        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
           {data.close?<FaRegFolderClosed/>: <FiDownload size=".7em" color='#fff'/>}
           
        </span>
    </div>
    {
        data.tag.isOpen&&(
            <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
       <h3 className='text-sm font-semibold  '>{data.tag.tagTitle}</h3></div>

        )
    }
    
    
</div>
         </motion.div> 
  )
}

export default Card