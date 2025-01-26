import { faker } from '@faker-js/faker';

export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  type: string;
  rating: number;
  location: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  host: {
    id: string;
    name: string;
    image: string;
    joinedDate: string;
    rating: number;
  };
  amenities: string[];
  rules: string[];
  images: string[];
  reviews: {
    id: string;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
};

const propertyTypes = [
  'Apartment',
  'House',
  'Villa',
  'Condo',
  'Cabin',
  'Cottage',
  'Loft',
  'Studio',
];

const amenities = [
  'WiFi',
  'Kitchen',
  'Free parking',
  'Pool',
  'Hot tub',
  'Air conditioning',
  'Heating',
  'Washer',
  'Dryer',
  'TV',
  'Gym',
  'Elevator',
];

const rules = [
  'No smoking',
  'No pets',
  'No parties',
  'No shoes inside',
  'Quiet hours after 10 PM',
  'Check-in after 3 PM',
  'Check-out before 11 AM',
];

export const generateProperties = (): Property[] => {
  const properties: Property[] = [];

  for (let i = 0; i < 2000; i++) {
    const numReviews = faker.number.int({ min: 5, max: 30 });
    const reviews = Array.from({ length: numReviews }, () => ({
      id: faker.string.uuid(),
      userId: faker.string.uuid(),
      userName: faker.person.fullName(),
      rating: faker.number.float({ min: 3, max: 5, precision: 0.1 }),
      comment: faker.lorem.paragraph(),
      date: faker.date.past().toISOString(),
    }));

    const avgRating = Number(
      (
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      ).toFixed(2)
    );

    const numImages = faker.number.int({ min: 5, max: 10 });
    const images = Array.from({ length: numImages }, () =>
      faker.image.urlLoremFlickr({ category: 'house' })
    );

    const property: Property = {
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraphs(3),
      price: faker.number.int({ min: 50, max: 1000 }),
      type: faker.helpers.arrayElement(propertyTypes),
      rating: avgRating,
      location: {
        city: faker.location.city(),
        country: faker.location.country(),
        latitude: parseFloat(faker.location.latitude()),
        longitude: parseFloat(faker.location.longitude()),
      },
      host: {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        image: faker.image.avatar(),
        joinedDate: faker.date.past().toISOString(),
        rating: faker.number.float({ min: 4, max: 5, precision: 0.1 }),
      },
      amenities: faker.helpers.arrayElements(amenities, {
        min: 4,
        max: amenities.length,
      }),
      rules: faker.helpers.arrayElements(rules, { min: 3, max: rules.length }),
      images,
      reviews,
      maxGuests: faker.number.int({ min: 1, max: 16 }),
      bedrooms: faker.number.int({ min: 1, max: 8 }),
      beds: faker.number.int({ min: 1, max: 10 }),
      baths: faker.number.int({ min: 1, max: 5 }),
    };

    properties.push(property);
  }

  return properties;
};

export const properties = generateProperties();