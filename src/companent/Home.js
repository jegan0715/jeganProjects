import { useContext } from "react";
import { userContext } from "../App";

const Home = () => {
  
    let { id, setId } = useContext(userContext);

    return (
        <div>
            Home page
            <button className="p" onClick={() => setId(++id)}>
                Increment
            </button>
            {id}
            <button className="p" onClick={() => setId(--id)}>
                Decrement
            </button>
        </div>
    );
};

export default Home;
