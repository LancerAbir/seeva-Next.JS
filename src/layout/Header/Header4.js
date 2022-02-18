import MainMenu from "../../Template Parts/MainMenu";
import MobilePanel from "../../Template Parts/MobilePanel";
import StartOffCanvas from "../../Template Parts/StartOffCanvas";

const Header4 = () => {
    return (
        <header className="template-header sticky-header sticky-secondary-bg absolute-header header-four">
            <div className="header-top-note">
                <div className="container container-1450">
                    <p>
                        Looking For a Dental Specialists ? Right Place We Are
                        Here For
                        <a href="#">
                            <i className="fas fa-phone" />
                            <strong>Call US</strong>: +012 (345) 6789
                        </a>
                    </p>
                </div>
            </div>
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

export default Header4;
