
import './Footer.css';
import telegram from '../media/telegram.png'
import whatsapp from '../media/whatsapp.png'


function Footer() {
  return (
    <div className='footer'>
        <div className='footer_wrapper'>
            <div className='left_footer'>
                <h3 className='contacts'>Contacts</h3>
                <p className='tel_num'>+49 999 999 99 99</p>
                <div className='social_madia'>
                    <div className='tel_div'>
                       <a href='https://t.me/StanimirStaykov'><img src={telegram} className='telegram' alt='telegram'/></a>
                       <p className='tel_text'>Telegram</p>
                    </div>
                    <div className='whats_div'>
                      <a href="https://whatsapp.com/dl/"><img src={whatsapp} className='whatsapp' alt='whatsapp'/></a>
                      <p className='whats_text'>WhatsApp</p>
                    </div>
                </div>

            </div>
            <div className='right_footer'>
                <h3 className='address_name'>Address</h3>
                <p className='address'>Römerberg <br></br> 60311 Frankfurt am Main</p>
                <p className='work'>Working Hours</p>
                <p className='work_h'>24/7</p>
                <p className='st_st'>2023 © Stanimir Staykov</p>
             </div>
            
      
        </div>
        
    </div>
    
  );
}

export default Footer;
