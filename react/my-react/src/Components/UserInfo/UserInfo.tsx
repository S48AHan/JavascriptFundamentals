import { useEffect, useState } from "react";
import type { UserInfo as UserInfoData } from "../Types";
import { getUserData } from "./service/getUserdata";
import CustomDropdown from "./CustomDropdown";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfoData[]>([]);
  useEffect(() => {
    const loaduser = async () => {
      const res = await getUserData();
      setUserInfo(res);
    };
    loaduser();
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
     <CustomDropdown userInfoData={userInfo}/>
    </div>
  );
};

export default UserInfo;
