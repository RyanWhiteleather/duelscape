import {useEffect, useState} from "react";

export default function HomePage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/WeatherForecast')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);
    return (
        <main
            className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-[#000000] via-[#00264d] via-[#003366]  to-[#5d0000] text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                    Epic Duels TEST
                </h1>
            </div>
            <h1>API Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </main>
    );
}
