import { NavLink } from "react-router-dom";
import "./index.less"
import logo from "../../../assets/svg/logo.svg"
interface NavLinkItemProps {
    to: string;
    label: string;
}

const NavLinkItem = ({ to, label }: NavLinkItemProps) => {
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                {label}
            </NavLink>
        </li>
    );
};
const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavLink to="/home" className="logo">
                <img src={logo} width={42} height={42} alt="Logo" />
            </NavLink>
            <nav>
                <ul>
                    <NavLinkItem to="/home" label="Home" />
                    <NavLinkItem to="/space" label="Space" />
                    <NavLinkItem to="/token" label="Token" />
                    <NavLinkItem to="/profile" label="Profile" />
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;
