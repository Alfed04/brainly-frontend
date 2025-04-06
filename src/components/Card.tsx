import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/ShareIcon";

export function Card({title , link , type }:{
    title: string,
    link: string,
    type: "twitter"|"youtube"
}){
    function deleteContent(){
        console.log("Delete function called")
    }
    
    return <div>
     <div className="p-4 bg-white rounded-md border-gray-200 border max-w-72 min-w-72 min-h-64">
        {/* card topbar */}
        <div className="flex justify-between">
            <div className="flex items-center text-md">
                <div className=" text-gray-500 pr-2">
                    <a href={link} target="_blank">
                        <ShareIcon/>
                    </a>
                </div>
                {title}
            </div>
            <div className="flex items-center text-gray-500">
                <div className="pr-2">
                    <ShareIcon/>
                </div>
                <div className="hover:cursor-pointer">
                <DeleteIcon deleteContent={deleteContent}/>
                </div>
            </div>
        </div>

        {/* youtube video or tweet  */}

        <div className="pt-4">
            
            {type === "youtube" &&  <iframe className="w-full" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        
            {type === 'twitter' && 
            <blockquote className="twitter-tweet">
            <a href={link.replace("x.com",'twitter.com')}></a> 
            {/* https://x.com/ALFEDkhan04/status/1908438637051519301 */}
            </blockquote>}
           
        </div>




     </div>
    </div>
}