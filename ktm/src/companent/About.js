import { userContext } from "../App"
import { useContext } from "react"

export default function About(){
    let {id,setId}=useContext(userContext)
    return(
     
        <div>
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {id.map((data) => (
              <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
     
    )
}