import Head from 'next/head';
import { useEffect, useState } from "react";
import Link from 'next/link';
import Navigation from '../../components/navigation';
import LoadingScreen from 'components/loading';
import ProductStatus from 'components/productStatus';
import styles from "../../styles/statuspage.module.scss";
import { productData, statusInitialData } from '../../data';
import axios from "axios";

export default function StatusPage({ products }) {

    const [ loading, setLoading ] = useState(true);
    const [ productData, setProductData ] = useState(statusInitialData);


    useEffect(() => {
        async function getProductStatus(product) {
            return await axios.get(product.statusLink);
        }

        Promise.all(
            productData.map(data => getProductStatus(data))
        ).then(
            responses => {
                const newArr = [];
                responses.forEach((response, idx) => {
                    const updatedObject = {
                        ...productData[idx],
                        statusData: response.data
                    }
                    newArr.push(updatedObject);
                })
                setProductData(newArr);
                setLoading(false);
            }
        )
    }, []);

    
    return (
        <div className={styles.statusPage}>
            <Head>
                <title>Statuspage | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation theme={"dark"} products={products}/>
            <main>
                <section className={styles.statusPageHeader}>
                    <h2 className={styles.title}>Products Statuspage</h2>
                    <p className={styles.subtitle}>Check out the functionality of all our available products.</p>
                </section>
                <section className={styles.productList}>
                    {
                        loading ? <LoadingScreen/> :
                        productData.map((product,idx) => {
                            return (
                                <ProductStatus product={product} key={ idx }/>
                            )
                        })
                    }
                </section>
            </main>
        </div>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            products: productData,
            statusInitialData: statusInitialData
        }
    }
}