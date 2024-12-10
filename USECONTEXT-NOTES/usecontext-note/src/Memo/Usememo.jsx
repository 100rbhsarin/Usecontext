import { useMemo, useState } from "react"



const Expensivecount = ()=>{


    const sum = ()=>{
        console.log('calculating sum ...')

        let i=0
        for(i=0;i<=100;i++){
            i= i+1
        }
    return i
    }
  const total = useMemo(()=>sum(),[])
// const total = sum()
  return <p>sum : {total}</p>
}


const MemoagainCount = ()=>{
    const [count,setCount] = useState(0)

    return(
        <>
        <div>
        <Expensivecount/>

        <button onClick={()=> setCount(count+1)}> rerender</button>
        <p> parent re-render : {count}</p>
        </div>

        </>
    )
}

export default MemoagainCount