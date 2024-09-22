import { FaClipboardCheck, FaCalendarAlt } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
export const counselorOptions = [
  { id: 1, name: "Chat with Counsellor", icon: <BsWhatsapp  />,bgColor:"bg-pink-400" },
  { id: 2, name: "Talk to Psychologist", icon: <MdOutlinePhoneInTalk />,bgColor:"bg-teal-400" },
  { id: 3, name: "Get a Consultation", icon: <FaClipboardCheck />,bgColor:"bg-blue-400" },
  { id: 4, name: "Book an Appointment", icon: <FaCalendarAlt />,bgColor:"bg-orange-400" },
];