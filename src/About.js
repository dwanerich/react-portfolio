const About = () => {
  return (
<div class="relative overflow-hidden">
  <div class="mx-auto max-w-7xl">
    <div class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
      <svg class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div >
        <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
          <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div class="flex w-full items-center justify-between md:w-auto">


              </div>
            </div>

          </nav>
        </div>
      </div>

      <main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">About Dwane</span>
            {/* <span class="block text-indigo-600 xl:inline">online business</span> */}
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Early career Software Developer experienced in Healthcare, Entertainment and DevOps(B2B SaaS).

Driven by curiosity, critical thinking and exploring the different ways to leverage technology to architect solutions for users and businesses.

As a designer, developer and cross-functional collaborator, by adopting a growth mindset with a tight feedback loop, my solution iteration process strengthens. Failing fast; failing forward.

Interests: #VR #AR #ML #AI #Blockchain </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
            <a href="https://drive.google.com/file/d/1j4Iwu_951aeAUOTx32rZ99zzhjNzYFmU/view?usp=sharing" target="_blank" rel="noreferrer" class="flex w-full items-center justify-center rounded-md border border-transparent  text-black border-black px-8 py-3 text-base font-medium text-white  hover:bg-yellow-300 hover:bg-transparent hover:text-black md:py-4 md:px-10 md:text-lg on:hover bg-yellow">resume</a>
            </div>

          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    {/* <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="" alt="dwane richards avatar" /> */}
  </div>
        <br />
    <center>
      <p class="mt-2 text-medium leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl hover:text-green-500">
          < a href="mailto:dwanerich@gmail.com" target="_blank" rel="noreferrer">LET'S TALK</a>
      </p>
    </center>
</div>
   );
}

export default About;
