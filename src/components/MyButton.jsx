
// function MyButton(){
//     function handleClick(){
//         alert("you clicked button");
//     }
//     return(
//         <div>
//             <button onClick={handleClick} className="p-2 border-10 bg-slate-500">
//                 click
//             </button>
//         </div>
//     )
// }
// export default MyButton;

// import { useState } from "react"

// export default function MyButton(){
//     const [count,setCount]=useState(0);
//     function handleClick(){
//         setCount(count+1)
//     }
//     return(
//         <div>
//             <button className="p-2 rounded hover:rounded-lg bg-blue-500 text-yellow-50" onClick={handleClick}>{`Clicked ${count} times`}</button>
//         </div>
//     )
// }


export default function MyButton(props){
    return (
        <div>
            <button className="p-2 rounded hover:rounded-lg bg-blue-500 text-yellow-50" onClick={props.handleClick}>{`clicked ${props.count}`}</button>
        </div>
    )
}