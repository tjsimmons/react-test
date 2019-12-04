import React, { useState } from "react";

const Users = function() {
  const [users, setUsers] = useState([
    { id: 1, name: "T.J." },
    { id: 2, name: "Foo" }
  ]);

  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
};

export default Users;
