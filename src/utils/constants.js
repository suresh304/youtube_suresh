const GOOGLE_API = process.env.REACT_APP_GOOGLE_API
console.log(GOOGLE_API,">>>>>>>>>><<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>><<<<<<<<<")





export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API;

export const YOUTUBE_SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key="+GOOGLE_API;
  




  






export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


export const COMMENT_DATA = [
  {
    name:"Suresh Alli",
    comment:"this is soo helpful",
    replies:[{
      name:"ramesh Alli",
      comment:"well said",
      replies:[
        {
          name:"einstein",
          comment:"abbachaa well saidddaa!!",
          replies:[
            
          ]
        }
        
      ]
    },{
      name:"amrutha Alli",
      comment:"this is amazing stuff",
      replies:[
        
      ]
    },

    ]
  },
  {
    name:"Amrutha",
    comment:"time waste....",
    replies:[{
      name:"ramesh Alli",
      comment:"u r waste",
      replies:[
        
      ]
    },{
      name:"amrutha Alli",
      comment:"nice info",
      replies:[
        
      ]
    },

    ]
  },
  {
    name:"naresh",
    comment:"this is soo helpful",
    replies:[{
      name:"ramesh Alli",
      comment:"helloo hw are u",
      replies:[
        
      ]
    },{
      name:"amrutha Alli",
      comment:"top notch",
      replies:[
        
      ]
    },

    ]
  }
]
