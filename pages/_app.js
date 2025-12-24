import '../styles/globals.css'
import PaymentAnnouncementPopup from '../components/PaymentAnnouncementPopup'
import WhatsAppFloatButton from '../components/WhatsAppFloatButton'
import TawkToFloatButton from '../components/TawkToFloatButton'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <PaymentAnnouncementPopup />
      <WhatsAppFloatButton />
      <TawkToFloatButton />
    </>
  )
}
