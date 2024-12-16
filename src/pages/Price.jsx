import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Price (props) {
    const apiKey ='80735585-C404-40B1-81E4-CA0DD14EFDC9';
    const params = useParams()
    const symbol = params.symbol 
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    console.log(url);

    const [ coin, setCoin ] = useState('null');

    const getCoin = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCoin(data);
        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getCoin()}, []);

    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    };

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    };

    return coin && coin.rate ? loaded() : loading();
        
}

export default Price;