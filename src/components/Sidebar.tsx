import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="h-screen w-72 bg-white fixed top-0 left-0 border pl-6">
        <div className="flex text-2xl pt-8 items-center ">
            <div className="pr-2 text-purple-600">
                <Logo/>
            </div>
          Brainly 
        </div>
        <div className="pt-4 pl-4">
            <SidebarItem icon={<TwitterIcon/>} text="Twitter"/>
            <SidebarItem icon={<YoutubeIcon/>} text="Youtube"/>
        </div>
    </div>
}