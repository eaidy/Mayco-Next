import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NotFound = () => {

    return (
        <>
            <div className="not-found">
                <h1>Oooooops...</h1>
                <h2>That page cannot be found.</h2>
                <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            </div>
        </>
    );
}
 
export default NotFound;