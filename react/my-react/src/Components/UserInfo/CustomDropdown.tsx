import { useState } from "react";
import type { UserInfo } from "../Types";

interface CustomDropdownProps {
  userInfoData: UserInfo[];
}

const CustomDropdown = ({ userInfoData }: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number>(0);

  //   const selectedUser =
  //     userInfoData.find((user) => user.id === selectedUserId);
  const selectedUser =
    userInfoData.find((user) => user.id === selectedUserId) ?? null;

  return (
    <div>
      <button type="button" onClick={() => setIsOpen((p) => !p)} className="border min-w-md border-amber-900">
        {selectedUser ? selectedUser.name : "Select a User"}<span>{isOpen ? "▲":"▼" }</span>
      </button>
      <div className="flex flex-col justify-center bg-amber-100 items-center">
        {isOpen &&
          userInfoData.map((user) => (
            <button
              key={user.id}
              onClick={() => {
                setSelectedUserId(user.id);
                setIsOpen((p) => !p);
              }}
            >
              {user.name}
            </button>
          ))}
      </div>
      {selectedUser && (
        <div className="flex flex-col p-5 border-2 border-black">
          <p>{selectedUser.name}</p>
          <p>{selectedUser.company.name}</p>
          <p>{selectedUser.email}</p>
          <p>{selectedUser.phone}</p>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
