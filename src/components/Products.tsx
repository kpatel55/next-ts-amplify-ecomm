import _ from "lodash";
// import Image from "next/image";
import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { latest } from '../__mocks__/latest';
import { API } from "aws-amplify";
import { listProducts } from '../graphql/queries'
import { useEffect, useState } from "react";
import { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { ListProductsQuery, Products } from "../API";

export default function ProductsList() {
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        try {
            const productData = await API.graphql({
                query: listProducts
            }) as {
                data: ListProductsQuery;
                errors: any[];
            };
            setProducts(productData.data.listProducts?.items as Products[])    
        } catch (err) {
            console.log('Unable to fetch products from API');
        }
    }
    
    const shoesList = _.map(products, shoes => (
        <Card key={shoes.id}>
            <CardActionArea>
                <img
                    src={shoes.image_url}
                    alt={shoes.title}
                    height={445}
                    width={465}
                />
                <CardContent>
                    <Typography variant="h5">
                        {shoes.title}
                    </Typography>
                    <Typography variant="h6" sx={{ py: 2, color: '#242F9B' }}>
                        ${shoes.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    ));
    
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 10, px: 15 }}>
            {shoesList}
        </Box>
    );
}