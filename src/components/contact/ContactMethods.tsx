import { Mail, Phone, Video } from "lucide-react";

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    primary: "greatsohel00@gmail.com",
    secondary: "Response within 24 hours",
    action: "mailto:greatsohel00@gmail.com",
    actionText: "Send Email",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    primary: "+91 8240155560",
    secondary: "Available 24/7 hours",
    action: "tel:+91 8240155560",
    actionText: "Call Now",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Online Sessions",
    primary: "Zoom & Google Meet",
    secondary: "Available worldwide",
    action: "#schedule",
    actionText: "View Schedule",
  },
];

export default function ContactMethods() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {contactMethods.map((method, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
            {method.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
          <p className="text-gray-900 font-medium mb-1">{method.primary}</p>
          <p className="text-gray-500 text-sm mb-4">{method.secondary}</p>
          <a
            href={method.action}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
          >
            {method.actionText}
            <span className="ml-2">→</span>
          </a>
        </div>
      ))}
    </div>
  );
}
