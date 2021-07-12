import { Children, cloneElement, useCallback, useState } from "react";
import paneModule from '../css/pane.module.css'

function FocusPane(props:any){
    const [inFocus,setInFocus] = useState(false)

    const click_handler = useCallback(() => setInFocus(x =>!x)  ,[]);


    const child = Children.only(props.children);

    const childCopy = cloneElement(child,{onClick:click_handler})

    
    return inFocus ? <div className={paneModule.pane} onClick={click_handler}>
            {childCopy}
        </div> : childCopy
    
    

}

export default FocusPane