import React from "react";

import { acLogo } from "../../assets/images";

const Header = () => {
  return (
    <div className="h-12 flex items-center justify-center">
      <img src={acLogo} className="h-10 w-10 rounded-full" />
    </div>
  );
};

export default Header;
