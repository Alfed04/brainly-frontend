// import { CrossIcon } from "../icons/CrossIcon";
// import Button from "./Button";

import { CrossIcon } from "../icons/CrossIcon";
import Button from "./Button";

export function CreateContentModal({open,onClose}){
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
                        <Input placeholder="Title"/>
                        <Input placeholder="Link"/>
                    </div>
                    <div className="flex justify-center">
                    <Button variant="primary"  text="Submit"/>
                    </div>
                </span>
            </div>
            
        </div>}
    </div>
}

function Input({onChange,placeholder}:{onChange:()=>void,placeholder:string}){
    return <div>
        <input placeholder={placeholder} type="text" className="px-4 py-2 rounded border m-2" />
    </div>
}