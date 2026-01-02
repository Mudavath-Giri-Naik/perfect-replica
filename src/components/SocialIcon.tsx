import { Instagram, Linkedin, Github, Phone } from "lucide-react";

interface SocialIconProps {
  type: "instagram" | "linkedin" | "github" | "medium" | "whatsapp" | "phone";
  url: string;
}

const SocialIcon = ({ type, url }: SocialIconProps) => {
  const iconClasses = "w-5 h-5";
  
  const getIcon = () => {
    switch (type) {
      case "instagram":
        return <Instagram className={iconClasses} />;
      case "linkedin":
        return <Linkedin className={iconClasses} />;
      case "github":
        return <Github className={iconClasses} />;
      case "medium":
        return (
          <svg className={iconClasses} viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
          </svg>
        );
      case "whatsapp":
        return (
          <svg className={iconClasses} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        );
      case "phone":
        return <Phone className={iconClasses} />;
      default:
        return null;
    }
  };

  const getColorClass = () => {
    switch (type) {
      case "instagram":
        return "text-social-instagram hover:bg-social-instagram";
      case "linkedin":
        return "text-social-linkedin hover:bg-social-linkedin";
      case "github":
        return "text-social-github hover:bg-social-github";
      case "medium":
        return "text-social-medium hover:bg-social-medium";
      case "whatsapp":
        return "text-social-whatsapp hover:bg-social-whatsapp";
      case "phone":
        return "text-social-phone hover:bg-social-phone";
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
      className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-border bg-background flex items-center justify-center transition-all duration-300 ${getColorClass()} hover:text-background hover:scale-110`}
      aria-label={type}
    >
      {getIcon()}
    </a>
  );
};

export default SocialIcon;
