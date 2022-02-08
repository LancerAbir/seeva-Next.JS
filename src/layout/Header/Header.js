import { useRouter } from "next/router";
import MainMenu from "../../Template Parts/MainMenu";
import MobilePanel from "../../Template Parts/MobilePanel";
import StartOffCanvas from "../../Template Parts/StartOffCanvas";

const Header = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <header
            className={`template-header sticky-header header-one ${
                (currentPath === "/about", "/service" ? "" : "absolute-header")
            } ${currentPath === "/" ? "absolute-header" : ""} `}
        >
            {/* Start MainMenu */}
            <MainMenu />
            {/* End MainMenu */}
            {/* Start Off Canvas */}
            <StartOffCanvas />
            {/* End Off Canvas */}
            {/* Start Mobile Panel */}
            <MobilePanel />
            {/* Start Mobile Panel */}
        </header>
    );
};

export default Header;
