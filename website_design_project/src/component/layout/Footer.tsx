import {
  FaFacebook,
  FaGithub,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../Logo";

export default function Footer() {
  const footer = [
    {
      logo: <Logo />,
      title:
        "Decred's build-in-govermance systens enpower its community with formal right",
    },
  ];
  const product = [
    {
      brand: "Brand Resourses",
      press: "Press",
      contributor: "Become a Contributor",
      business: "Business Brief",
    },
  ];
  const resoursces = [
    {
      brand: "Brand Resourses",
      press: "Press",
      contributor: "Become a Comntributor",
      business: "Business Brief",
      tech: "technical Docs",
      apt: "API Reference",
      support: "Support",
      bug: "Bug Bounty",
    },
  ];
  const decred = [
    {
      secure: "Secure",
      adaptable: "Adaptable",
      sustainable: "Sustainable",
      history: "History",
    },
  ];
  const socialMedia = [
    {
      youtube: <FaYoutube />,
      twitter: <FaTwitter />,
      facebook: <FaFacebook />,
      tiktok: <FaTiktok />,
      github: <FaGithub />,
    },
  ];
  return (
    <section className="grid grid-cols-4 gap-20 text-sm text-gray-400">
      <div className="space-y-5">
        <div className="space-y-2">
          <Logo />
          <p className="text-gray-400">
            Decred's build-in-govermance systens enpower its community with
            formal right
          </p>
        </div>
        <div>
          {socialMedia.map(() => (
            <div className="flex gap-4 text-lg  text-teal-400">
              <a href="https://www.facebook.com/" target="_blank">
                {socialMedia[0].facebook}
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                {socialMedia[0].youtube}
              </a>
              <a href="https://x.com/" target="_blank">
                {socialMedia[0].twitter}
              </a>
              <a href="https://www.tiktok.com/en/" target="_blank">
                {socialMedia[0].tiktok}
              </a>
              <a href="https://github.com/" target="_blank">
                {socialMedia[0].github}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div>
        {product.map(() => (
          <div className="space-y-3 ">
            <h3 className="font-bold text-gray-300">Product</h3>
            <div className="grid grid-cols-1 space-y-2 link">
              <a href="#">{product[0].brand}</a>
              <a href="#">{product[0].press}</a>
              <a href="#">{product[0].business}</a>
              <a href="#">{product[0].contributor}</a>
            </div>
          </div>
        ))}
      </div>
      <div>
        {resoursces.map(() => (
          <div className="space-y-3 ">
            <h3 className="font-bold text-gray-300">Resources</h3>
            <div className="grid grid-cols-1 space-y-2 link">
              <a href="#">{resoursces[0].brand}</a>
              <a href="#">{resoursces[0].press}</a>
              <a href="#">{resoursces[0].business}</a>
              <a href="#">{resoursces[0].contributor}</a>
              <a href="#">{resoursces[0].tech}</a>
              <a href="#">{resoursces[0].apt}</a>
              <a href="#">{resoursces[0].support}</a>
              <a href="#">{resoursces[0].bug}</a>
            </div>
          </div>
        ))}
      </div>
      <div>
        {decred.map(() => (
          <div className="space-y-3 ">
            <h3 className="font-bold text-gray-300">Decred</h3>
            <div className="grid grid-cols-1 space-y-2 link">
              <a href="#">{decred[0].secure}</a>
              <a href="#">{decred[0].adaptable}</a>
              <a href="#">{decred[0].sustainable}</a>
              <a href="#">{decred[0].history}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
