import dynamic from "next/dynamic"; export default dynamic(() => import("./facebook-pva-accounts"), { ssr: false });
