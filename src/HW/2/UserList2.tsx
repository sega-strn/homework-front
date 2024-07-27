import { CurrentUser } from "./CurrentUser";
import { UsersObjectType } from "./HW2";

type UserList2PropsType = {
  users: UsersObjectType;
  filterUsers: ({ myFriends }: UsersObjectType) => void; // пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {
  return (
    <div id={"hw02-users"}>
      <h2>User List:</h2>

      <button
        id={"hw02-filter-button"}
        onClick={() => props.filterUsers(props.users)}
      >
        SHOW ME FRIENDS FROM LA
      </button>

      <ul>
        {props.users.myFriends.map((users) => (
          <CurrentUser
            key={users.id}
            user={users}
            filterUsers={props.filterUsers}
          />
        ))}
      </ul>
    </div>
  );
};
//Закончил все