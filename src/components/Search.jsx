export default function Search({ handleSearchChange, searchTerm }){

  const location = window.location.href
  const isPropertyPage = location.includes('all-category-list')  

    return(
<div className="w-full">
<div class={`md:w-[100%] w-[100%] justify-items-center z-10 bg-[#effdf5] mx-auto ${isPropertyPage? 'fixed md:pt-32 pt-32 md:pb-5 pb-4':'pt-20 md:pt-24 md:pb-10 pb-5'}`}>

  <div class="relative">
    <input
      class="w-full bg-[#ffffff27] placeholder:text-slate-400 text-black text-slate-700 text-sm border border-[#0055553d] rounded-full pl-3 pr-16 md:pr-28 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300"
      placeholder="Search here...." 
      value={searchTerm}
      onChange={(e)=>{
        handleSearchChange(e)
      }}
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



