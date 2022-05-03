import Head from "next/head";
import Image from "next/image";
import styles from '../styles/onboardingList.module.scss'
import Navigation from "components/navigation";
import { productData } from "data";
import { useState, useRef, useEffect } from 'react';
// import { connectToDatabase, saveToDB } from "lib/mongo";
import axios from 'axios'

const ShowingInterestLink = ({ products }) => {
    const [data, setData] = useState(null);
    const [usersInfo, setUsersInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [access, setAccess] = useState(false);

    useEffect(() => {
        setData(null);
        setUsersInfo(null);
        setLoading(true);
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
                setData({ message: err.response.data.message, success: false })
                setLoading(false);
            });
        const password = prompt("Enter Password");
        if (password !== "alluviumhq123") {
            alert('Wrong Password');
            setAccess(false);
            setLoading(false);
            setData({ message: 'Wrong Password, Kindly refresh your browser to try again', success: false })
        } else {
            setAccess(true);
            // let responseData = null;
            // console.log(responseData);
            // setUsersInfo(null);
        }
    }, [])

    const deleteUser = async (id) => {
        await axios.delete(`/api/user/${id}`)
                .then(res => {
                    // console.log(res);
                    setUsersInfo(prev=>prev.filter(user=>user._id !== id));
                    setData(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    // console.log(err);
                    // setUsersInfo(null);
                    setData({ message: err.response.data.message, success: false })
                    setLoading(false);
                });
    }


    return (
        <div>
            <Head>
                <title>Showing Interest List | Alluvium University</title>
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
                    <div><h1>Showing Interest List</h1></div>
                </div>
                {
                    (data || loading) && (
                        <div className={`${styles.response} ${data ? (data.success ? styles.success : styles.danger) :
                            ''}`}>
                            <div className={`${styles.responseData} ${data ? (data.success ? styles.successBG : styles.dangerBG) : ''}`}>
                            <h3>{loading ? 'Loading...' : data.message}</h3> <button onClick={() => setData(null)}>x</button>
                            </div>
                        </div>
                    )
                }

                {
                    (access && usersInfo) && (
                        <>
                            <div className={styles.tableHolder}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>FullName</th>
                                            <th>FirstName</th>
                                            <th>LastName</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Location</th>
                                            <th>Current Engagement</th>
                                            <th>Applying For Trainee Program?</th>
                                            <th>3 Years Availability?</th>
                                            <th>Expirence Level?</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usersInfo.map((user, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{user.fullname}</td>
                                                    <td>{user.firstname}</td>
                                                    <td>{user.lastname}</td>
                                                    <td>{user.phoneNumber}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.location}</td>
                                                    <td>{user.currentEngagement}</td>
                                                    <td>{user.traineeProgram}</td>
                                                    <td>{user.threeYearsAvailability}</td>
                                                    <td>{user.experienceLevel}</td>
                                                    <td><button onClick={()=>deleteUser(user._id)}>Delete</button></td>
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

export default ShowingInterestLink;


export const getStaticProps = async () => {
    return {
        props: {
            products: productData,
            //   responseData
        }
    }
}