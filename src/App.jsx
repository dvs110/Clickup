import React from 'react'
import Navbar from './components/Navbar'
import image3 from "/latest_white_todo.JPG"
import image2 from "/leads_white.JPG"
import image1 from "/White_dashboard.JPG"
import checkmark from "/checkmark.png"
import leadsWhite from "/leads_white.JPG"
import Card from './components/Card'
import Footer from './components/Footer'
import './App.css'

function App() {
  const data = [{
    "heading1": "Managing Property Listings and",
    "heading2": "Inventory:"
  }, {
    "heading1": "Tracking Client Intrections and",
    "heading2": "Preferences:"
  },
  {
    "heading1": "Automating Follow-Ups and",
    "heading2": "Reminders:"
  },
  {
    "heading1": "Analyzing Market Trends and",
    "heading2": "Performances:"
  },
  {
    "heading1": "Coordinating Transactions and",
    "heading2": "Documentation:"
  }
  ]




  return (
    <div>
      <Navbar />


      <div className='section-1' style={{ border: "1px solid black" }}>
        <div className='section-1-left'>
          <div className='gantt-chart'>Gantt Charts</div>

          <div>
            <div className='title' style={{ lineHeight: "1.2", fontSize: "3rem", fontWeight: "800" }}>CRM Software for Real Estate</div>
            <p className='description'>
              Streamline your real estate business operations with ClickUp's customizable CRM software. Organize client information, track leads, and manage transactions all in one place. Boost productivity and stay ahead of the competition with ClickUp's intuitive tools designed to help you close deals faster. Try ClickUp today and experience the difference in your real estate business!
            </p>
          </div>

          <div className='actions'>
            <button className='get-started'>Get Started</button>
            <div className='free-info'>
              <p>Free forever.</p>
              <p>No credit card.</p>
            </div>
          </div>

          <div className='reviews'>
            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
            <p className='reviews-text'>
              25,000+ reviews from
              <img src="https://tse4.mm.bing.net/th?id=OIP.jHQLwTvVoKGcJNKN_5jL3QHaHa&pid=Api&P=0&h=180" alt="images" className='review-img' />
              <img src="https://clipart.info/images/ccovers/1522453412Logo-Snapchat-Png.png" alt="images" className='review-img' />
              <img src="https://tse1.mm.bing.net/th?id=OIP.EhTMbGiYfYzQnWLgjZaoJAHaHa&pid=Api&P=0&h=180" alt="images" className='review-img' />
            </p>
          </div>
        </div>

        <div className='section-1-right'>
          <div className='images'>
            <img src={image1} alt="images1" className='image-1' />
            <img src={image2} alt="images2" className='image-2' />
            <img src={image3} alt="images3" className='image-3' />
          </div>
        </div>
      </div>








      <div className='brand-promotion' style={{ border: "1px solid black" }}>
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Logitech-Symbol.png" alt="brandImage" className='brand-image' />
        <img src="https://tse3.mm.bing.net/th?id=OIP.Z2fS0jPb8fBEFSdg26dR4gHaEK&pid=Api&P=0&h=180" alt="brandImage" className='brand-image' />
        <img src="https://tse3.mm.bing.net/th?id=OIP.BclrukCQrK_hFarUfmZXLQHaEK&pid=Api&P=0&h=180" alt="brandImage" className='brand-image' />
        <img src="https://purepng.com/public/uploads/large/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png" alt="brandImage" className='brand-image' />
        <img src="https://tse3.mm.bing.net/th?id=OIP.Z2fS0jPb8fBEFSdg26dR4gHaEK&pid=Api&P=0&h=180" alt="brandImage" className='brand-image' />
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Logitech-Symbol.png" alt="brandImage" className='brand-image' />
      </div>

      <div className='section-2' style={{ border: "1px solid black" }}>
        <div className='image-container'>
          <img src={image3} alt="images" className='image' />
        </div>
        <div className='text-container'>
          <div className='crm-view'>CRM Views</div>
          <h1 className='title'>See client relationships at a glance.</h1>
          <p className='description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
          </p>
        </div>
      </div>







      <div className='promo-container'>
        <h3 className='promo-title'>Start using Pantheon Vista today</h3>
        <div className='promo-item'>
          <img src={checkmark} alt="tickmark" className='promo-icon' />
          <p className='promo-text'>Manage all your work in one place</p>
        </div>
        <div className='promo-item'>
          <img src={checkmark} alt="tickmark" className='promo-icon' />
          <p className='promo-text'>Collaborate with your team</p>
        </div>
        <div className='promo-item'>
          <img src={checkmark} alt="tickmark" className='promo-icon' />
          <p className='promo-text'>Use Pantheon Vista for Free-forever</p>
        </div>
        <button className='promo-button'>Get Started</button>
      </div>










      <div className="section-3">
        <div className="section-3-content">
          <div className="relationships-label">Relationships</div>
          <h1 className="section-title">Build the perfect customer database.</h1>
          <p className="section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. hsbdohsdovisudhnvlndboskvnakbd
            hvbiaksd viuasdv joajsdvoa sdv asdvaosdvoadv dsoal dpsnoidvn vo fugit nostrum corporis,
            neque, corrupti impedit.
          </p>
        </div>
        <div className="image-container">
          <img src={leadsWhite} alt="images" className="section-image" />
        </div>
      </div>




      <div className="section-4">
        <h1 className="section-title">Ways To Use a CRM for Real Estate</h1>
        <h2 className="section-subtitle">Lead Tracking and Qualification</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi ex sed iste vero
          suscipit doloribus voluptas. Sint quaerat ipsum ullam fugiat pariatur reiciendis earum. Quam
          ipsam dicta dignissimos quasi.
        </p>
        <h2 className="section-subtitle">Pipeline Management</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi ex sed iste vero
          suscipit doloribus voluptas. Sint quaerat ipsum ullam fugiat pariatur reiciendis earum. Quam
          ipsam dicta dignissimos quasi.
        </p>
        <h2 className="section-subtitle">Customer Analytics and Reporting</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi ex sed iste vero
          suscipit doloribus voluptas. Sint quaerat ipsum ullam fugiat pariatur reiciendis earum. Quam
          ipsam dicta dignissimos quasi.
        </p>
        <h2 className="section-subtitle">Account and Contact Management</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi ex sed iste vero
          suscipit doloribus voluptas. Sint quaerat ipsum ullam fugiat pariatur reiciendis earum. Quam
          ipsam dicta dignissimos quasi.
        </p>
      </div>






      <div className="section-5" >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 className="section-title1" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Challenges a CRM Tool Solves for</h1>
          <h1 className="section-title2" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "2.5rem" }}>Real Estate</h1>

        </div>

        <div className="grid-container">
          {data.map((item) => {
            return <Card items={item} />;
          })}
        </div>
      </div>






      <h1 className="section-title text-center mr-60 mb-10">Frequently Asked Questions</h1>
      <div className="section-6">
        <div className="faq-body">
          <h1 className="faq-question">How can CRM software help me manage my real estate leads and contacts more effectively?</h1>
          <p className="faq-answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nulla autem, ducimus nisi corporis dolorum molestiae voluptas...</p>
        </div>
        <div className="faq-body">
          <h1 className="faq-question">What features should I look for in CRM software for real estate?</h1>
          <p className="faq-answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nulla autem, ducimus nisi corporis dolorum molestiae voluptas...</p>
        </div>
        <div className="faq-body">
          <h1 className="faq-question">Can CRM software for real estate help me automate my marketing and follow-up processes?</h1>
          <p className="faq-answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nulla autem, ducimus nisi corporis dolorum molestiae voluptas...</p>
        </div>
      </div>




      <div className="last-section">
        <div className="gantt-label">Gantt Charts</div>
        <h1 className="gantt-title">Get started with Gantt Charts now</h1>
        <button className="get-started-btn">Get Started</button>
      </div>

      <img src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-and-lines-1/2/10-1024.png" alt="chat" className="chat-icon" />


      <Footer />
    </div>
  )
}

export default App
