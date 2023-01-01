import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ViewUsers() {
  const [users, setUsers] = useState([]);
  const id = useParams();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      // Till the data is fetch using API
      // the Loading page will show.
      setLoading(true);

      // Await make wait until that
      // promise settles and return its result
    //   get and view users
      const response = await axios.get("http://127.0.0.1:8000/get-details/users");

      // After fetching data stored it in posts state.
      setPosts(response.data);

      // Closed the loading page
      setLoading(false);
    };

    // Call the function
    loadPost();
  }, []);

  return (
    <div>
      <br />
      <center>
        {" "}
        <h5>Manage Users</h5>
      </center>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <h4>Loading...</h4>
          ) : (
            posts.map((item, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <a href={`edit/${item.id}`} className="btn btn-primary mx-2">
                    Edit
                  </a>
                 
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}