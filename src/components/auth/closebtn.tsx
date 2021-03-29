import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";

const CloseBtn = (params) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/")} className="auth-close-btn">
      <IoMdClose className="text-3xl " />
    </button>
  );
};

export default CloseBtn;
