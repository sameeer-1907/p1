import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Home/Navbar'
import JobListings from '../components/Careers/JobListings';

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/test');
  };
  return (
    <>
    <Navbar />
    <JobListings/>
    </>
  );
}
