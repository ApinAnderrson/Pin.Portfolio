import { Folder, Star, User } from "lucide-react";

export default function Navbar(){
    return(
        <nav className="fixed top-0 bg-red-500 h-18 w-screen z-999">
            <div>
                <div>
                    <div className="flex gap-3 items-center">
                        <Star className="w-6 h-6"/> 
                        <p className="text-xl">Home</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <User className="w-6 h-6"/> 
                        <p className="text-xl">About</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Folder className="w-6 h-6"/> 
                        <p className="text-xl">Portfolio</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}