import ServiceDetails from "components/ServiceDetails";
import servicesData from "../servicesData";
import Header from "components/Header";

export default function page() {
  return (
    <>
      <Header /> <ServiceDetails data={servicesData[2]} />
    </>
  );
}
