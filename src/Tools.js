import AllBlogs from './AllBlogs';
import useFetch from './useFetch';


/* This example requires Tailwind CSS v2.0+ */


export default function Tools() {
  return (

    <div class="bg-white py-24 sm:py-32 lg:py-40">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="sm:text-center">
      {/* <h2 class="text-lg font-semibold leading-8 text-gray-900">Tools - Libraries - Frameworks</h2> */}
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tools - Libraries - Frameworks</p>
    </div>

    <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
      <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
            <img src="img/react.png" alt="" />
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">React</p>
          </div>
        </div>



        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
          <img src="img/python-logo.png" alt="" />

            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">Python</p>
            {/* <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p> */}
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
          <img src="img/docker-logo.png" alt="" />

            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">Docker</p>
            {/* <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p> */}
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
          <img src="img/rubyonrails.png" alt="" />

            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">Ruby on Rails</p>
            {/* <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p> */}
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
          <img src="img/github.svg" alt="" />

            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">GitHub</p>
            {/* <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p> */}
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
          <img src="img/jslogo.png" alt="" />

            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">JavaScript</p>
            {/* <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p> */}
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
          <img src="img/circle-ci-logo.png" alt="" />

            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">Circle CI</p>
            {/* <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p> */}
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
          <img src="img/material-ui-logo.svg" alt="" />

            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">Material UI</p>
            {/* <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p> */}
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
          <img src="img/tailwind-logo.png" alt="" />

            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">TailwindCSS</p>
            {/* <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p> */}
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
          <img src="img/vue-js-logo.png" alt="" />

            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">Vue</p>
            {/* <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
{/* </div> */}








      <br /> <br />
        <center>
        <div class="bg-gray-50">
        <p class="mt-2 text-xl leading-8 tracking-tight text-gray-900 sm:text-medium">
                Let's Work Together, Get in touch!
                </p>

        <br />


      <p class="mt-2 text-medium leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl hover:text-gray-300">
        <a href="mailto:hi@dwanerich.com">hi@dwanerich.com</a>
      </p>
      <p class="mt-2 text-medium leading-8 tracking-tight text-gray-900 sm:text-xl">

        Software Development | Creative Consultation | Music Production
      </p>

        </div>

        <div class="flex items-center justify-center bg-gray-50">
      <a href="https://www.instagram.com/dwanerich" target="_blank" class="p-3 hover:scale-75"><span><img src="/img/ig-icon.png" width="50px" /></span></a>
      <a href="https://www.twitter.com/dwanerich" target="_blank" class="p-3 hover:scale-75"><span ><img src="img/twitter_icon.png" width="50px" /></span></a>
      <a href="https://www.linkedin.com/in/dwanerich" target="_blank" class="p-3 hover:scale-75"><span><img src="img/linkedin_icon.png" width="50px" /></span></a>

    </div>
        </center>
    </div>
  )
}
