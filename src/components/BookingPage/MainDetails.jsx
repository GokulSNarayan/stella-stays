const features = [
  { name: "WiFi" },
  { name: "Washer" },
  { name: "Dryer" },
  { name: "Coffee Capsules" },
  { name: "Coffee Machine" },
  { name: "Kettle" },
  { name: "Toaster" },
  { name: "Microwave" },
  { name: "Hair Dryer" },
  { name: "Refrigerator" },
  { name: "Oven" },
];
export default function MainDetails() {
  return (
    <div className="w-1/2 flex flex-col self-center">
      <div className="mb-2 p-2">
        <span>
          <span className="flex items-center m-1 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <h2 className="text-xl ml-2 font-semibold mt-1">About</h2>
          </span>
          <p className="m-1 p-1">
            Built on an island resembling a palm tree, beautifully landscaped
            terraces that step down to a private stretch of sandy beach, this
            villa where gorgeous meets a modern, yet distinctly vibrant charm,
            it is the perfect ‘home away from home’ for city-goers in need of a
            stay-cation in style. Palm Jumeirah is known for its lavish
            waterfront properties and stunning views of the sea and skyline. The
            secluded shores offer pure tranquility and relaxation - relish in
            the sounds of the soothing waves and gentle sea breeze. This
            unbeatable location, perfect for the luxury traveler, is minutes
            away from the heart of Dubai - world-class restaurants, shopping
            centers, sprawling boardwalks, waterparks, and marinas.
            Approximately 30 minutes from Dubai International Airport DXB.)
          </p>
        </span>
      </div>
      <div className="mb-2 p-2 outline outline-1 outline-gray-300 rounded-lg">
        <span>
          <span className="flex items-center m-1 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
            <h2 className="text-xl ml-2 font-semibold mt-1">Things to note</h2>
          </span>
          <p className="m-1 p-1">
            - Nakheel Security Guidelines for Bachelors and Males only: Please
            note groups of all males are not permitted as it is a
            family-oriented villa. Additionally, groups of male guests are not
            permitted to have additional visitors non-family members during
            their stay.
          </p>
          <p className="m-1 p-1">
            - Nakheel Security Guidelines for Kids below 19 years old: Please
            note groups of kids are not permitted without parental or family
            supervision. It is mandatory for parents to be present upon check-in
            and available with the kids throughout the stay.
          </p>
        </span>
      </div>
      <div className="mb-2 p-2">
        <span>
          <span className="flex items-center m-1 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="text-xl ml-2 font-semibold mt-1">
              Our Place Offers
            </h2>
          </span>
          <p className="text-lg ml-1 m-1 p-1 font-medium">Unit features</p>
        </span>
        <div className="grid grid-cols-3 place-items-start gap-1 mx-2">
          {features.map((feature, idx) => (
            <span key={idx}>
              <p>{feature.name}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
