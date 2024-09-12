import { useContext } from "react";
import { userContext } from "../App";

export default function Context (){
    let { id, setId } = useContext(userContext);
   
    return(
        <div>
        <h1 className="p">context page </h1>
       <h2 className="p"> {id}</h2>
        </div>
    )
}