import { MapPin, Clock, Calendar } from "lucide-react";

const locations = [
  {
    type: "Main Location",
    address: "Dhitora, Muararai, Birbhum, West Bengal, 731219",
    hours: "Mon-Fri: 7:00 AM - 9:00 AM",
    features: ["In-person tutoring", "Group sessions"],
  },
  {
    type: "Tuition Location",
    address: "Natun Bazar (নতুন বাজার) Murarai, West Bengal 731219",
    hours: "2 hours",
    features: ["Group classes"],
  },
];

export default function LocationInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {locations.map((location, index) => (
        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-start mb-6">
            <MapPin className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{location.type}</h3>
              <p className="text-gray-600">{location.address}</p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <Clock className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium mb-1">Hours</h4>
              <p className="text-gray-600">{location.hours}</p>
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="font-medium mb-3">Available</h4>
            <ul className="grid grid-cols-1 gap-2">
              {location.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 text-indigo-600 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
