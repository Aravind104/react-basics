import Button from "./Button";
import About from "./About";
import Profile from "./Profile";
import FirstPage from "./FirstPage";
import ShopingList from "./ShopingList";
import MyButton from "./MyButton";
import {useState} from "react";
function App(){
    const [count,setCount]=useState(0);
    function handleClick(){
        setCount(count+1);
    }
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl">My App</h1>
            <FirstPage />
            <Button />
            <About />
            <Profile />
            <ShopingList />
            <MyButton count={count} handleClick={handleClick} />
            <MyButton count={count} handleClick={handleClick}/>
        </div>
    )
}
export default App;