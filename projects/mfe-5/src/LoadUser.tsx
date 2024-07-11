import React, { useEffect, useState } from "react";

function LoadUser() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users:any) => {
        setUsers(users);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {!loading ? users.map((user: any) => (
        <p key={user.id}>{user.name}</p>
      )) : <>loading</>}
    </div>
  );
}

export default LoadUser;
