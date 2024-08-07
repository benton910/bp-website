// id                 String @id @default (cuid())
// createdAt          DateTime ? @default (now())
// startTime  DateTime
// endTime    DateTime
// gigVenue           String
// cityState          String
// personnel          String
// bpRole             String
// venueUrl           String


//STYLING:
//  - on hover, make the card get bigger/hover up (animation)


//Need some helper functions to do a few things:
// 1) Helper function to format date/time for the gig date & time
// 2) Helper function to determine How to display based on bpRole
//    - if bpRole == SOLO , then the personnel should contain the name of the person that bp is playing with,
//      and the gig title should say something like 'w/ <personnel> @ <gigVenue>'
//    - if bpRole == DUO , then the personnel should contain the name of the person that bp is playing with,
//      and the gig title should say something like 'Duo w/ <personnel> @ <gigVenue>'
//    - if bpRole == SIDEMAN, BASS | GUITAR , then the personnel should contain the name of the person that bp is playing with,
//      and the gig title should say something like '<personnel, aka bandleader, ex. Tony Holiday> @ <gigVenue>', and in the
//      event description there should be information containing the instrument BP will be playing
//    - if bpRole == FRONTMAN, FULLBAND, then the personnel should contain the names of the people in the RR's that night,
//      and the gig title should say something like 'BP & The Royal Reds @ <gigVenue>' (Applies for 3 piece & up)


const formatDateTimeRange = () => { };

const ScheduleCard = (scheduleCardProps) => {
  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:scale-105 transform transition duration-100">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-3xl text-blue-600 font-semibold">@ {scheduleCardProps.gigVenue}</div>
          <p className="block mt-1 text-md leading-tight font-medium text-black">{scheduleCardProps.startTime} - {scheduleCardProps.endTime}</p>
          <p className="block mt-1 text-md leading-tight font-medium text-black">{scheduleCardProps.cityState}</p>
          {scheduleCardProps.personnel ? <p className="mt-2 text-gray-500">ft. {scheduleCardProps.personnel}</p> : null}
          {scheduleCardProps.venueUrl ? <a href={scheduleCardProps.venueUrl} target="_blank" className="mt-3 text-blue-500">More info</a> : null}
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;