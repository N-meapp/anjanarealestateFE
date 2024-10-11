export default function Search({ handleSearchChange, searchTerm }){
    return(
<div>
<div class="md:w-[50%] w-[90%] mx-auto md:mt-40 mt-24">
  <div class="relative">
    <input
      class="w-full bg-[#ffffff27] placeholder:text-slate-400 text-black text-slate-700 text-sm border border-[#0055553d] rounded-full pl-3 pr-16 md:pr-28 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300"
      placeholder="Search here...." 
      value={searchTerm}
      onChange={handleSearchChange}
    />
    <button
      class="absolute top-2 right-2 flex items-center shadow-lg rounded-full bg-white py-2 px-2 border border-transparent text-center text-sm text-[#005555] transition-all hover:shadow focus:bg-slate-700  active:bg-slate-700 hover:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#005555" class="w-4 h-4 md:mr-2">
        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
      </svg>
 
      <h1 className="hidden md:block font-bold">search</h1>
      
    </button> 
  </div>
</div>
</div>
    )
}



