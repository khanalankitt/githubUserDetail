import Image from "next/image";
import { res } from "./box";
export default function User(){
    return(
        <>
            <div className="user">
                <div className="photo">
                    <Image 
                        src={res.avatar_url}
                        alt="user" 
                        width="100"
                        height="100"
                    />        
                </div>
                <div className="info">
                </div>
            </div>
        </>
    );
}