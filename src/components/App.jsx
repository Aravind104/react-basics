import Button from "./Button";
import About from "./About";
import Profile from "./Profile";
import FirstPage from "./FirstPage";
import ShopingList from "./ShopingList";
import MyButton from "./MyButton";
function App(){
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl">My App</h1>
            <FirstPage />
            <Button />
            <About />
            <Profile />
            <ShopingList />
            <MyButton />
            <MyButton />
        </div>
    )
}
export default App;