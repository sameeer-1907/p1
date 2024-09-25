import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Home/Navbar'

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/test');
  };
  return (
    <>
    <Navbar />
    </>
  );
}
