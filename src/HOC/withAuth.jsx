import { Navigate } from "react-router";

export function withAuth(Component) {
    return function ProtectedRoute(props) {
        const isAuthenticated = JSON.parse(localStorage.getItem('token'));
        if(!isAuthenticated) {
            return <Navigate to='/login'></Navigate>
        }

        return (<Component {...props} />)
    }
}