import { AiOutlineStop, AiOutlineSmile, AiOutlineControl } from 'react-icons/ai';
import { FaHandshake } from 'react-icons/fa';
import { GiBookshelf } from 'react-icons/gi'; 
 export const services = [
  {
    id: 1,
    title: "Addiction Habits",
    description: "We provide specialized counseling to help individuals overcome harmful addictions.",
    icon: <AiOutlineStop />,
  },
  {
    id: 2,
    title: "Stress Management",
    description: "Learn effective techniques like meditation and cognitive therapy.",
    icon: <AiOutlineSmile />,
  },
  {
    id: 3,
    title: "Anger Management",
    description: "Our anger management program helps you identify triggers, control emotional outbursts.",
    icon: <AiOutlineControl />,
  },
  {
    id: 4,
    title: "Marital Life Issues",
    description: "We offer couples counseling to address communication breakdowns, rebuild.",
    icon: <FaHandshake />,
  },
  {
    id: 5,
    title: "Child Philosopher",
    description: "We nurture the curious minds of children through philosophical discussions, helping them explore deep questions.",
    icon: <GiBookshelf />, 
  }
];


