import Image from "next/image";
import { res } from "./box.js";
export default function User(){
    let result = res;
    return(
        <>
            <div className="user">
                <div className="photo">
                    <Image 
                        src={result.avatar_url}
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