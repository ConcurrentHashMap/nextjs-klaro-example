import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>Next.js + Klaro Example</title>
            </Head>

            <Header />

            <main>
                {props.children}
            </main>

            <Footer />
        </div>
    );
}