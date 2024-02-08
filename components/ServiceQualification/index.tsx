import Image from "next/image";
import "./index.scss";
import { qualifications } from "@/data/data.json";

const ServiceQualification = () => {
  return (
    <div className="service-qualification">
      <h1>Our Awesome Service</h1>
      <div className="qualifications-box">
        {qualifications.map((item, index) => {
          return (
            <div className="qualification" key={index}>
              <Image
                src={item.illustration}
                alt={item.title}
                width={85}
                height={85}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceQualification;
