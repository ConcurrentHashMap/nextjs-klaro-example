export default function Footer(props) {

    const openCookieModal = () => {
        console.log("clicked, should open now");
        window.klaro.show(undefined, true);
    };

    return (
        <div>
           <p>Footer lives here</p>

           <a href="#" onClick={openCookieModal}>Cookie Settings</a>
        </div>
    );
}