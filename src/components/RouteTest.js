import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>HOME</Link>
      <br />
      <Link to={"/new"}>New</Link>
      <br />
      <Link to={"/Edit"}>Edit</Link>
      <br />
      <Link to={"/Diary"}>Diary</Link>
    </>
  );
};

export default RouteTest;
