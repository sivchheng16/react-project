import { featureData } from "../data/Data";

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
  return (
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
  );
}
