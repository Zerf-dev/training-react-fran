import Search from "../assets/search.svg"

export default function SearchBar(){

    return(
        <div className="p-0.5 w-full flex flex-row border border-red-800 rounded-md">
          <Search className="px-1 w-9 relative top-0.5"/>
          <input
            name="buscador"
            className="w-full outline-none"
            type="text"
            placeholder="Buscá una receta"
          />
        </div>
    );
}