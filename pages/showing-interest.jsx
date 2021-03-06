import Head from "next/head";
import Image from "next/image";
import styles from '../styles/onboarding.module.scss'
import Navigation from "components/navigation";
import { productData } from "data";
import { useState, useRef, useEffect } from 'react';
import { databaseURI } from '../config/index.js';
// import Image from "next/image";
// import { connectToDatabase, saveToDB } from "lib/mongo";
import axios from 'axios'
const OurDemands = [
  'Commit to a 3 year contract',
  'Commit to learning and flexibility',
  '3 months on-site training in Ekiti',
  '9 months apprenticeship (remote/on-site mix)',
  '24 months internship (remote/on-site mix)'
];
const OurOffers = [
  'YOU ARE EMPLOYED FROM DAY 1',
  'YOU START EARNING FROM #50,000 PER MONTH',
  'EQUIPMENTS AND TRAINING',
  'no CAP ON HOW MUCH YOU CAN EARN WITH BONUSES'
];


const Demands = ({ demands }) => {
  return (
    <div className={styles.demands}>
      {
        demands.map((demand, index) =>
          <div key={index} className={styles.demand}>
            <img
              src={'/assets/test-confirmation/bulletpoint.png'}
              width={15}
              height={15}
              style={{ marginTop: '7px' }}
              // priority
              layout="fixed"
            />
            <p className={styles.demandText}>{demand}</p>
          </div>
        )
      }
    </div>
  )
}

const Onboarding = ({ products }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formDisabled, setFormDisabled] = useState(true);
  const [showFeedback, setShowFeedback] = useState(true);
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

  useEffect(() => {
    testDb();
  }, [])

  const testDb = async () => {
    await axios.get('/api/user/test')
      .then((res) => { console.log(res.data.message) })
      .catch(err => { console.log(err.response.data.message) });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value) {
      setData(prev => prev ? ({ ...prev, [name]: value }) : { [name]: value });
    }

  }

  const handleSubmit = async e => {
    if (!formDisabled) {
      let newData = { ...data };
      if (newData.firstname && newData.lastname) {
        newData = { ...newData, fullname: `${newData.firstname} ${newData.lastname}` };
      }
      setHideButton(true);
      // console.log(newData);
      setLoading(true);
      e.preventDefault();
      if (newData) {
        const responseData2 = await axios.post('/api/user', newData)
          .then((res) => { return res.data })
          .catch(err => { return err.response.data });
        // console.log(responseData2);
        setResponseData(responseData2);
        setLoading(false);
        setHideButton(false);
        // if(responseData2.success){
        //   e.reset();
        // }

      }
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
        <div className={styles.sideBar}>
          <div className={styles.sideBarContent}>
            <h1 style={{ marginTop: '0px' }}>What we ask ?</h1>
            <Demands demands={OurDemands} />
            <h1 style={{ marginTop: '50px' }}>What you get ?</h1>
            <Demands demands={OurOffers} />
          </div>
        </div>
        <div className={styles.rightbar}>
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
            showFeedback &&
            <div className={`${styles.feedback}`}>
              <div className={`${styles.feedbackData}`}>
                <h3>
                  Thanks for your interest!
                </h3>
                <h3>
                  but the opportunity is closed.
                </h3>
                <button onClick={() => setShowFeedback(false)}>Close</button>
              </div>
            </div>
          }
          {
            (responseData || loading) && (
              <div className={`${styles.response} ${responseData ? (responseData.success ? styles.success : styles.danger) : ''}`}>
                <div className={`${styles.responseData} ${responseData ? (responseData.success ? styles.successBG : styles.dangerBG) : ''}`}>
                  <h3>{loading ? 'Loading...' : responseData.message}</h3> <button onClick={() => clearData()}>x</button>
                </div>
              </div>
            )
          }
          <form action="#" onSubmit={handleSubmit} ref={formElem} disabled={formDisabled}>
            <input type="text" name="firstname" disabled={formDisabled} placeholder="First name" id="" onChange={handleChange} required />
            <input type="text" name="lastname" disabled={formDisabled} placeholder="Last name" id="" onChange={handleChange} required />
            <input type="email" name="email" disabled={formDisabled} placeholder="Email" id="" onChange={handleChange} required />
            <input type="tel" name="phoneNumber" disabled={formDisabled} placeholder="Phone (i.e +234 0812234991)" id="" onChange={handleChange} required />
            <input type="text" name="currentEngagement" disabled={formDisabled} placeholder="Current Engagement" id="" onChange={handleChange} required />
            <input type="text" name="location" disabled={formDisabled} placeholder="Location" id="" onChange={handleChange} required />
            <select name="traineeProgram" disabled={formDisabled} id="" defaultValue='Are you applying for a Trainee Program ?' onChange={handleChange} required>
              <option defaultValue="" disabled>Are you applying for a Trainee Program ?</option>
              <option defaultValue="yes">yes</option>
              <option defaultValue="no">no</option>
            </select>
            <select name="threeYearsAvailability" disabled={formDisabled} defaultValue='3 years availability' onChange={handleChange} id="" required>
              <option defaultValue="" disabled>3 years availability</option>
              <option defaultValue="yes">yes</option>
              <option defaultValue="no">no</option>
            </select>
            <select name="experienceLevel" disabled={formDisabled} defaultValue='What is your Experience Level ?' id="" onChange={handleChange} required>
              <option defaultValue="" disabled>What is your Experience Level ?</option>
              <option defaultValue="beginner (Less than 1 year)">Beginner (Less than 1 year)</option>
              <option defaultValue="intermediate (1 year)">Intermediate (1 year)</option>
              <option defaultValue="professional (More than 2 year)">Professional (More than 2 year)</option>
            </select>
            {!hideButton && <input type="submit" disabled={formDisabled} value="Submit" />}
          </form>
        </div>
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