import '../styles/globals.css'
import PaymentAnnouncementPopup from '../components/PaymentAnnouncementPopup'
import WhatsAppFloatButton from '../components/WhatsAppFloatButton'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <PaymentAnnouncementPopup />
      <WhatsAppFloatButton />
    </>
  )
}
