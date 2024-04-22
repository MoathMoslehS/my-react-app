import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
const Rand = ({ inputValue }) =>{
    console.log(inputValue);
           const [shortenLink, setShortenLink] = useState("shortened link");
           const [copied, setCopied] = useState(false);

    return(
        <div className="result" >
           <p>{shortenLink}</p>
           <CopyToClipboard 
           text={shortenLink}
           onCopy={() => setCopied(true)}

           >

           <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
           </CopyToClipboard>
          
        </div>
    
           
       
    
    
    );
    
    
    
    }
    export default Rand