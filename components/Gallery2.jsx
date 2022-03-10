export default function Gallery2() {
  return (
    <section className="gallery-section">
      <div className="lg:self-start lg:justify-self-stretch gallery-image-1 w-[70%]  ">
        <div className="relative flex flex-col items-center">
          <img src="/images/gallery/image-1.jpg" alt="image 1" />
          <div className="bg-white w-5/6 -mt-10 rounded-lg opacity-90 relative -bottom-4">
            <span className="flex items-center justify-start mx-4 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h3 className="text-lg font-bold mx-4 p-2">Beyond Living</h3>
            </span>
            <p className=" mx-4 p-1">
              Modern and fresh, our spaces are outfitted with comfort and style,
              be it for a quick getaway to a long term stay.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:self-end lg:justify-self-start gallery-image-2  relative w-[70%]">
        <div className="relative flex flex-col items-center">
          <img src="/images/gallery/image-2.jpg" alt="image 2" />
          <div className="bg-white w-5/6 -mt-10 rounded-lg opacity-90 relative -bottom-4">
            <span className="flex items-center justify-start mx-4 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3 className="text-lg font-bold mx-4 p-2">Prime Locations</h3>
            </span>
            <p className=" mx-4 p-1">
              Breathtaking views in convenient and sought after locations, a
              little something for everyone.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:self-end lg:justify-self-stretch gallery-image-3 gallery-image-3 relative w-[70%]">
        <div className="relative flex flex-col items-center">
          <img src="/images/gallery/image-3.jpg" alt="image 3" />
          <div className="bg-white w-5/6 -mt-10 rounded-lg opacity-90 relative -bottom-4">
            <span className="flex items-center justify-start mx-4 p-1">
              <svg
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2695 0.604126C7.88543 0.604126 6.66864 2.63527 6.16957 3.39889C5.20515 3.03705 4.33284 2.73159 3.70155 2.51982V2.51892C3.47414 2.44275 3.23625 2.44652 3.02122 2.50907C2.80618 2.57163 2.61379 2.69365 2.47515 2.85282C2.19788 3.17117 2.09949 3.68056 2.31044 4.11055C2.57513 4.65161 2.90678 5.37439 3.18593 6.03609C2.88863 5.97415 2.61382 5.92307 2.38027 5.88928C1.82394 5.80869 1.30517 6.11011 1.05002 6.52307C0.794878 6.93604 0.7488 7.49322 1.00795 7.97595C1.65611 9.18297 2.31671 10.1528 2.31671 12.8726C2.31671 16.2132 4.89129 19.1156 8.14434 19.1156C8.07746 19.1156 8.40272 19.1186 8.76739 19.1237C9.13207 19.1287 9.61198 19.1358 10.0923 19.1425C10.5725 19.1491 11.0529 19.1548 11.418 19.1595C11.6006 19.1618 11.7546 19.1645 11.8656 19.1657C11.9212 19.1663 11.9658 19.1663 11.999 19.1666C12.0322 19.1669 11.9984 19.1698 12.0894 19.1657V19.1586C12.1357 19.1597 12.1808 19.1657 12.2273 19.1657C15.5139 19.1657 18.122 16.2564 18.122 12.9003C18.122 10.1698 18.7916 9.19545 19.4478 7.98311C19.9725 7.01421 19.1846 5.72801 18.0692 5.88839L18.0683 5.88928C17.857 5.91969 17.5811 5.95875 17.3352 5.99312C17.353 5.94122 17.3672 5.89141 17.3862 5.83915C17.6168 5.20466 17.9144 4.49581 18.1614 3.93152V3.93062C18.3576 3.48251 18.2255 2.96512 17.9224 2.66215C17.6191 2.35898 17.1033 2.22682 16.6548 2.42224H16.6539C16.0678 2.67829 15.1885 3.03253 14.3569 3.38993C13.9193 2.70336 12.8592 0.604126 10.2695 0.604126ZM10.2695 1.97913C12.0122 1.97913 12.5355 3.0498 13.0687 3.93331C12.0316 4.37267 11.0221 4.81491 10.2561 5.12032C9.75207 4.87699 9.23155 4.64053 8.70473 4.41313C8.29554 4.2365 7.8871 4.07043 7.4828 3.90824C8.0302 3.07716 8.81901 1.97913 10.2695 1.97913ZM16.6906 3.89929C16.4885 4.37507 16.2774 4.86559 16.0945 5.36918C15.9828 5.67658 15.8822 5.95871 15.8017 6.23035C14.9377 6.37064 14.0173 6.53725 13.0634 6.78267C12.7056 6.5007 12.2942 6.22968 11.8495 5.96627C13.4136 5.3228 15.3457 4.48528 16.6906 3.89929ZM3.78749 4.02104C4.94124 4.41548 6.50999 4.96381 8.16046 5.67623C9.33401 6.18279 10.4855 6.7545 11.376 7.30098C11.28 7.33527 11.1818 7.3643 11.0868 7.40035C10.6575 7.56329 10.2387 7.74626 9.83624 7.95089C8.38451 7.45055 6.49585 6.87469 4.84112 6.44161C4.5673 5.65848 4.15503 4.779 3.78749 4.02104ZM18.2644 7.24996C18.271 7.249 18.283 7.24716 18.2393 7.32784V7.32873C17.6159 8.48048 16.747 9.9228 16.747 12.9003C16.747 15.5439 14.6919 17.7907 12.2273 17.7907C9.73221 17.7907 7.7075 15.7529 7.7075 12.9003C7.70759 11.83 8.09715 11.0423 8.77724 10.3553C9.45733 9.66834 10.4492 9.113 11.5747 8.68583C13.8256 7.83148 16.5628 7.49473 18.2644 7.24996ZM2.22003 7.25891C3.40466 7.43512 6.16589 8.20824 8.33949 8.90694C8.15106 9.05912 7.96901 9.21751 7.7997 9.38855C6.91606 10.2812 6.33263 11.4732 6.3325 12.9003C6.3325 14.8764 7.16296 16.6064 8.46661 17.7451C8.36399 17.7437 8.19634 17.7406 8.14434 17.7406C5.72048 17.7406 3.69171 15.5069 3.69171 12.8726C3.69171 9.90815 2.83506 8.47303 2.21913 7.32605C2.20134 7.29291 2.21177 7.27522 2.22003 7.25891Z"
                  fill="black"
                />
              </svg>
              <h3 className="text-lg font-bold mx-4 p-2">
                Nullam efficitur turpis
              </h3>
            </span>
            <p className=" mx-4 p-1">
              Phasellus fermentum tellus vitae ante vehicula posuere. Curabitur
              metus metus, feugiat non semper lacinia, maximus sit amet ligula.
              Proin dictum quis ipsum.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:self-stretch lg:justify-self-stretch gallery-image-4   relative w-[70%]">
        <div className="relative flex flex-col items-center">
          <img src="/images/gallery/image-4.jpg" alt="image 4" />
          <div className="bg-white w-5/6 -mt-10 rounded-lg opacity-90 relative -bottom-4">
            <span className="flex items-center justify-start mx-4 p-1">
              <svg
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.97412 0.413452C7.48703 0.413452 7.0155 0.58138 6.63761 0.889689C5.93196 1.46564 5.70289 2.41498 5.98771 3.23238L4.47127 2.49117L4.52409 2.51982C4.19475 2.32154 3.8183 2.21635 3.43465 2.21635C2.69161 2.21635 2.00223 2.60671 1.62012 3.24402C1.61982 3.24402 1.61952 3.24402 1.61922 3.24402C1.02266 4.2394 1.3507 5.55012 2.34611 6.14709C2.36243 6.15704 2.37915 6.1663 2.39624 6.17485L4.62614 7.26786C4.0321 7.29013 3.46091 7.50666 3.02018 7.90792L1.05973 9.69381C1.05211 9.7008 1.04465 9.70796 1.03735 9.71529C0.641115 10.1115 0.416992 10.6522 0.416992 11.212C0.416992 11.7719 0.641115 12.3116 1.03735 12.7079C1.07096 12.7415 1.11813 12.7547 1.15373 12.7858C0.892143 13.2257 0.838112 13.7842 1.13582 14.2485L1.11882 14.2207L2.90112 17.3109C2.96989 17.43 3.0728 17.5257 3.19653 17.5857C3.19653 17.5857 3.98706 17.9692 4.88127 18.3547C5.32837 18.5474 5.80172 18.7413 6.22852 18.8918C6.65531 19.0423 6.97777 19.1675 7.39494 19.1675H16.225C17.2914 19.1675 18.0777 18.0925 17.754 17.0764L15.9967 11.554L16.0084 11.5961C15.9496 11.3609 15.8587 11.1371 15.7461 10.9247C15.7405 10.9074 15.7342 10.8904 15.7273 10.8737L13.6075 5.94568C13.606 5.94238 13.6045 5.9391 13.603 5.93583C13.3955 5.4731 13.1154 5.04645 12.7741 4.67094H12.775L9.59082 1.16451L9.6141 1.19226C9.21256 0.700324 8.60877 0.413452 7.97412 0.413452ZM7.97412 1.78845C8.20114 1.78845 8.40492 1.88517 8.54883 2.06148C8.55664 2.07095 8.5647 2.0802 8.573 2.08923L11.7563 5.59477C11.7566 5.59507 11.7569 5.59536 11.7572 5.59566C12.0007 5.86366 12.1999 6.16869 12.348 6.4989L12.3444 6.48905L12.9827 7.97237L11.0607 6.0531C10.6461 5.63905 10.1705 5.29073 9.6508 5.02096C9.64575 5.01851 9.64068 5.01612 9.63558 5.01379L9.37598 4.88668L7.39762 2.988C7.14376 2.66743 7.18727 2.21579 7.50684 1.95496C7.63679 1.84893 7.80671 1.78845 7.97412 1.78845ZM3.43465 3.59135C3.568 3.59135 3.69986 3.62849 3.8151 3.69788C3.83228 3.70819 3.84991 3.71775 3.86792 3.72652L9.01701 6.24198C9.41209 6.44705 9.77434 6.71146 10.0894 7.02616L14.252 11.1834C14.4578 11.3888 14.6039 11.6465 14.6746 11.9291C14.678 11.9432 14.6819 11.9573 14.6862 11.9712L16.4434 17.4935C16.4964 17.6599 16.3998 17.7925 16.225 17.7925H7.39494C7.42184 17.7925 7.06251 17.7278 6.68506 17.5947C6.3076 17.4616 5.85562 17.277 5.42554 17.0916C4.66369 16.7632 4.13034 16.5048 3.9825 16.4336L2.3103 13.5332C2.30485 13.5239 2.29918 13.5146 2.29329 13.5055C2.27505 13.477 2.27381 13.4775 2.30762 13.4661L2.646 13.3524C2.646 13.3521 2.646 13.3518 2.646 13.3515C3.28266 13.1368 3.97354 13.3802 4.3361 13.9459C4.35265 13.9716 4.3709 13.9961 4.39071 14.0193L5.16325 14.9324C5.46759 15.292 5.91636 15.5009 6.38786 15.5009H6.92855C7.47311 15.5009 7.98311 15.2222 8.27759 14.7632L9.01701 13.6138C9.36731 13.0692 9.35456 12.3621 8.98478 11.8306L8.19076 10.6884C7.8913 10.2576 7.39807 10.0009 6.87394 10.0009H5.64844C5.261 10.0009 4.88629 10.1409 4.59481 10.3947L3.0918 11.7035C3.0801 11.7138 3.06875 11.7246 3.05778 11.7357C2.9141 11.8794 2.73605 11.9532 2.5332 11.9532C2.33036 11.9532 2.1532 11.8794 2.00952 11.7357C1.86584 11.592 1.79199 11.4149 1.79199 11.212C1.79199 11.0099 1.86595 10.8327 2.00863 10.6892L3.9458 8.92395C4.15737 8.73133 4.4315 8.62585 4.71745 8.62585H7.49878C7.51932 8.62768 7.53993 8.62857 7.56055 8.62854C7.86207 8.6306 8.14956 8.7473 8.36263 8.96065C8.36293 8.96095 8.36323 8.96125 8.36353 8.96155L11.4931 12.0902C11.5564 12.1562 11.6323 12.2089 11.7163 12.2452C11.8002 12.2814 11.8906 12.3006 11.9821 12.3015C12.0735 12.3025 12.1643 12.2851 12.2489 12.2506C12.3336 12.216 12.4106 12.1649 12.4752 12.1002C12.5399 12.0355 12.591 11.9586 12.6256 11.8739C12.6602 11.7892 12.6775 11.6985 12.6766 11.607C12.6757 11.5156 12.6565 11.4252 12.6202 11.3412C12.5839 11.2573 12.5312 11.1814 12.4653 11.118L9.33569 7.98938C8.92981 7.58296 8.39059 7.36796 7.82552 7.30456L3.04972 4.96366C2.69821 4.74904 2.58637 4.30611 2.79907 3.95121C2.93029 3.73236 3.17853 3.59135 3.43465 3.59135ZM5.64844 11.3759H6.87394C6.95023 11.3759 7.01855 11.411 7.06193 11.4734L7.85596 12.6157C7.90968 12.6929 7.91162 12.7903 7.86043 12.8699L7.12101 14.0202C7.12071 14.0205 7.12042 14.0208 7.12012 14.0211C7.07807 14.0868 7.00781 14.1259 6.92855 14.1259H6.38786C6.31944 14.1259 6.25729 14.0964 6.2133 14.0444L5.43986 13.1313C5.19056 12.7756 4.85759 12.5126 4.49365 12.3059L5.49805 11.4323C5.54023 11.3955 5.59313 11.3759 5.64844 11.3759Z"
                  fill="black"
                />
              </svg>
              <h3 className="text-lg font-bold mx-4 p-2">
                A Signature of Excellence
              </h3>
            </span>
            <p className=" mx-4 p-1">
              24/7 guest concierge, seamless check-in and immaculate
              cleanliness, always a flawless stay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
