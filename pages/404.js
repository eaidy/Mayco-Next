import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/router";

const NotFound = () => {

    const router = useRouter()

    return (
        <>
            <div className="not-found">
                <h1>Oooooops...</h1>
                <h2>That page cannot be found.</h2>
                <p>Go back to the <a role="button" onClick={() => router.back()}>Homepage</a></p>
            </div>
        </>
    );
}
 
export default NotFound;