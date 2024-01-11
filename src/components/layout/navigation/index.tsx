// components
import { Search } from "./search";
import { MainNav } from "./main-nav";
import TeamSwitcher from "./team-switcher";

const Navigation = () => {
  return (
    <div className="border-b">
      <div className="container flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          {/* <UserNav /> */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;