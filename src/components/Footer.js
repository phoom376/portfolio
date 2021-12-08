import { FaFacebook, FaLine } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
export default function Footer(params) {
  return (
    <section className="footer container mt-5">
      <div className="footer-title">
        <p>Contact</p>
      </div>
      <div className="footer-icon">
        <a href="https://www.instagram.com/do.phoom/"><GrInstagram className="icon" style={{ color: "brown" }}/></a>
        <a href="https://www.facebook.com/phoomFh/">
          <FaFacebook className="icon" style={{ color: "blue" }} />
        </a>
        <a href="https://line.me/ti/p/~d2one">
          <FaLine className="icon" style={{ color: "green" }} />
        </a>
      </div>
    </section>
  );
}
