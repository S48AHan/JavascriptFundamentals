const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export async function apiClient<T>(endpoint:string):Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`);
  if(!res.ok){
    throw new Error(`API Error: ${res.status}`)
  }
  return res.json()
}