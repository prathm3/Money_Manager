import { Button } from "@mui/material";
import img from "./ErrImg.jpg";
export default function ErrorPage() {
  const handleClick = () => {
    window.location.href = "/login";
  };
  return (
    <>
      <div className="container-fluid">
        <img src={img} alt="cannot-load-img" height={"450px"} width={"670px"} />
        <h1> Error:404 </h1>
        <p>
          Looks like you have hit the barrier. The page you requested cannot be
          found.
        </p>
        <Button onClick={handleClick}>Login Page</Button>
      </div>
    </>
  );
}
