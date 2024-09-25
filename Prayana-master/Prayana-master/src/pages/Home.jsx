import { useNavigate } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import MainContent from "../components/Home/MainContent";
import MainContent_2 from "../components/Home/MainContent_2";
import MainContent_3 from "../components/Home/MainContent_3";

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/test");
  };
  return (
    <>
      <Navbar />
      <MainContent />
      <MainContent_2 />
      <MainContent_3/>
    </>
  );
}
