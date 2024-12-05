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
    <div className="py-16 bg-gray-50" id="schedule">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Available Time Slots
        </h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {schedule.map((slot, index) => (
            <div key={index} className="flex border-b last:border-b-0">
              <div className="w-1/3 bg-blue-50 p-4 font-semibold">
                {slot.day}
              </div>
              <div className="w-2/3 p-4">{slot.times}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
