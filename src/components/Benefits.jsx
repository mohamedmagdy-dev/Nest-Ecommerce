import BenefitIcon1 from "../assets/icon-1.svg";
import BenefitIcon2 from "../assets/icon-2.svg";
import BenefitIcon3 from "../assets/icon-3.svg";
import BenefitIcon4 from "../assets/icon-4.svg";
import BenefitIcon5 from "../assets/icon-5.svg";

export default function Benefits() {
  return (
    <div className="benefits grid min-sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-cols-[repeat(1,minmax(100%,1fr))] gap-10 lg:gap-5  ">
      <Benefit
        key="1"
        title="Best prices & offers"
        desc="Orders $50 or more"
        image={BenefitIcon1}
      />
      <Benefit
        key="2"
        title="Free delivery"
        desc="24/7 amazing services"
        image={BenefitIcon2}
      />
      <Benefit
        key="3"
        title="Great daily deal"
        desc="When you sign up"
        image={BenefitIcon3}
      />
      <Benefit
        key="4"
        title="Wide assortment"
        desc="Mega Discounts"
        image={BenefitIcon4}
      />
      <Benefit
        key="5"
        title="Easy returns"
        desc="Within 30 days"
        image={BenefitIcon5}
      />
    </div>
  );
}

function Benefit(props) {
  return (
    <div className="benefit flex gap-5 items-center group bg-gray-200 p-5 rounded">
      <img
        src={props.image}
        className="duration-200 transform group-hover:translate-y-[-10px]"
        alt={props.title}
      />
      <div className="info">
        <h3 className="text-[#253e4f] font-bold text-lg">{props.title}</h3>
        <p className="text-gray-600">{props.desc}</p>
      </div>
    </div>
  );
}
