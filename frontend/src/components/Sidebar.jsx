import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-300 bg-base-100/50 backdrop-blur-sm">
      <div className="border-b border-base-300 w-full p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Users className="size-5 text-primary" />
            </div>
            <span className="font-semibold text-lg hidden lg:block">Contacts</span>
          </div>
          <span className="badge badge-primary badge-sm hidden lg:inline-flex">{onlineUsers.length - 1} online</span>
        </div>
        {/* Online filter toggle */}
        <div className="mt-4 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer label flex items-center gap-2 p-0">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="toggle toggle-primary toggle-sm"
            />
            <span className="text-sm font-medium">Show online only</span>
          </label>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3 scrollbar-thin scrollbar-thumb-base-300">
        <div className="space-y-1 px-2">
          {filteredUsers.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`
                w-full p-2 flex items-center gap-3 rounded-lg
                hover:bg-base-200 transition-all duration-200
                ${selectedUser?._id === user._id 
                  ? "bg-base-200 shadow-sm ring-1 ring-primary/10" 
                  : ""}
              `}
            >
              <div className="relative mx-auto lg:mx-0">
                <div className={`size-12 rounded-full overflow-hidden border-2 ${onlineUsers.includes(user._id) ? "border-primary" : "border-base-300"}`}>
                  <img
                    src={user.profilePic || "/avatar.png"}
                    alt={user.name}
                    className="size-full object-cover"
                  />
                </div>
                {onlineUsers.includes(user._id) && (
                  <span
                    className="absolute bottom-0 right-0 size-3 bg-primary 
                    rounded-full ring-2 ring-base-100 animate-pulse"
                  />
                )}
              </div>

              {/* User info - only visible on larger screens */}
              <div className="hidden lg:block text-left flex-1 min-w-0">
                <div className="font-medium truncate">{user.fullName}</div>
                <div className="text-sm flex items-center gap-1">
                  <span className={`size-2 rounded-full ${onlineUsers.includes(user._id) ? "bg-primary" : "bg-base-300"}`}></span>
                  <span className={onlineUsers.includes(user._id) ? "text-primary" : "text-base-content/60"}>
                    {onlineUsers.includes(user._id) ? "Active now" : "Offline"}
                  </span>
                </div>
              </div>
            </button>
          ))}

          {filteredUsers.length === 0 && (
            <div className="text-center py-10">
              <div className="bg-base-200 size-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="size-8 opacity-40" />
              </div>
              <div className="text-base-content/70">No contacts available</div>
              <div className="text-xs text-base-content/50 mt-1">
                {showOnlineOnly ? "Try showing all contacts" : "Check back later"}
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
