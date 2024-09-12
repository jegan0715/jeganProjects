import { useState } from "react";

export default function Project() {
  let [obj, setobj] = useState({});
  let [jsobj, jssetobj] = useState([]);
  let [id, setId] = useState(1);
  let [edit, setedit] = useState(null);
  let [data,setdata]=useState()
  function jsChange(e) {
    setobj({ ...obj, [e.target.name]: e.target.value });

  }
  function jsSubmit(e) {
    e.preventDefault();
    jssetobj([...jsobj, { ...obj, id }]);
    setId(id + 1);
    setobj({
      id: id,
      name: "",
      phone: "",
      age: "",
      email: "",
    })
  }
  function handleDelete(id) {
    jssetobj(jsobj.filter((value) => value.id !== id));
  }
  function handleUpdate(id) {
    console.log(edit);
    if (edit == null) {
      setedit(id);
    }
  }

  




  return (
    <>
      <div className="container mt-5 ">
        <form className="form-control bg-success" onSubmit={jsSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              onChange={jsChange}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="form-control"
              onChange={jsChange}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control"
              onChange={jsChange}
            />
          </div>
          <div>
            <label>Email id</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={jsChange}
            />
          </div>
          <div>
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Email id</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {jsobj.map((value) => (
              <tr>
                <td>{edit === value.id ? <input type="text" /> : value.id}</td>
                <td>
                  {edit === value.id ? <input type="text" /> : value.name}
                </td>
                <td>
                  {edit === value.id ? <input type="text" /> : value.phone}
                </td>
                <td>{edit === value.id ? <input type="text" /> : value.age}</td>
                <td>
                  {edit === value.id ? <input type="text" /> : value.email}
                </td>
                <td>
                  <button
                    className="bg-primary"
                    onClick={() => handleDelete(value.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-primary"
                    onClick={() => handleUpdate(value.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
