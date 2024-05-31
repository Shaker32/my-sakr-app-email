import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link to={"/signin"}>
        <button>Go to sign in</button>
      </Link>
    </>
  );
}
