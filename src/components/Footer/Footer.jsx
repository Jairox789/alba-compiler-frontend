import "./Footer.css";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer_info">
        <h3>Universidad Autónoma de Tamaulipas</h3>
        <a href="https://github.com">
          <FaGithub />
        </a>
      </div>
      <p>&copy; {currentYear} UAT</p>
    </footer>
  );
};
