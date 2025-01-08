import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-center items-center h-screen">
      <div className="text-center space-y-2">
        <h2 className="font-bold text-5xl">The Page Is Not Found</h2>
        <h2 className="font-bold text-6xl text-yellow-400">404</h2>
        <NavLink to="/" className="btn w-full font-bold text-xl">Go Back</NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
