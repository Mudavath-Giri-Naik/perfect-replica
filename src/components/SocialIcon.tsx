interface SocialIconProps {
  type:
    | "linkedin"
    | "github"
    | "email"
    | "kaggle"
    | "huggingface"
    | "leetcode"
    | "vercel"
    | "render"
    | "twitter"
    | "researchgate";
  url: string;
}

const SocialIcon = ({ type, url }: SocialIconProps) => {
  const iconPathByType: Record<SocialIconProps["type"], string | null> = {
    github: "/github.png",
    linkedin: "/linkedin.png",
    email: "/gmail.png",
    kaggle: "/kaggle.png",
    huggingface: "/hug.png",
    leetcode: "/leetcode.png",
    vercel: "/vercel.png",
    twitter: "/twitter.png",
    researchgate: "/researchgate.png",
    render: null,
  };

  const getIcon = () => {
    const iconPath = iconPathByType[type];
    if (iconPath) {
      return <img src={iconPath} alt={`${type} icon`} className="w-6 h-6 object-contain scale-[1.35]" />;
    }

    // Fallback until a dedicated render icon is added in /public.
    return <span className="text-[10px] font-bold leading-none">R</span>;
  };

  const getColorClass = () => {
    switch (type) {
      case "linkedin":
        return "text-social-linkedin hover:bg-social-linkedin";
      case "github":
        return "text-social-github hover:bg-social-github";
      case "email":
        return "text-social-email hover:bg-social-email";
      case "kaggle":
        return "text-social-github hover:bg-social-github";
      case "huggingface":
        return "text-social-linkedin hover:bg-social-linkedin";
      case "leetcode":
        return "text-social-github hover:bg-social-github";
      case "vercel":
        return "text-social-github hover:bg-social-github";
      case "render":
        return "text-social-linkedin hover:bg-social-linkedin";
      case "twitter":
        return "text-social-linkedin hover:bg-social-linkedin";
      case "researchgate":
        return "text-social-email hover:bg-social-email";
      default:
        return "";
    }
  };

  // Determine if link should open in new tab (external links)
  const isExternalLink = url.startsWith("http");
  const linkProps = isExternalLink 
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={url}
      {...linkProps}
      className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-border bg-background flex items-center justify-center transition-all duration-300 ${getColorClass()} hover:scale-110`}
      aria-label={type}
    >
      {getIcon()}
    </a>
  );
};

export default SocialIcon;
