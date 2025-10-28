import {
  BellRing,
  MessageCircle,
  SendHorizontal,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    position: relative;
    padding: 10px 24px;
    font-size: 18px;
    color: white;
    background-color: red;
    border-radius: 34px;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
  }

  .button::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: inherit;
    scale: 0;
    z-index: -1;
    background-color: white;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .button:hover::before {
    scale: 3;
  }

  .button:hover {
    color: #212121;
    scale: 1.1;
    box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
  }

  .button:active {
    scale: 1;
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.5 },
  },
};

const commentVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.3 } },
};

export default function Tube() {
  const [subscribed, setSubscribed] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [openComments, setOpenComments] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(!subscribed);

    if (subscribed) {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "You cancelled Subscribe!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thank you for your Subscribed!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleOpenComments = () => {
    setOpenComments(!openComments);
  };

  useEffect(() => {
    async function loadComments() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComments(res.data);
      } catch (err) {
        setError(err);
      }
    }
    loadComments();
  }, []);

  return (
    <section className="bg-black min-h-screen px-4 py-10 sm:px-6 lg:px-10">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE - Video & Channel Info */}
        <div className="flex flex-col gap-8 w-full lg:w-2/3">
          <div className="relative w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/9GyvhS4-23A?si=LBtKRK18tYEujPj0"
              title="YouTube video player"
              className="w-full h-full rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="text-white flex flex-col sm:flex-row sm:items-center gap-6">
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
                src="https://yt3.googleusercontent.com/ytc/AIdro_ke-sik78y_gT1MFM7byH0C7bNFuLGhst3ZT_kkarfJnw=s900-c-k-c0x00ffffff-no-rj"
                alt="channel avatar"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-bold tracking-wide">
                  Xurshid Rasulov
                </h1>
                <span className="text-sm font-semibold tracking-wide">
                  3k subscribers
                </span>
              </div>

              <StyledWrapper>
                <button onClick={handleSubscribe} className="button">
                  {subscribed ? <BellRing /> : "Subscribe"}
                </button>
              </StyledWrapper>
            </div>

            <div className="relative flex justify-center sm:justify-end">
              <div className="absolute -inset-2 rounded-full bg-pink-400/30 blur-2xl -z-10" />
              <div className="flex items-center text-white gap-2 p-1.5 rounded-full bg-white/6 backdrop-blur-md ring-1 ring-white/10 shadow-lg">
                <button className="p-3 rounded-full hover:bg-white/10 hover:scale-105 transition">
                  <ThumbsUp size={18} />
                </button>
                <button className="p-3 rounded-full hover:bg-white/10 hover:scale-105 transition">
                  <ThumbsDown size={18} />
                </button>
                <button className="p-3 rounded-full hover:bg-white/10 hover:scale-105 transition">
                  <SendHorizontal size={18} />
                </button>
                <button
                  onClick={handleOpenComments}
                  className="p-3 rounded-full hover:bg-white/10 hover:scale-105 transition"
                >
                  <MessageCircle size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Comments */}
        <div className="w-full lg:w-1/3">
          <h1 className="bg-red-500 text-center py-3 mb-6 rounded-2xl text-white font-bold text-lg sm:text-xl">
            Comments
          </h1>

          <AnimatePresence mode="wait">
            {openComments ? (
              <motion.div
                key="comments"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="border-l-2 border-red-500 w-full px-6 sm:px-8 h-[400px] sm:h-[500px] lg:h-[620px] overflow-y-scroll custom-scroll"
              >
                {comments.map((msg) => (
                  <motion.div
                    key={msg.id}
                    variants={commentVariants}
                    className="text-white mb-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-linear-to-r from-red-600 to-pink-500 p-2 rounded-lg shadow-lg shadow-red-700/30">
                      <h1 className="text-base sm:text-lg font-semibold capitalize">
                        {msg.name.slice(0, 8)}
                      </h1>
                      <h1 className="text-xs sm:text-sm italic break-all">
                        {msg.email}
                      </h1>
                    </div>

                    <p className="p-3 text-sm leading-relaxed bg-[#1e1e1e] rounded-b-lg border border-red-500/30">
                      {msg.body}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.h1
                key="no-comments"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="text-white text-center text-lg sm:text-xl font-semibold"
              >
                No comments yet...
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
