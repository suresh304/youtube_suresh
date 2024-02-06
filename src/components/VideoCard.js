import React from "react";

const VideoCard = ({ info ,calledFrom}) => {
  console.log(info, "infooooooooooooooooooooooo",calledFrom);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(thumbnails);

  return calledFrom==="searchRes"?<div className="w-[100%] rounded-lg shadow-lg mx-10 my-2 flex">
  <img
    src={thumbnails?.high?.url}
    alt="thumbnail"
    className="mr-10 h-[200px] w-auto rounded-lg"
  />
  <div>
    <h1 className="text-xl pb-5 pt-2">{title}</h1>
    <p>{channelTitle}</p>
    <p className="text-gray-600"> {snippet?.description}</p>
    <p className="text-gray-400">
      Views{statistics?.viewCount} PublishedOn{""}
    </p>
  </div>
</div>:<div className='w-[360px] rounded-lg shadow-lg m-2'>
        <img src={thumbnails?.high?.url} alt='thumbnail' className='h-[200px] w-[340px] rounded-lg'/>
        <h1 className='text-xl'>{title}</h1>
        <p>{channelTitle}</p>
        <p className='text-gray-400'>Views{statistics?.viewCount} PublishedOn{""}</p>
    </div>
  // return (
  //   <div className='w-[360px] rounded-lg shadow-lg m-2'>
  //       <img src={thumbnails?.high?.url} alt='thumbnail' className='h-[200px] w-[340px] rounded-lg'/>
  //       <h1 className='text-xl'>{title}</h1>
  //       <p>{channelTitle}</p>
  //       <p className='text-gray-400'>Views{statistics?.viewCount} PublishedOn{""}</p>
  //   </div>

  //   <div className="w-[100%] rounded-lg shadow-lg mx-10 my-2 flex">
  //     <img
  //       src={thumbnails?.high?.url}
  //       alt="thumbnail"
  //       className="mr-10 h-[200px] w-auto rounded-lg"
  //     />
  //     <div>
  //       <h1 className="text-xl pb-5 pt-2">{title}</h1>
  //       <p>{channelTitle}</p>
  //       <p className="text-gray-600"> {snippet?.description}</p>
  //       <p className="text-gray-400">
  //         Views{statistics?.viewCount} PublishedOn{""}
  //       </p>
  //     </div>
  //   </div>
  // );
};

export default VideoCard;
