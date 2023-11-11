export default function Home() {
  return (
    <div className="min-h-screen p-6 grid place-items-center bg-[#f1f1f1]">
      <article aria-label="tracking details"
               className="font-[Poppins] grid gap-6 max-w-fit bg-[#FFFFFF] p-8 rounded-lg text-[#10153E]">
        <h2 className="font-[Merriweather] font-bold text-2xl">Package Details</h2>
        <div className="flex justify-between flex-wrap items-center gap-4 bg-[#F7F7FA] p-4 rounded-md border-[#E3E5F1] border">
          <div className="grid gap-1">
            <div className="flex items-center gap-1">
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4_147)">
                  <path d="M11.5 2.75L18.8333 6.875V15.125L11.5 19.25L4.16666 15.125V6.875L11.5 2.75Z" stroke="#60679F"
                        stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.5 11L18.8333 6.875" stroke="#60679F" stroke-width="1.375" stroke-linecap="round"
                        stroke-linejoin="round" />
                  <path d="M11.5 11V19.25" stroke="#60679F" stroke-width="1.375" stroke-linecap="round"
                        stroke-linejoin="round" />
                  <path d="M11.5 11L4.16666 6.875" stroke="#60679F" stroke-width="1.375" stroke-linecap="round"
                        stroke-linejoin="round" />
                  <path d="M15.1667 4.8125L7.83334 8.9375" stroke="#60679F" stroke-width="1.375" stroke-linecap="round"
                        stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_4_147">
                    <rect width="22" height="22" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-xs uppercase bold text-[#60679F]">Tracking Number</p>
            </div>
            <p>373325383577912985</p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-1">
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4_112)">
                  <path
                    d="M11.5 8.25V19.25M11.5 19.25C9.55508 19.25 7.68982 18.4774 6.31455 17.1021C4.93928 15.7268 4.16667 13.8616 4.16667 11.9167M11.5 19.25C13.4449 19.25 15.3102 18.4774 16.6855 17.1021C18.0607 15.7268 18.8333 13.8616 18.8333 11.9167M19.75 11.9167H17.9167M5.08333 11.9167H3.25"
                    stroke="#60679F" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M11.5 8.25C13.0188 8.25 14.25 7.01878 14.25 5.5C14.25 3.98122 13.0188 2.75 11.5 2.75C9.98122 2.75 8.75 3.98122 8.75 5.5C8.75 7.01878 9.98122 8.25 11.5 8.25Z"
                    stroke="#60679F" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_4_112">
                    <rect width="22" height="22" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-xs uppercase bold text-[#60679F]">Weight</p>
            </div>
            <p>0.3 lb</p>
          </div>
          <div className="grid gap-1 ">
            <div className="flex items-center  gap-1">
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4_132)">
                  <path d="M16.0833 2.75L19.75 6.41667L6.91667 19.25L3.25 15.5833L16.0833 2.75Z" stroke="#60679F"
                        stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15.1667 6.41667L13.7917 5.04167" stroke="#60679F" stroke-width="1.375" stroke-linecap="round"
                        stroke-linejoin="round" />
                  <path d="M12.4167 9.16666L11.0417 7.79166" stroke="#60679F" stroke-width="1.375" stroke-linecap="round"
                        stroke-linejoin="round" />
                  <path d="M9.66669 11.9167L8.29169 10.5417" stroke="#60679F" stroke-width="1.375" stroke-linecap="round"
                        stroke-linejoin="round" />
                  <path d="M6.91669 14.6667L5.54169 13.2917" stroke="#60679F" stroke-width="1.375" stroke-linecap="round"
                        stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_4_132">
                    <rect width="22" height="22" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-xs uppercase bold text-[#60679F]">Dimensions</p>
            </div>
            <p>37 x 26 x 7 in</p>
          </div>
        </div>
        <div className="grid gap-4 max-w-md relative z-10">
          <div className="absolute w-[1px] left-2 -z-10 top-2 bottom-0 bg-[#60679F]"></div>
          <div className="grid grid-cols-[auto_1fr] gap-3">
            <div className="mt-1 w-4 h-4 bg-[#F7F7FA] border-[3px] border-[#60679F] rounded-full"></div>
            <div>
              <p>The shipment has arrived at the terminal.</p>
              <time className="text-xs text-[#60679F]" dateTime="2017-02-14">March 23 at 08.20</time>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-3">
            <div className="mt-1 w-4 h-4 border bg-[#F7F7FA] border-[#60679F] rounded-full"></div>
            <div>
              <p>The shipment is in transit.</p>
              <time className="text-xs text-[#60679F]" dateTime="2017-02-14">March 22 at 07.20 </time>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-3">
            <div className="mt-1 w-4 h-4 border bg-[#F7F7FA] border-[#60679F] rounded-full"></div>
            <div>
              <p>The broadcast is sorted and forwarded.</p>
              <time className="text-xs text-[#60679F]" dateTime="2017-02-14">March 22 at 00.38 </time>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-3">
            <div className="mt-1 w-4 h-4 border bg-[#F7F7FA] border-[#60679F] rounded-full"></div>
            <div>
              <p>Consignment has been dispatched to the terminal and forwarded.</p>
              <time className="text-xs text-[#60679F]" dateTime="2017-02-14">March 22 at 00.33</time>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-3">
            <div className="mt-1 w-4 h-4 border bg-[#F7F7FA] border-[#60679F] rounded-full"></div>
            <div>
              <p>We have received information about the shipment, which is currently with the sender or is on its way to
                Brings terminal. The tracking is updated when the shipment has arrived at the terminal in the receiving
                country.</p>
              <time class="text-xs text-[#60679F]" datetime="2017-02-14">March 21 at 07.35</time>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
