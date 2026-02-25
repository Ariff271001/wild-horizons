export const getDataByQueryParams = (destinations, queryObj) => {
  const { country, continent, is_open_to_public } = queryObj

  if(country){
    destinations = destinations.filter(destination => destination.country.toLowerCase() === country.toLowerCase())
  }

  if(continent){
    destinations = destinations.filter(destination => destination.continent.toLowerCase() === continent.toLowerCase())
  }

  if(is_open_to_public){
    destinations = destinations.filter(destination => destination.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase()))
  }

  return destinations
}