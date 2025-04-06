
import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import Button from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType{
    Youtube = "youtube",
    Twitter = 'twitter'
 }

export function CreateContentModal({open,onClose}:{open:Boolean,onClose:()=>void}){
    const titleRef = useRef<HTMLInputElement>()
    const linkRef = useRef<HTMLInputElement>();
    const [type ,setType] = useState(ContentType.Youtube)

    async function addContent(){
        const title = titleRef.current.value
        const link = linkRef.current.value
        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            title,
            link,
            type
        },{
            headers : {
                "token":localStorage.getItem("token")
            }
        })
        onClose()
    }

    return <div>
        {open && <div className="h-screen w-screen bg-slate-500 opacity-70 fixed top-0 left-0 flex justify-center ">

            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon/>
                        </div>
                    </div>
                    <div>
                        <Input reference={titleRef}  placeholder="Title"/>
                        <Input reference ={linkRef} placeholder="Link"/>
                    </div>
                    <div>
                        <div className="flex gap-1 justify-center p-4">
                            <Button text="Youtube" variant={type===ContentType.Youtube?"primary":"secondary"} onClick={()=>setType(ContentType.Youtube)}/>
                            <Button text="Twitter" variant={type===ContentType.Twitter?"primary":"secondary"} onClick={()=>setType(ContentType.Twitter)}/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <Button onClick={addContent} variant="primary"  text="Submit"/>
                    </div>
                </span>
            </div>
            
        </div>}
    </div>
}

