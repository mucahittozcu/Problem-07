import Image from 'next/image'

// imageSrc ve name öğelerini prop olarak geçirin
function Avatar(props) {

   return (
     <div className='group block p-8 flex-shrink-0 space-y-14 '>
       <div className='flex items-center'>
         <div>
           <Image
             className='inline-block h-12 w-12 rounded-full'
             src={props.src}
             alt=''
             width={500}
             height={500}
           />
         </div>
         <div className='ml-3'>
           <p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>
             {props.name}
           </p>
           <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
             {props.profileText}
           </p>
         </div>
       </div>
       <div className='flex items-center'>
         <div>
           <Image
             className='inline-block h-12 w-12 rounded-full'
             src={props.src}
             alt=''
             width={500}
             height={500}
           />
         </div>
         <div className='ml-3'>
           <p className='text-base font-medium text-black-900 group-hover:text-black-900'>
             {props.name1}
           </p>
           <p className='text-sm font-medium text-black-500 group-hover:text-black-700'>
             {props.profileText}
           </p>
         </div>
       </div>
     </div>
   )

}

export default function App() {
  return <Avatar profileText='Profile bakın' name1={"John Cook"} src={'/photo.png'} name={"Tom Cook"} />
}


// <>
// <link href="path/to/tailwind.css" rel="stylesheet"></link>
// <div className='group block p-8 flex-shrink-0'>
//   <div className= "flex items-center">
//     <div>
//       <Image
//         className='inline-block h-12 w-12 rounded-full'
//         src={props.src}
//         alt=''
//         width={500}
//         height={500}
//         />
//    <div className=' '>

//     <div className='ml-16  '>
//     <p className=' text-base font-medium text-gray-700 group-hover:text-gray-900'>
//         {props.name}
//       </p>
//       <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
//         {props.profileText}
//       </p>
//     </div>
//     </div>
//     <div className=''>
//       <Image
//         className=' inline-block h-12 w-12 rounded-full'
//         src='/photo.png'
//         alt=''
//         width={500}
//         height={500}
//         />
        
//     <div className='ml-16 '>
//       <p className=' text-base font-medium text-black-900 group-hover:text-black-900'>
//         {props.name1}
//       </p>
//       <p className='text-sm font-medium text-black-500 group-hover:text-black-900'>
//         {props.profileText}
//       </p>
//     </div>
//     </div>
//    </div>
//   </div>
// </div>
//         </>