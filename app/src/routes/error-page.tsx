import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div data-theme="dim" id="error-page">
      <h1 className="items-center justify-center flex mt-52 font-semibold text-6xl font-main2">this site literally has nothing else in it</h1>
      <Link to="/" className="link underline items-center justify-center flex mt-3 font-semibold text-2xl font-main2">go back to home page</Link>
    </div>
  );
}
