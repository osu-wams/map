export interface ILocation {
  id: string;
  type: string;
  attributes: {
    name: string;
    tags: string[];
    openHours:
      | []
      | {
          '1': [{ start: string; end: string }];
          '2': [{ start: string; end: string }];
          '3': [{ start: string; end: string }];
          '4': [{ start: string; end: string }];
          '5': [{ start: string; end: string }];
          '6': [{ start: string; end: string }];
          '7': [{ start: string; end: string }];
        };
    type: string;
    abbreviation: string | null;
    geometry: {
      type: string;
      coordinates: [[number[]]] | [[[number[]]]];
    } | null;
    summary: string | null;
    description: string | null;
    descriptionHTML: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    county: string | null;
    telephone: string | null;
    fax: string | null;
    thumbnails: string[];
    images: string[];
    departments: string[];
    website: string | null;
    sqft: string | null;
    calendar: string | null;
    campus: string | null;
    giRestroomCount: number | null;
    giRestroomLimit: string | null;
    giRestroomLocations: string | null;
    synonyms: string[];
    bldgID: string | null;
    parkingZoneGroup: string | null;
    propID: string | null;
    adaParkingSpaceCount: number | null;
    motorcycleParkingSpaceCount: number | null;
    evParkingSpaceCount: number | null;
    weeklyMenu: string | null;
    latitude: string | null;
    longitude: string | null;
  };
}
