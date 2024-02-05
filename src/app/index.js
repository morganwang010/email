import Image from "next/image";

export default function Home() {
  return {
    redirect: {
      destination: "http://mail.alivun.com.",
      permanent: false,
    },
  }
}
