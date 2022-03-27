import Head from "next/head";
import Image from "next/image";
import styles from '../styles/onboardingList.module.scss'
import Navigation from "components/navigation";
import { productData } from "data";
import { useState, useRef, useEffect } from 'react';
// import { connectToDatabase, saveToDB } from "lib/mongo";
import axios from 'axios'

const OnboardingList = ({ products }) => {
    const [data, setData] = useState(null);
    const [usersInfo, setUsersInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setData(null);
        setUsersInfo(null);
        setLoading(true);
        const password = prompt("Enter Password");
        if (password !== "alluviumhq123") {
            alert('Wrong Password');
        } else {
            // let responseData = null;
            axios.get('/api/user')
                .then(res => {
                    // console.log(res);
                    setData(res.data);
                    setUsersInfo(res.data.users);
                    setLoading(false);
                })
                .catch(err => {
                    // console.log(err);
                    setUsersInfo(null);
                    setData({ message: err.message, success: false })
                    setLoading(false);
                });
                // console.log(responseData);
                // setUsersInfo(null);
        }
    }, [])


    return (
        <div>
            <Head>
                <title>Onboarding List | Alluvium University</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
                />
                <meta
                    name="keywords"
                    content="alluvium, team alluvium, atlassian products migration lab, atlassian, jira"
                />
            </Head>
            <Navigation products={products} />
            <main id={styles.main}>
                <div className={styles.header}>
                    <div>
                        <Image
                            priority
                            alt="Alluvium university logo"
                            src="/assets/AULogoWhite.svg"
                            quality={100}
                            height={74}
                            width={79.69}
                        />
                    </div>
                    <div><h1>Onboarding List</h1></div>
                </div>
                {
                    (data || loading) && (
                        <div className={`${styles.response} ${data ? (data.success ? styles.success : styles.danger) :
                            ''}`}>
                            <h3>{loading ? 'Loading' : data.message}</h3> <button onClick={()=>setData(null)}>x</button>
                        </div>
                    )
                }

                {
                    usersInfo && (
                        <>
                            <div className={styles.tableHolder}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>FullName</th>
                                            <th>Email</th>
                                            <th>Location</th>
                                            <th>Current Engagement</th>
                                            <th>Applying For Trainee Program?</th>
                                            <th>3 Years Availability?</th>
                                            <th>Expirence Level</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usersInfo.map((user, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{user.fullname}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.location}</td>
                                                    <td>{user.currentEngagement}</td>
                                                    <td>{user.traineeProgram}</td>
                                                    <td>{user.threeYearsAvailability}</td>
                                                    <td>{user.experienceLevel}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )
                }
            </main>
        </div>
    );
};

export default OnboardingList;


export const getStaticProps = async () => {
    return {
        props: {
            products: productData,
            //   responseData
        }
    }
}