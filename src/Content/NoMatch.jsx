import { Link } from "react-router-dom";

function NoMatch(){
return (<div>
    <p>Oops! That page does not exist! Please navigate back to a page using the provided navigation!</p>
    <p>
                    <Link to="/">Back to Homepage</Link>
    </p>
</div>);
}

export default NoMatch;