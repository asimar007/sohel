export default function Schedule() {
  const schedule = [
    { day: "Monday", times: "9:00 AM - 7:00 PM" },
    { day: "Tuesday", times: "9:00 AM - 7:00 PM" },
    { day: "Wednesday", times: "9:00 AM - 7:00 PM" },
    { day: "Thursday", times: "9:00 AM - 7:00 PM" },
    { day: "Friday", times: "9:00 AM - 5:00 PM" },
    { day: "Saturday", times: "10:00 AM - 3:00 PM" },
    { day: "Sunday", times: "Closed" },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white" id="schedule">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Business Hours
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We're here to serve you during these hours. Feel free to schedule your
          visit at your convenience.
        </p>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          {schedule.map((slot, index) => (
            <div
              key={index}
              className="flex border-b last:border-b-0 hover:bg-blue-50 transition-colors duration-200"
            >
              <div className="w-1/3 bg-blue-100 bg-opacity-50 p-5 font-semibold text-blue-900 flex items-center justify-center">
                {slot.day}
              </div>
              <div className="w-2/3 p-5 text-gray-700 flex items-center justify-center font-medium">
                {slot.times === "Closed" ? (
                  <span className="text-red-500">{slot.times}</span>
                ) : (
                  slot.times
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
