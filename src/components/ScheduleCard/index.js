//Need to include as children to this component ALL of the details needed to populate the component
//Define a ScheduleCardProps object^

const ScheduleCard = (scheduleCardProps) => {
  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl m-5">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-auto w-full object-cover md:w-48" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Event image" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-lg text-blue-600 font-semibold">Event Name</div>
          <p className="block mt-1 text-md leading-tight font-medium text-black">Event Description</p>
          <p className="mt-2 text-gray-500">Event Details...</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;