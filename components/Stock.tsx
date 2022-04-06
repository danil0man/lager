import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import config from '../config/config.json';

function StockList() {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        fetch(
            `${config.base_url}/products?api_key=${config.api_key}`
        )
            .then((response) => response.json())
            .then((result) => setProducts(result.data));
    }, []);

    const list = products.map((product, index) => (
        <Text
            key={index}
            style={{
                fontSize: 16,
                paddingBottom: 4,
                fontFamily: 'cAntique',
            }}
        >
            {product.name} - {product.stock} st
        </Text>
    ));

    return <View>{list}</View>;
}

export default function Stock() {
    return (
        <>
            <Text
                style={{
                    color: '#333',
                    fontSize: 24,
                    fontFamily: 'cPro',
                }}
            >
                Lagerforteckning
            </Text>
            <Text>
                <StockList />
            </Text>
        </>
    );
}
