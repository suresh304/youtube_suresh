import React from 'react'

const Comment = (text) => {
    console.log(text,"LLLLLLLLLLLLLLL")
  return (
    <div className='flex my-2 flex-row  bg-slate-200 rounded-md'>
     <img className ="w-8 h-8 mx-4" src="profile_3135715.png" />
     <div>
        <h1 className='font-bold'>{text?.name}</h1>
        <h1 className='text-slate-700 mx-5'>{text?.comment}</h1>
        {text?.replies.map((cmnt,ind)=><Comment {...cmnt}/>)}
     </div>
     
    </div>
  )
}

export default Comment