export default function Header(){
    return(
        <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
        <div class="flex items-center justify-between flex-shrink-0 text-white ml-10">
          <a href="/"><span class="font-semibold text-xl tracking-tight">Eren</span></a>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center justify-between  lg:w-auto" style={{marginLeft: 70 + "rem"}}>
          <div class="text-sm lg:flex-grow">
            <a
              href="/#about"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
            >
              About
            </a>
            <a
              href="/#projects"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
            >
              Projects
            </a>
            <a
              href="/#contact"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    
    );
}