import { Fragment, useEffect } from "react";
import { activeSection } from "../utilits";
const Footer = () => {

    useEffect(() => {
        if (!blog) {
            activeSection();
        }
    }, []);
    return (
        <Fragment>
            <a href="https://www.iubenda.com/privacy-policy/77821801" target="_blanck" class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/77821801/cookie-policy" target="_blanck" class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">Cookie Policy</a>
        </Fragment>
    );
};
export default Footer;
