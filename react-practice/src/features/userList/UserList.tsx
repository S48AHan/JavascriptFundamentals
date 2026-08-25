import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/fetchUsers";

interface Address {

  city: string;

}


interface User {

  id: number;

  name: string;

  email: string;

  address: Address;

}

export function UserList() {

  const [users, setUsers] = useState<User[]>([]);


  const [loading, setLoading] = useState<boolean>(false);


  const [error, setError] = useState<string | null>(null);
  
useEffect(()=>{
    const fetchUser = await fetchUsers(setUsers,setLoading,setError)
},[])
  return <div>Hello "/userList"!</div>
}
