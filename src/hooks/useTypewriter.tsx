import { useEffect, useState } from "react";

function useTypewriter(str:string,speed=50,clearText=false) :string{
    const [interString,setInterString] = useState(str.slice(0,1));

    const [charsWritten,setCharsWritten] = useState(1);

    const [movingForward,setMovingForward] = useState(true);

    useEffect(() =>{

        const handle = setTimeout(() =>{
            setInterString(str.slice(0,charsWritten));
            if (!(interString.length === str.length)){

                if (movingForward){
                    setCharsWritten(n => n+1);
                }else{
                    if (clearText){
                        if (!(interString === '')){
                            setCharsWritten(n => n === 0 ? 0 : n-1);
                        }
                    }
                }
            }else{

                if (clearText){
                    setMovingForward(false);
                    setCharsWritten(n => n-1);
                }
                
                
            }    
        },speed);

        return () => clearTimeout(handle);
        
    },[charsWritten,movingForward])

    return interString;
}

export default useTypewriter;