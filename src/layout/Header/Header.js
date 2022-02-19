import { useRouter } from "next/router";
import { useState } from "react";
import Sticky from "react-sticky-el";
import MainMenu from "../../Template Parts/MainMenu";
import MobilePanel from "../../Template Parts/MobilePanel";
import StartOffCanvas from "../../Template Parts/StartOffCanvas";

const Header = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    const [isActive, setActive] = useState(false);

    const activateLasers = () => {
        setActive(!isActive);
    };

    return (
        <header
            className={`template-header sticky-header header-one ${
                (currentPath === "/about", "/service" ? "" : "absolute-header")
            } ${currentPath === "/" ? "absolute-header" : ""} `}
        >
            <Sticky
                animate={{ y: 50 }}
                transition={{ duration: 2 }}
                className="sticky-on"
            >
                {/* Start MainMenu */}
                <MainMenu activateLasers={activateLasers} />
                {/* End MainMenu */}
                {/* Start Off Canvas */}
                <StartOffCanvas
                    activateLasers={activateLasers}
                    isActive={isActive}
                />
                {/* End Off Canvas */}
                {/* Start Mobile Panel */}
                <MobilePanel />
                {/* Start Mobile Panel */}
            </Sticky>
        </header>
    );
};

export default Header;
