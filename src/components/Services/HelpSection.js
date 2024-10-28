// // components/HelpSection.js

// import Image from "next/image";
// import addiction from "../../../public/Addiction.png"
// import anger from "../../../public/anger.png"
// import child from "../../../public/child.png"
// import martial from "../../../public/martial.png"
// import stress  from "../../../public/stress.png"
// const helpSections = [
//     {
//       title: 'Addiction',
//       description: 'Overcoming addiction requires comprehensive support, patience, and understanding. Our addiction counseling services help individuals address the root causes of substance or behavioral dependencies. By developing coping mechanisms, we enable clients to manage their urges and build a sustainable recovery path. Whether struggling with alcohol, drugs, or behavioral issues, our approach is centered on fostering resilience, creating personalized strategies, and supporting clients in regaining control over their lives. We believe in compassionate, non-judgmental care to help individuals make positive changes and rebuild their lives beyond addiction.',
//       icon: addiction, // Replace with correct icon paths
//     },
//     {
//       title: 'Stress Management',
//       description: 'Stress affects mental and physical well-being, making it crucial to develop effective coping strategies. Our stress management sessions offer tools and techniques tailored to reduce stress, improve mindfulness, and increase resilience. We help clients identify stress triggers and manage them through relaxation exercises, cognitive restructuring, and lifestyle adjustments. Whether work-related stress, personal challenges, or other pressures, our program equips clients with practical skills to achieve greater peace and emotional balance, empowering them to handle stressors with clarity and confidence.',
//       icon: stress,
//     },
//     {
//       title: 'Anger Management',
//       description: 'Anger is a natural emotion, but managing it effectively can be challenging. Our anger management program provides techniques to help individuals understand the underlying causes of their anger and learn to control their responses. Through cognitive-behavioral approaches, clients gain skills in recognizing triggers, practicing self-regulation, and communicating more effectively. We focus on transforming anger into constructive expression, enabling individuals to maintain positive relationships and lead a more peaceful, balanced life.',
//       icon:  anger,
//     },
//     {
//       title: 'Marital Life Issues',
//       description: 'Marital challenges can arise from miscommunication, differing values, or unresolved conflicts. Our counseling for marital life issues focuses on enhancing communication, empathy, and understanding between partners. Through guided discussions and conflict resolution strategies, we help couples reconnect, navigate challenges, and build a healthier, more harmonious relationship. Whether dealing with trust issues, intimacy challenges, or other marital difficulties, our sessions are designed to strengthen bonds and foster mutual respect, helping couples rediscover joy and partnership in their relationship.',
//       icon:  martial,
//     },
//     {
//       title: 'Child Counselor',
//       description: 'Supporting children s emotional and psychological growth is essential for their development. Our child counseling services provide a safe space where children can express their feelings, navigate challenges, and build self-esteem. We address issues such as anxiety, behavioral changes, and academic pressures, using age-appropriate methods to help children understand and manage their emotions. Through creative therapy, play-based techniques, and personalized support, we aim to empower children to communicate effectively, cope with challenges, and grow into resilient individuals.',
//       icon:  child,
//     },
//   ];
  

// const HelpSection = () => {
//   return (
//     <div className="flex flex-col items-center px-6 py-10">
//       <h1 className="text-2xl font-semibold mb-6">How can I help You Today</h1>
//       <div className="flex flex-col gap-6 w-full lg:max-w-[90%]">
//         {helpSections.map((section, index) => (
//           <div
//             key={index}
//             className={`flex items-center md:flex-row flex-col justify-center gap-6 p-6 bg-custom-gradient5 md:justify-between ${index%2==0 ? "md:rounded-l-full":"md:rounded-r-full md:flex-row-reverse" } `}
//           >
//             <div className="flex-shrink-0 bg-yellow-200 p-4 overflow-hidden rounded-full ">
//                 <Image src={section.icon}  className="w-[300px] h-[300px]"/>
//               {/* <img src={addiction} alt={`${section.title} icon`} className="w-full h-full" /> */}
//             </div>
//             <div className="md:ml-10">
//               <h2 className="text-xl font-bold mb-2">{section.title}</h2>
//               <p className="text-gray-700 text-lg font-[Inter]">{section.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HelpSection;
// components/HelpSection.js

import Image from "next/image";
import addiction from "../../../public/Addiction.png";
import anger from "../../../public/anger.png";
import child from "../../../public/child.png";
import martial from "../../../public/martial.png";
import stress from "../../../public/stress.png";

const helpSections = [
  {
    title: "Addiction",
    description:
      "Overcoming addiction requires comprehensive support, patience, and understanding. Our addiction counseling services help individuals address the root causes of substance or behavioral dependencies. By developing coping mechanisms, we enable clients to manage their urges and build a sustainable recovery path. Whether struggling with alcohol, drugs, or behavioral issues, our approach is centered on fostering resilience, creating personalized strategies, and supporting clients in regaining control over their lives.",
    icon: addiction,
  },
  {
    title: "Stress Management",
    description:
      "Stress affects mental and physical well-being, making it crucial to develop effective coping strategies. Our stress management sessions offer tools and techniques tailored to reduce stress, improve mindfulness, and increase resilience. We help clients identify stress triggers and manage them through relaxation exercises, cognitive restructuring, and lifestyle adjustments.",
    icon: stress,
  },
  {
    title: "Anger Management",
    description:
      "Anger is a natural emotion, but managing it effectively can be challenging. Our anger management program provides techniques to help individuals understand the underlying causes of their anger and learn to control their responses. Through cognitive-behavioral approaches, clients gain skills in recognizing triggers, practicing self-regulation, and communicating more effectively.",
    icon: anger,
  },
  {
    title: "Marital Life Issues",
    description:
      "Marital challenges can arise from miscommunication, differing values, or unresolved conflicts. Our counseling for marital life issues focuses on enhancing communication, empathy, and understanding between partners. Through guided discussions and conflict resolution strategies, we help couples reconnect and build healthier relationships.",
    icon: martial,
  },
  {
    title: "Child Counselor",
    description:
      "Supporting children's emotional and psychological growth is essential for their development. Our child counseling services provide a safe space where children can express their feelings, navigate challenges, and build self-esteem. We address issues such as anxiety, behavioral changes, and academic pressures, using age-appropriate methods to help children understand and manage their emotions.",
    icon: child,
  },
];

const HelpSection = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 py-10">
      <h1 className=" text-2xl sm:text-3xl font-semibold mb-6 text-center">How can I help You Today</h1>
      <div className="flex flex-col gap-8 w-full lg:max-w-[90%]">
        {helpSections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 px-3 py-6 sm:px-6 bg-custom-gradient5 md:justify-between ${
              index % 2 === 0 ? "md:rounded-l-full" : "md:rounded-r-full md:flex-row-reverse"
            }`}
          >
            <div className="flex-shrink-0 bg-yellow-200 p-4 overflow-hidden rounded-full">
              <Image
                src={section.icon}
                width={150}
                height={150}
                alt={`${section.title} icon`}
                className="w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold mb-2">{section.title}</h2>
              <p className="text-gray-700 text-base sm:text-lg font-[Inter]">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpSection;
