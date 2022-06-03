import { useState, useEffect, useRef, useContext } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { SearchInput, Loading, SugesstionsList, SugestionItem, SeacrhLoading } from "./styles";
import { Context } from "../../context/WeatherContext";

export const Autocomplete = ({ setToggleSearch }) => {
  const { updateData } = useContext(Context);
  const controllerRef = useRef(null)
  const formRef = useRef(null)
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [sugesstions, setSugesstions] = useState([]);
  const [showSugesstions, setShowSugesstions] = useState(false);
  const debouncedSearch = useDebounce(search, 500);
  const [loadingData, setLoadingData] = useState(false);


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

  const fecthNewData = async (city) => {
    setSugesstions([]);
    setShowSugesstions(false);
    setLoadingData(true);

    try {
      const req = await fetch(`/api/weatherQuery?city=${city}`)
      const data = await req.json()

      if (req.status === 200) {
        updateData(data);
        setSearch('');
        setToggleSearch(false);
      } else {
        alert('Intenta con otra ciudad')
      }
    }
    catch (err) {
      alert('Intenta con otra ciudad')
    }
    setLoadingData(false);
  }

  const onclick = (city) => {
    setSearch(city);
    setSugesstions([]);
    setShowSugesstions(false);
    fecthNewData(city)
  }

  const onsubmit = (e) => {
    e.preventDefault();
    fecthNewData(search);
  }

  return (
    <form onSubmit={onsubmit} ref={formRef} style={{ position: 'relative' }}>
      <SearchInput type="text" placeholder="Buscar" onClick={() => setShowSugesstions(true)} value={search} onChange={handlerchange} disabled={loadingData} />
      {loadingData && <SeacrhLoading />}
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
            <SugestionItem onClick={(e) => onclick(city.name)} key={index}  >
              {city.name}, {city.country}
            </SugestionItem>
          ))}
        </SugesstionsList>
      }
    </form>
  )
}