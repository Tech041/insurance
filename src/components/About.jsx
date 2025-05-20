import Container from "./Container";

const About = () => {
  return (
    <section className=" h-[850px] sm:h-[750px] md:h-[500px] w-full bg-white pt-10 " id="about">
      <Container>
        <div className="">
          <h1 className="text-xl md:text-2xl font-semibold text-center md:text-start text-black  ">
            About Us
          </h1>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-3">
            {/* left */}
            <div className="flex-1 flex justify-center  ">
              <div className="w-[200px] h-[200px]">
                <img
                  src="/insurance_ceo.jpg"
                  alt="ceo_image"
                  className="w-[90%]  h-[90%]  object-cover rounded-full "
                />
              </div>{" "}
            </div>
            {/* right */}
            <div className=" flex-[2]">
              <h1 className="pb-6  text-lg md:text-xl font-bold">
                Meet the Visionaries Behind Kedi Pharma, distributors of Kedi
                Health Herbal Supplements -
                <span className="text-xs">The partners we can trust</span>.
              </h1>
              <p className="">
                <span className="font-semibold">
                  Pharm Chima and Precious Ajanwachuku:
                </span>{" "}
                The Power Duo in Holistic Health. At the heart of Kedi Pharma
                Herbal Supplements is a shared passion for natural healing and
                evidence-based wellness.
              </p>
              <p className="">
                With years of expertise in pharmaceutical sciences,Pharm Chima
                understands the delicate balance between traditional remedies
                and modern medicine.
              </p>
              <p className="">
                His mission? To bridge the gap by offering clinically trusted
                herbal formulations that enhance vitality, strengthen immunity,
                and support overall well-being.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
