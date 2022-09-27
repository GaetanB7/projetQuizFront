import React from "react";

export default React.createContext({
    isAuthenticated: false,
    setIsAuthenticated: value => {},
    isAdministrator: false,
    setIsAdministrator: value => {}
});
