import AllBlogs from './AllBlogs';
import useFetch from './useFetch';


/* This example requires Tailwind CSS v2.0+ */


export default function Tools() {
  return (
    <div class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl hover:text-gray-200">Languages - Tools - Frameworks</p>
      </div>

        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
                  <img src="img/jslogo.png" alt="" />

                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">JavaScript</p>
              </dt>
            </div>

            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
                  <img src="img/rubyonrails.png" alt="" />

                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"  />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Ruby on Rails</p>
              </dt>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
                  <img src="img/react.png" alt="" />

                  <svg class="h-6 w-6" xmlns="" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">React</p>
              </dt>
            </div>

            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
                  <img src="img/redux.png" alt="" />

                  <svg class="h-6 w-6" xmlns="" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Redux</p>
              </dt>
            </div>


            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
                  <img src="img/bootstrap.png" alt="" />

                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Bootstrap</p>
              </dt>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
                  <img src="img/Tailwind_CSS_Logo.svg.png" alt="" />

                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">TailWindCSS</p>
              </dt>
            </div>

            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
                  <img src="img/github.png" alt="" />

                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">GitHub</p>
              </dt>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
                  <img src="img/awslogo.png" alt="" />

                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">AWS</p>
              </dt>
            </div>
          </dl>
        </div>
      </div>
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
