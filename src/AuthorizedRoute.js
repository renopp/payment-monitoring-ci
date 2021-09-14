import { Route } from "react-router-dom";

const AuthorizedRoute = (routeProps) => {
    return <Route {...routeProps} />;
};

export default AuthorizedRoute;
