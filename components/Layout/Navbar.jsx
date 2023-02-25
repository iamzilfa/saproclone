import Image from "next/image";
import Location from "../../public/assets/images/locationwhite.png";
import Down from "../../public/assets/images/downwhite.png";
import Logo from "../../public/assets/images/logo-soprasteria.png";
import Search from "../../public/assets/vectors/search.svg";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <nav className="bg-Banner bg-no-repeat object-cover w-full">
      <div className="px-[120px] flex flex-col pb-[350px]">
      
          <div className="flex items-center justify-between text-white px-[25px] max-w-[1480px] container mx-auto w-full">
            <div>
              <ul className="flex items-center gap-4">
                <li>Careers</li>
                <li>Newsroom</li>
              </ul>
            </div>
            <div className="flex items-center gap-3 py-3">
              <div className="flex items-center gap-32">
                <ul className="flex items-center gap-2">
                  <li>
                    <Image src={Location} alt="Location" />
                  </li>
                  <li>Global</li>
                </ul>
                <ul>
                  <li>
                    <Image src={Down} alt="Down" className="w-3" />
                  </li>
                </ul>
              </div>
              <ul className="flex items-center gap-6">
                <li>English</li>
                <li>
                  <Image src={Down} alt="Down" className="w-3" />
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white flex items-center justify-between px-[25px] py-6 max-w-[1440px] container mx-auto w-full">
            <div>
              <Image src={Logo} alt="Logo" />
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-8">
                {[
                  "Services",
                  "Industries",
                  "Insights",
                  "Investors",
                  "About us",
                ].map((e) => {
                  return <div>{e}</div>;
                })}
              </div>
              <div>
                <Image src={Search} alt="Search" />
              </div>
            </div>
          </div>
        

        <div className="flex flex-col w-[957px]">
          <div className="font-semibold text-[40px] leading-[55px] font-HurmeGeometricBold text-white">
            <h1>
              Digital Banking Experience Report 2022 - Banks' digital maturity &
              priorities alongside customer expectations
            </h1>
          </div>
          <div className="flex flex-col items-start justify-center">
            <Button style="bg-[#A60726] text-white">
              Discover the key findings
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
