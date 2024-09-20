//@type=Event required properties are:
//  location
//  location.address
//  location.url
//  name
//  startDate (in ISO-8601 format)
export const generateEventStructuredData = (allShows) => {
    let eventsStructureData = allShows.map((show) => {
        return {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "",
            "startDate": "2025-07-21T19:00-05:00",
            "endDate": "2025-07-21T23:00-05:00",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
                "@type": "Place",
                "name": "Snickerpark Stadium",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "100 West Snickerpark Dr",
                    "addressLocality": "Snickertown",
                    "postalCode": "19019",
                    "addressRegion": "PA",
                    "addressCountry": "US"
                }
            },
            "image": [
                "https://example.com/photos/1x1/photo.jpg",
                "https://example.com/photos/4x3/photo.jpg",
                "https://example.com/photos/16x9/photo.jpg"
            ],
            "description": "The Adventures of Kira and Morrison is coming to Snickertown in a can't miss performance.",
            "offers": {
                "@type": "Offer",
                "url": "https://www.example.com/event_offer/12345_202403180430",
                "price": 30,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-05-21T12:00"
            },
            "performer": {
                "@type": "PerformingGroup",
                "name": "Kira and Morrison"
            },
            "organizer": {
                "@type": "Organization",
                "name": "Kira and Morrison Music",
                "url": "https://kiraandmorrisonmusic.com"
            }
        }
    })
    return eventsStructureData;
};

