import { useEffect, useState } from "react";
import type { User } from "../../../types/user";
import { getUsers } from "../../../services/userService";

export function useUsers() {
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const data = await getUsers();
        setUser(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return {
    user,
    loading,
    error
  };
}
