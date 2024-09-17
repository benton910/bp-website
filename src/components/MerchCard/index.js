// id                 String @id @default (cuid())
// createdAt          DateTime ? @default (now())
// startTime  DateTime
// endTime    DateTime
// gigVenue           String
// cityState          String
// personnel          String
// bpRole             String
// venueUrl           String


const formatDate = (date) => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('en-US').format(newDate);
};

const formatDateTimeRange = (dateTime1, dateTime2) => {
    const newDate1 = new Date(dateTime1);
    const newDate2 = new Date(dateTime2);
    return newDate1.toLocaleTimeString('en-US', { timeStyle: 'short' }) + ' - ' + newDate2.toLocaleTimeString('en-US', { timeStyle: 'short' });
};


// Let description == instrument you're playing OR the people you're playing with, 'ft. ___, ___ '
// Personnel = people in Royal Reds if bpRole=FRONTMAN, ELSE it's the name of person bp is backing if bpRole=SIDEMAN
const generateDisplayInfo = (scProps) => {
    if (scProps.bpRole === 'SOLO') {
        return {
            title: 'SOLO @ ' + scProps.gigVenue,
            description: null
        }
    } else if (scProps.bpRole === 'DUO') {
        return {
            title: 'DUO w/ ' + scProps.personnel + ' @ ' + scProps.gigVenue,
            description: null
        }
    } else if (scProps.bpRole === 'FRONTMAN') {
        return {
            title: 'BP & The Royal Reds @ ' + scProps.gigVenue,
            description: 'ft. ' + scProps.personnel
        }
    }
    else if (scProps.bpRole === 'SIDEMAN') {
        return {
            title: 'w/ ' + scProps.personnel + ' @ ' + scProps.gigVenue,
            description: null
        }
    }
}

const MerchCard = (merchCardProps) => {
    const cardDisplayInfo = generateDisplayInfo(merchCardProps);
    return (
        <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:scale-105 transform transition duration-100">
            <div className="md:flex">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-2xl text-blue-600 font-semibold">{cardDisplayInfo.title}</div>
                    <p suppressHydrationWarning className="block mt-4 text-lg leading-tight font-medium text-black">{formatDate(merchCardProps.startTime)}</p>
                    <p suppressHydrationWarning className="block mt-1 text-md leading-tight font-medium text-black">{formatDateTimeRange(merchCardProps.startTime, merchCardProps.endTime)}</p>
                    <p className="block mt-1 text-md leading-tight font-medium text-black">{merchCardProps.cityState}</p>
                    <p className="mt-2 text-gray-500">{cardDisplayInfo.description}</p>
                    {merchCardProps.venueUrl ? <a href={merchCardProps.venueUrl} target="_blank" className="mt-5 text-blue-500">More info</a> : null}
                </div>
            </div>
        </div>
    );
};

export default MerchCard;