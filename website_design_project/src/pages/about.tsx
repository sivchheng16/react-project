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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-3 md:gap-5 lg:gap-10">
        {/* card */}
        {authorProfile.map((author) => (
          <div className="">
            <img
              src={author.img}
              alt={author.authorName}
              className="w-25 h-25 rounded-full items-center"
            />
            <h3>{author.authorName}</h3>
            <p>{author.desctiption}</p>
          </div>
        ))}
      </div>
    );
  };
  return (
    <section className="text-gray-200">
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
      <div className="">
        <div className="w-full justify-center m-auto">
          {/* Member*/}
          <h2 className="text-5xl font-bold">Our Member and Author </h2>
          <Author />
        </div>
      </div>
    </section>
  );
}
