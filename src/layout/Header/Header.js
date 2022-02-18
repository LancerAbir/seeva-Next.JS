import { useRouter } from "next/router";
import Sticky from "react-sticky-el";
import MainMenu from "../../Template Parts/MainMenu";
import MobilePanel from "../../Template Parts/MobilePanel";
import StartOffCanvas from "../../Template Parts/StartOffCanvas";
const Header = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <Sticky
            // style={{
            //     position: "fixed",
            //     left: "0",
            //     top: "0",
            //     width: "100%",
            //     zIndex: "999",
            //     webkitAnimation: "sticky 1.2s",
            //     animation: "sticky 1.2s",
            //     webkitBoxShadow: "0 8px 20px rgba(14, 32, 77, 0.08)",
            //     boxShadow: "0 8px 20px rgba(14, 32, 77, 0.08)",
            //     backgroundColor: "var(--color-white)",
            // }}

            boundaryElement=".block"
            hideOnBoundaryHit={false}
        >
            <header
                className={`template-header sticky-header header-one ${
                    (currentPath === "/about",
                    "/service" ? "" : "absolute-header")
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
        </Sticky>
    );
};

export default Header;
