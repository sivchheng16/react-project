import { FooterSection } from "../component/Footer";
import { featureData } from "../data/Data";
import { authorProfile } from "../data/Data";

export default function About() {
  const FeatureFullScreen = ({
    title,
    description,
    backgroundImageUrl,
  }: any) => {
    return (
      <section
        className="bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        <div className="backdrop-blur-sm">
          <div className="max-w-[1700px] justify-center items-center m-auto  text-gray-300 container ">
            <div className="flex container text-center m-auto leading-10 justify-center items-center h-100vh">
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold  bg-linear-to-bl from-green-500 to-green-700 bg-clip-text text-transparent ">
                {title}
                <br />
                <span className="text-2xl md:text-4xl lg:text-7xl">
                  {description}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const Author = () => {
    return (
      <div className="container items-center m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-2 md:gap-3 lg:gap-5">
        {/* card */}
        {authorProfile.map((author) => (
          <div className=" items-start justify-center m-auto flex flex-row border rounded-2xl bg-teal-950/50 backdrop-blur-2xl border-teal-900  w-full text-center text-sm text-gray-300 space-x-5 py-5">
            <img
              src={author.img}
              alt={author.authorName}
              className="size-15 rounded-full items-center"
            />
            <div className="text-start leading-5">
              <h3 className="text-lg ">{author.authorName}</h3>
              <p className="text-sm text-gray-400">{author.desctiption}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <section className="">
      <div className="w-full justify-center m-auto">
        {featureData.map((feature) => (
          <FeatureFullScreen
            key="key"
            title={feature.title}
            description={feature.desctiption}
            backgroundImageUrl={feature.img}
          />
        ))}
      </div>
      <div className="container w-full justify-center m-auto py-20 text-gray-200">
        <div className="w-full flex flex-col justify-center items-center space-y-10 m-auto">
          {/* Member*/}
          <h2 className="text-5xl font-bold">Our Member and Author </h2>
          <Author />
        </div>
      </div>
      <FooterSection />
    </section>
  );
}
