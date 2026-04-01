import type { UserInfo } from "../../Types";




export const getUserData = async () : Promise<UserInfo[]>=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error("Failed to fetch!")
    }
    return (await response.json()) satisfies UserInfo[];
}