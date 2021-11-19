import { useState } from "react";
import "./index.css"

function Dropdown({options, prompt, value, onChange, curVal}) {
    const [open, setOpen] = useState(false);
    
    return (
        <div classname="dropdown">
            <div 
                classname="control" 
                onClick={(e) => setOpen(!open)}
                >
                    {value ? value.symbol : prompt}
                    <span classname="arrow"></span>
            </div>
           {open && (
            <div className="options"> 
            {options.currencies.map((option) => (
                    <div 
                    onClick={(e) => {
                        onChange(option)
                        setOpen(false)
                    }
                }className="selected-value"
                    >{option.symbol}</div>
                    ))}
            </div>
                )}
        </div>
    )
}

export default Dropdown