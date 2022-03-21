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
    <div className="w-1/2 flex flex-col">
      <div>
        <span>
          <h2 className="text-xl font-semibold">About</h2>
          <p>
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
      <div>
        <span>
          <h2 className="text-xl font-semibold">Things to note</h2>
          <p>
            - Nakheel Security Guidelines for Bachelors and Males only: Please
            note groups of all males are not permitted as it is a
            family-oriented villa. Additionally, groups of male guests are not
            permitted to have additional visitors non-family members during
            their stay. - Nakheel Security Guidelines for Kids below 19 years
            old: Please note groups of kids are not permitted without parental
            or family supervision. It is mandatory for parents to be present
            upon check-in and available with the kids throughout the stay.
          </p>
        </span>
      </div>
      <div>
        <span>
          <h2 className="text-xl font-semibold">Our Place Offers</h2>
          <p className="text-lg font-medium">Unit features</p>
        </span>
        <div className="grid grid-cols-3">
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
