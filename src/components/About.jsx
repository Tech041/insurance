import Container from "./Container";
const spanStyle = "font-semibold";

const About = () => {
  return (
    <section
      className=" h-[600px]  mt-32 md:mt-0 md:h-[400px] w-full bg-white pt-10 "
      id="about"
    >
      <Container>
        <div className="">
          <h1 className="text-xl md:text-2xl font-semibold text-center md:text-start text-black  "></h1>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pt-3">
            {/* left */}
            <div className="flex-1 flex justify-center  ">
              <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] flex flex-col justify-center items-center gap-1">
                <h1 className=" text-lg md:text-xl font-bold text-center md:hidden ">
                  About Us
                </h1>
                <img
                  src="/insurance_ceo.jpg"
                  alt="ceo_image"
                  className="w-[70%]  h-[70%]  object-cover rounded-full "
                />
                <span className="text-lg font-semibold pb-3">
                  Engr. B.A Ayodele
                </span>
              </div>{" "}
            </div>
            {/* right */}
            <div className=" flex-[2]">
              <h1 className="pb-6  text-lg md:text-xl font-bold text-center pt-4 hidden md:block text-blue-800">
                About Us
              </h1>

              <p className="">
                <span className="font-bold">M'Whales Enterprise Resources</span>{" "}
                is a company that has franchise with several insurances to
                partner with them on general products which include:
              </p>
              <p className="flex flex-col justify-center gap-1">
                <span className={spanStyle}>Vehicle insurance</span>
                <span className={spanStyle}>Life insurance</span>
                <span className={spanStyle}>Fire insurance</span>
                <span className={spanStyle}>Burglary insurance</span>
                <span className={spanStyle}>Agriculture insurance</span>
                <span className={spanStyle}>
                  Professional indemnity insurance
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
