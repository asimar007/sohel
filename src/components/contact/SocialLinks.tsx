import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    url: "#",
    color: "hover:bg-pink-500",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    url: "#",
    color: "hover:bg-blue-600",
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    url: "mailto:greatsohel00@gmail.com",
    color: "hover:bg-red-500",
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle className="w-5 h-5" />,
    url: "https://wa.me/8240155560",
    color: "hover:bg-green-500",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h3 className="text-2xl font-semibold text-gray-800">
        Connect on Social Media
      </h3>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full bg-white shadow-md transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
