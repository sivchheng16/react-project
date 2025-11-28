export default function About() {
  return (
    <div className="w-full justify-center m-auto">
      <section className="bg-[url('../../public/img/hero_background.jpg')] bg-cover bg-no-repeat bg-center ">
        <div className="max-w-[1700px] justify-center items-center m-auto h-screen text-gray-300 container ">
          <div className="py-50 container text-center m-auto leading-10 justify-center items-center flex flex-col">
            <h1 className="text-8xl font-bold text-[#00D18B]">
              Connection Between Human <br />
              <span>and Technology</span>
            </h1>
            <p className=" max-w-2xl md:max-w-4xl lg:max-w-5xl">
              This image shows two polygon-style digital hands reaching toward
              each other in a dark blue digital background. The hands are made
              of glowing connected lines and dots, representing network
              connections or futuristic technology. It symbolizes collaboration
              between humans and artificial intelligence, support, unity, or
              communication through digital means.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
