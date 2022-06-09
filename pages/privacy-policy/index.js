// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// import type { NextPage } from "next";
import Head from "next/head";
import Navigation from '../../components/navigation';
// import Footer from "../components/Footer";
import BannerRotate from "../../components/BannerRotate";
import styles from "../../styles/Privacypolicy.module.scss";
import List from "../../components/privacy_policy/List";
import { productData } from '../../data';

const PrivacyPolicy = ({products}) => {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Alluvium</title>

        <meta name="description" content="Alluvium University privacy policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="">
        <Navigation products={products}/>
        </section>
		{/* <section className={styles.welcome}>
			<div>
				<h1>Privacy Policy</h1>
				<p>How we handle your data</p>
			</div>
		</section> */}
        <section>
          <BannerRotate bg="url(assets/privacy-policy/banner.png)" title="Privacy Policy" text="" />
        </section>
		<section className="container pb-5">
		<div className={styles.privacy}>
            <div className="">
				<h3 className="text-center pb-4">How we handle your data</h3>
				<p className="text-justify">This privacy policy ("policy") will help you understand how Alluvium ("us", "we", "our") uses and protects the data you provide to us when you visit and use <a target="_blank" href="https://alluvium.net/">https://alluvium.net</a> ("website", "service"). We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.</p>
            </div>

			<div className="data-collection py-3">
				<h3>What User Data We Collect</h3>
				<p>When you visit the website, we may collect the following data:</p>
				<ul>
					<List content="Our IP address."/>
					<List content="Your contact information and email address."/>
					<List content="Other information such as interests and preferences."/>
					<List content="Data profile regarding your online behavior on our website."/>
				</ul>
			</div>

			<div className="data-collection py-3">
				<h3>Why We Collect Your Data</h3>
				<p>We are collecting your data for several reasons:</p>
				<ul>
					<List content="To better understand your needs."/>
					<List content="To improve our services and products."/>
					<List content="To send you promotional emails containing the information we think you will find interesting."/>
					<List content="To contact you to fill out surveys and participate in other types of market research."/>
					<List content="To customize our website according to your online behavior and personal preferences."/>
				</ul>
			</div>

			<div className="">
				<h3 className="pb-4">Safeguarding and Securing the Data</h3>
				<p className="text-justify">Alluvium is committed to securing your data and keeping it confidential. Alluvium has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.</p>
            </div>

			<div className="">
				<h3 className="pb-4">Our Cookie Policy</h3>
				<p className="text-justify">Once you agree to allow our website to use cookies, you also agree to use the data it collects regarding your online behavior (analyze web traffic, web pages you spend the most time on, and websites you visit). <br />
				The data we collect by using cookies is used to customize our website to your needs. After we use the data for statistical analysis, the data is completely removed from our systems.
				Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you.
				If you want to disable cookies, you can do it by accessing the settings of your internet browser. (Provide links for cookie settings for major internet browsers).</p>
            </div>

			<div className="">
				<h3 className="pb-4">Links to Other Websites</h3>
				<p className="text-justify">Our website contains links that lead to other websites. If you click on these links Alluvium is not held responsible for your data and privacy protection. Visiting those websites is not governed by this privacy policy agreement. Make sure to read the privacy policy documentation of the website you go to from our website.</p>
            </div>

			<div className="">
				<h3 className="pb-4">Restricting the Collection of your Personal Data</h3>
				<p className="text-justify">At some point, you might wish to restrict the use and collection of your personal data. You can achieve this by doing the following: <br />
				When you are filling the forms on the website, make sure to check if there is a box which you can leave unchecked, if you don't want to disclose your personal information.
				If you have already agreed to share your information with us, feel free to contact us via email and we will be more than happy to change this for you. <br />
				Alluvium will not lease, sell or distribute your personal information to any third parties, unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.
				</p>
            </div>
        </div>
		</section>
        
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default PrivacyPolicy;

export const getStaticProps = async () =>{
    return {
      props:{
        products: productData
      }
    }
}
  