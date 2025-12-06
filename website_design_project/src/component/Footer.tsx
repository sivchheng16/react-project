import Logo from "./Logo";
import { product, resoursces, decred, socialMedia } from "../data/Data";

// Footer section component
export const FooterSection = () => {
  // Footer link component
  const FooterLink = ({ title, links }: any) => {
    return (
      <div className="space-y-3 ">
        <h3 className="font-bold text-gray-300">{title}</h3>
        <div className="grid grid-cols-1 space-y-2 link">
          {Object.values(links).map((link: any, index: any) => (
            <a key={index} href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
    );
  };
  return (
    <section className=" container w-full justify-center m-auto ">
      <div className="container grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-20 text-sm text-gray-400 pb-20 justify-items-center items-start m-auto px-4">
        <div className="space-y-5  text-center md:text-left w-full">
          <div className="space-y-2 flex flex-col items-center md:items-start">
            <Logo />
            <p className="text-gray-400">
              Decred's build-in-govermance systens enpower its community with
              formal right
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="flex gap-4 text-lg  text-teal-400">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialMedia[0].facebook}
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialMedia[0].youtube}
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialMedia[0].twitter}
              </a>
              <a
                href="https://www.tiktok.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialMedia[0].tiktok}
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialMedia[0].github}
              </a>
            </div>
          </div>
        </div>
        <FooterLink title="Products" links={product[0]} />
        <FooterLink title="Resources" links={resoursces[0]} />
        <FooterLink title="Decred" links={decred[0]} />
      </div>
    </section>
  );
};
