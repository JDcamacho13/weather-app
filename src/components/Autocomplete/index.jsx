import { useState, useEffect, useRef, useContext } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { Loading, SugesstionsList, SugestionItem } from "./styles";
import { Context } from "../../context/WeatherContext";

export const Autocomplete = () => {
  const { updateData } = useContext(Context);
  const controllerRef = useRef(null)
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [sugesstions, setSugesstions] = useState([]);
  const [showSugesstions, setShowSugesstions] = useState(false);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const getAutocomplete = async () => {
      if (debouncedSearch) {
        setLoading(true);
        setSugesstions([]);
        const controller = new AbortController();
        controllerRef.current = controller;
        const req = await fetch(`/api/autocomplete?searchText=${debouncedSearch}`, {
          signal: controllerRef.current?.signal
        })
        const data = await req.json()
        console.log(data)
        setSugesstions(data);
        setLoading(false);
      }
    }
    getAutocomplete();
  }, [debouncedSearch])

  const handlerchange = (e) => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    setLoading(false);
    setSugesstions([]);
    setSearch(e.target.value);
  }

  const onclick = (e) => {
    setSearch(e.target.getAttribute('data-value'));
    setSugesstions([]);
    setShowSugesstions(false);
  }

  const onsubmit = (e) => {
    e.preventDefault();
    setSugesstions([]);
    setShowSugesstions(false);

    const city = search;

    const fecthData = async () => {
      const req = await fetch(`/api/weatherQuery?city=${city}`)
      const data = await req.json()
      updateData(data)
    }
    fecthData();
  }

  return (
    <form onSubmit={onsubmit}>
      <input type="text" placeholder="Buscar" onClick={() => setShowSugesstions(!showSugesstions)} value={search} onChange={handlerchange} />
      {
        ((sugesstions.length > 0 || loading) && showSugesstions) &&
        <SugesstionsList>
          {
            loading &&
            <li>
              <Loading />
            </li>
          }
          {sugesstions.map((city, index) => (
            <SugestionItem onClick={onclick} key={index} data-value={`${city.name},${city.countryCode.toLowerCase()}`} >
              {city.name}, {city.country}
            </SugestionItem>
          ))}
        </SugesstionsList>
      }
    </form>
  )
}