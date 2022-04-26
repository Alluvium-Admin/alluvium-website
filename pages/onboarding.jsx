import Head from "next/head";
import Image from "next/image";
import styles from '../styles/onboarding.module.scss'
import Navigation from "components/navigation";
import { productData } from "data";
import { useState, useRef, useEffect } from 'react';
// import { connectToDatabase, saveToDB } from "lib/mongo";
import axios from 'axios'

const Onboarding = ({ products }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [hideButton, setHideButton] = useState(false);
  const formElem = useRef(null);

  const clearData = () => {
    formElem.current.reset();
    setData(null);
    setLoading(false);
    setResponseData(null);
  }

  //   useEffect(() => {
  //     if (data) {
  //         if (data.firstname && data.lastname) {
  //             setData(prev => prev ? ({ ...prev, fullname: `${data.firstname} ${data.lastname}` }) : { fullname: `${data.firstname} ${data.lastname}` });
  //         }
  //     }
  // }, [data])

  // useEffect(()=>{
  //   console.log(formElem.current);
  // }, [formElem])

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value) {
      setData(prev => prev ? ({ ...prev, [name]: value }) : { [name]: value });
    }

  }

  const handleSubmit = async e => {
    let newData = {...data};
    if (newData.firstname && newData.lastname) {
      newData = { ...newData, fullname: `${newData.firstname} ${newData.lastname}` };
    }
    setHideButton(true);
    console.log(newData);
    setLoading(true);
    e.preventDefault();
    if (newData) {
      const responseData2 = await axios.post('/api/user', newData)
        .then((res) => { console.log(res); return res.data })
        .catch(err => { console.log(err.response.data); return err.response.data });
      console.log(responseData2);
      setResponseData(responseData2);
      setLoading(false);
      setHideButton(false);
      // if(responseData2.success){
      //   e.reset();
      // }

    }
  }

  return (
    <div>
      <Head>
        <title>Showing Interest | Alluvium University</title>
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
          <div><h1>Showing Interest</h1></div>
        </div>
        {
          (responseData || loading) && (
            <div className={`${styles.response} ${responseData ? (responseData.success ? styles.success : styles.danger) : ''}`}>
              <div className={`${styles.responseData} ${responseData ? (responseData.success ? styles.successBG : styles.dangerBG) : ''}`}>
                <h3>{loading ? 'Loading...' : responseData.message}</h3> <button onClick={() => clearData()}>x</button>
              </div>
            </div>
          )
        }
        <form action="#" onSubmit={handleSubmit} ref={formElem}>
          <input type="text" name="firstname" placeholder="First name" id="" onChange={handleChange} required />
          <input type="text" name="lastname" placeholder="Last name" id="" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" id="" onChange={handleChange} required />
          <input type="tel" name="phoneNumber" placeholder="Phone (i.e +234 0812234991)" id="" onChange={handleChange} required />
          <input type="text" name="currentEngagement" placeholder="Current Engagement" id="" onChange={handleChange} required />
          <input type="text" name="location" placeholder="Location" id="" onChange={handleChange} required />
          <select name="traineeProgram" id="" defaultValue='Are you applying for a Trainee Program ?' onChange={handleChange} required>
            <option defaultValue="" disabled>Are you applying for a Trainee Program ?</option>
            <option defaultValue="yes">yes</option>
            <option defaultValue="no">no</option>
          </select>
          <select name="threeYearsAvailability" defaultValue='3 years availability' onChange={handleChange} id="" required>
            <option defaultValue="" disabled>3 years availability</option>
            <option defaultValue="yes">yes</option>
            <option defaultValue="no">no</option>
          </select>
          <select name="experienceLevel" defaultValue='What is your Experience Level ?' id="" onChange={handleChange} required>
            <option defaultValue="" disabled>What is your Experience Level ?</option>
            <option defaultValue="beginner (Less than 1 year)">Beginner (Less than 1 year)</option>
            <option defaultValue="intermediate (1 year)">Intermediate (1 year)</option>
            <option defaultValue="professional (More than 2 year)">Professional (More than 2 year)</option>
          </select>
          {!hideButton && <input type="submit" value="Submit" />}
        </form>
      </main>
    </div>
  );
};

export default Onboarding;


export const getStaticProps = async () => {
  return {
    props: {
      products: productData
    }
  }
}