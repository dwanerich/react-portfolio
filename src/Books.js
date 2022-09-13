export default function Books() {

  let readBooks = [
    "Learn to Program",
    "Decoded",
    "The Four Agreements",
    "Clean Code",
    "The Richest Man in Babylon",
    "Tao Te Ching",
    "Your Erroneous Zones"
  ]

  let reading = [
    "Eloquent JavaScript",
    "Cracking the Coding Interview",
    "Zero to One"
  ]
  return (
    <div class="py-12 container">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p class="mt-2 text-5xl leading-8 font-extrabold tracking-tight text-gray-900 hover:text-gray-200">books</p>
      </div>

      <div class='text-2xl'>
    <ul>

        {readBooks.map((item) => <li>{item}</li>)}

        <h2 class='text-green-500'>reading...</h2>

        {reading.map((item) => <li>{item}</li>)}
    </ul>
  </div>

      </div>
      <br /> <br />
        <center>
        <div>
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

        <div class="flex items-center justify-center">
      <a href="https://www.instagram.com/dwanerich" target="_blank" class="p-3 hover:scale-75"><span><img src="img/ig-icon.png" width="50px" /></span></a>
      <a href="https://www.twitter.com/dwanerich" target="_blank" class="p-3 hover:scale-75"><span ><img src="img/twitter_icon.png" width="50px" /></span></a>
      <a href="https://www.linkedin.com/in/dwanerich" target="_blank" class="p-3 hover:scale-75"><span><img src="img/linkedin_icon.png" width="50px" /></span></a>

    </div>
        </center>
    </div>
  )
}
