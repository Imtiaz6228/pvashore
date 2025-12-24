import dynamic from "next/dynamic"; export default dynamic(() => import("./google-voice-accounts"), { ssr: false });
