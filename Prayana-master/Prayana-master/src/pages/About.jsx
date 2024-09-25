import { useNavigate } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import HeadAndInfo from "../components/About/HeadAndInfo";
import Scooter from "../assets/images/scooter.png";
import ImageAndHead from "../components/Home/ImageAndHead";
import Footer from "../components/About/Footer";
import "../styles/About.css";
import threebike from "../assets/images/IMG-20240714-WA0046-removebg-preview.png";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="main-content">
        <ImageAndHead
          headStart="Introducing Prayana: The Electric Bike by "
          headSpan="VIT-AP"
          headEnd=" University"
          para="Embrace the future of transportation with the power and efficiency of electric bikes, where each ride is a step towards a greener planet."
          link="https://dummy.com"
          imageSrc={Scooter}
        />

        {/*
    <HeadAndInfo
    head="Our Roots"
    para="VIT-AP University"
    />
    <HeadAndInfo
    head="Our Mission"
    para="VIT-AP University"
    />
*/}
      </div>

      <div className="AboutParentContainer">
        <div className="AboutColumns">
          <div className="About_column1">
            <div className="About_column1_1">
              <div className="About_title1">How it Started</div>
              <div className="About_title2">From Concept to Creation</div>
              <div className="About_para1">
                PrayanaElectric was born out of a simple yet powerful idea: to
                provide a convenient and eco-friendly transportation solution
                for students at Vellore Institute of Technology- AP. The
                scorching summer heat and vast campus presented a challenge that
                sparked our innovation. Our initial goal was to design an E-Bike
                that made intra-university commuting easy and efficient. This
                vision soon expanded, and we found ourselves on a path to
                revolutionize electric mobility for everyone. Our journey from
                concept to creation has been driven by our commitment to
                sustainable technology and a desire to make a positive impact on
                the world.
              </div>
            </div>

            <div className="About_column1_2">
              <div className="About_title2">
                Pioneering Eco-Friendly Transportation
              </div>
              <div className="About_para1">
                At PrayanaElectric, our mission is to revolutionize urban
                transportation by providing innovative, eco-friendly electric
                bikes that enhance mobility while prioritizing safety and
                sustainability. We are dedicated to creating a seamless riding
                experience through advanced technology and exceptional design,
                empowering individuals to make greener choices. Our goal is to
                lead the transition towards a sustainable future, making
                electric mobility accessible to everyone while fostering a
                culture of environmental responsibility. Together, we aim to
                redefine how the world moves.
              </div>
            </div>
          </div>

          <div className="About_column2">
            <div className="About_column2_1">
              <div className="About_OurVision">Our Vision</div>
              <div className="About_OurVision_para">
                At PrayanaElectric, our vision is to empower individuals and
                communities with sustainable mobility solutions that transform
                the way we travel. We aspire to be at the forefront of the
                electric vehicle revolution, creating a future where
                eco-friendly transportation is accessible to all. By leveraging
                cutting-edge technology and innovative design, we aim to inspire
                a shift towards greener lifestyles, reduce our carbon footprint,
                and contribute to the global efforts in combating climate
                change. We envision a world where every ride is not just a
                journey, but a step towards a cleaner, brighter future.
              </div>
            </div>

            <div className="About_column2_2">
              Reaching 30,000 target customers ready for sustainable mobility!
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
