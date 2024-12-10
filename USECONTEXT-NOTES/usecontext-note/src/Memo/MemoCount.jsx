



import { memo, useRef } from "react";

const Counts = ()=>{
const renderCount = useRef(0)
console.log(renderCount)
return(
    <>
    <div>
        <p> nothing change on rendring
            <span> {renderCount.current++} time(s)</span>
        </p>
    </div>
    </>
)

}
export default memo(Counts)
