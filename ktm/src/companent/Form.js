import { useContext, useState } from "react";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const { id, setId } = useContext(userContext);
  let route = useNavigate()

  const [currentForm, setCurrentForm] = useState({
    name: "",
    age: "",
    phone: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentForm({
      ...currentForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setId([...id, currentForm]);
   
    setCurrentForm({
      name: "",
      age: "",
      phone: "",
    });
    route('/home')
  };

  return (
    <div className="l">
      <h1 >Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={currentForm.name}
            onChange={handleChange}
            required
          />
        </div>
       
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={currentForm.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={currentForm.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
   
    </div>
  );
};

export default UserForm;
