import { Link } from "react-router-dom";

let NotFound = () => {

    return <div>
      <h2>Sorry </h2>
      <p>the page is not found</p>
      <Link to = "/" >
        back to the home page
      </Link>
    </div>
}

export default NotFound;