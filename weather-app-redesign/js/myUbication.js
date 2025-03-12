export default ()=>{
    if ('geolocation' in navigator) {
        const success = async(position)=>{
            const {latitude, longitude} = position.coords;
            const url = new URL("https://nominatim.openstreetmap.org/reverse");
            url.searchParams.set("format", "json");
            url.searchParams.set("lat", latitude);
            url.searchParams.set("lon", longitude);
            url.searchParams.set("zoom", 10);
            url.searchParams.set("addressdetails", 1)
            const response = await fetch(url.toString(), {method: "get"});
            const data = await response.json();
            const direccion = data.address;
            return {
                country: direccion.country,
                region: direccion.state,
                county: `${direccion.county || direccion.state_district}`,
                municipality: `${direccion.city || direccion.town || direccion.village}`
            }
        }

        const error = async(err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error);

    } else {
    console.log('La geolocalización NO está disponible en este navegador');
    }      
}