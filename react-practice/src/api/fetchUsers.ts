interface Address {

  city: string;

}


interface User {

  id: number;

  name: string;

  email: string;

  address: Address;

}
export const fetchUsers = async ({setLoading,setUsers,setError}:any): Promise<void> => {
  try {
    setLoading(true);

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data: User[] = await response.json();

    setUsers(data);
  } catch (err) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Unknown error occurred");
    }
  } finally {
    setLoading(false);
  }
};
