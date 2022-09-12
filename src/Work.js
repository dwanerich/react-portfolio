import Tools from './Tools';

export default function Work() {
  return (
    <>
    <div class="bg-gray-100 border-green">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <h2 class="text-2xl font-bold text-gray-900">Work</h2>

        <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          <div class="group relative">
            <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="img/1bat_cover.png" alt="vinly app cover." class="w-full h-full object-center object-cover" />
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <a href="http://www.1bat.us">
                <span class="absolute inset-0"></span>
                Creative Agency
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">Web Development + Sound Design</p>
          </div>

          <div class="group relative">
            <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="img/covergram.png" alt="vinly app cover." class="w-full h-full object-center object-cover" />
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <a href="http://www.youtube.com/watch?v=NZQPWw1g9f4&t=1s" target="_blank">
                <span class="absolute inset-0"></span>
                CoverGram
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">Album Cover App</p>
          </div>

          <div class="group relative">
            <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="img/twitter.png" alt="twitter logo" class="w-full h-full object-center object-cover" />
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <a href="http://main.d2vhgeq1d91gzo.amplifyapp.com/" target="_blank">
                <span class="absolute inset-0"></span>
                Twitter Clone
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">Exploring under the hood of Twitter and the components behind it all</p>
          </div>

          <div class="group relative">
            <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="img/greenlife.png" alt="plant app logo." class="w-full h-full object-center object-cover" />
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <a href="http://www.youtube.com/watch?v=I4PAbdwW49o" target="_blank">
                <span class="absolute inset-0"></span>
                Green Life
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">Plant Sharing App</p>
          </div>

          <div class="group relative">
            <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="img/medley.png" alt="medicine app logo." class="w-full h-full object-center object-cover" />
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <a href="http://www.youtube.com/watch?v=869TORh6s3I" target="_blank">
                <span class="absolute inset-0"></span>
                Medly
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">Medicine Management App</p>
          </div>

          <div class="group relative">
            <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="img/redemption.png" alt="redemption app cover." class="w-full h-full object-center object-cover" />
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <a href="http://www.youtube.com/watch?v=e-IMtSUc8Ks" target="_blank">
                <span class="absolute inset-0"></span>
                Redemption
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">Visual Ad for Fabric + Frequency</p>
          </div>

        </div>
      </div>
    </div>
    </div>
    <Tools />

</>
  )
}
