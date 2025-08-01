import React, {useId} from 'react'

function Select({
    label , 
    options ,
    className = ' ',
    ...props 
}, ref)  {
      const id = useId();
  return (
  
    <div>
        {label && <label htmlFor={id} className=''></label>}
        <select  id={id} 
           {...props}            ref={ref} 
           className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} >
           
           {options ?.map((option)=>(
                 <option value={option} key={option}>{option}</option>
            ))}
            </select>
    </div>
  )
}

export default React.forwardRef(Select)