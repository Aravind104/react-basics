import Login from "./Login";
import Register from "./Register";

function FirstPage(){
    const isRegistered=true;
    // let content;
    // if (isRegistered) {
    //     content=<Login />
    // }
    // else{
    //     content=<Register />
    // }
    return(
        <div>
           {/* {
           isRegistered
           ?<Login />
           :<Register />
           }  */}
           {!isRegistered && <Register />}
        </div>
    )
}
export default FirstPage;