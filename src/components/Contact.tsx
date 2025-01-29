import ContactMethods from "./contact/ContactMethods";
import LocationInfo from "./contact/LocationInfo";
import SocialLinks from "./contact/SocialLinks";
import SectionTitle from "./ui/SectionTitle";

export default function Contact() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Let's Connect"
          subtitle="Ready to excel in mathematics? Reach out through any of these channels"
        />

        <ContactMethods />

        <div className="mt-16 mb-16">
          <SocialLinks />
        </div>

        <LocationInfo />

        <div className="mt-16 text-center">
          <a
            href="tel:+919734540802"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:opacity-90 transition inline-flex items-center gap-2"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
