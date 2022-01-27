// types
import { NextPage } from 'next';

// components
import { Head } from 'components/common';

const people = [
  {
    name: 'Ankit',
    role: 'Co-CEO & Co-Founder',
    imageUrl: '/images/team/Ankit.png',
    bio: 'Founding Member of the Sapien Tribe, Co-CEO & Co-Founder of Sapien Network. Ankit has a passion for understanding the status quo and shaping social systems to be more aligned with Nature, Culture, and Technology. As an Indian immigrant and a believer in equal opportunity, he seeks the truth in order to create and live a mindful life that harmonizes his story with the story of his tribes.',
  },
  {
    name: 'Rob',
    role: 'Co-CEO & Co-Founder',
    imageUrl: '/images/team/Rob.png',
    bio: 'Founding Member of the Sapien Tribe, Co-Ceo & Co-founder of Sapien Network. Rob is a lifelong student of many disciplines and understands the vital importance of seeing the world through many different perspectives. Never content to let the status quo remain unchallenged, Rob seeks to apply his knowledge of Mathematics, Technology, Culture and History to build tools to empower people and their tribes to achieve their full potential.',
  },
  {
    name: 'Teja',
    role: 'CCO',
    imageUrl: '/images/team/Teja.jpeg',
    bio: `Founding member of the Sapien Tribe, Chief Communications Officer of the Sapien Network. Teja is dedicated to the learning process and seeks to foster curiosity in himself and others. Teja earned his <span class='underline decoration-indigo-500 decoration-2 font-bold dark:text-white font-medium'>BS in Computer Engineering from UC Davis in 2017</span>. Prior to joining the Sapien Tribe, Teja was a graduate student in Computer Engineering at UC Davis, before taking a leave of absence. He has previously <span class='underline decoration-indigo-500 decoration-2 font-bold dark:text-white font-medium'>worked at Tesla, Xpeng Motors, and Lyft</span> on projects in robotics and the autonomous vehicle space. Raised in Colorado, he seeks to find a synthesis between technology and nature.`,
  },
  {
    name: 'Greg',
    role: 'CTO',
    imageUrl: '/images/team/Greg.png',
    bio: `Chief Technology Officer at Sapien Network. In Greg’s endeavors throughout his career, he has strived to change the status quo, to make it better, easier to understand, accessible by everyone and, importantly, decentralized. Greg approaches complexities of life and systems, and distills them into beautiful solutions (“there is elegance in simplicity” – Greg). <span class='underline decoration-indigo-500 decoration-2 font-bold dark:text-white font-medium'>Astrophysics, Computer Science and Mathematics form the basis of his academic learnings</span>. His patent in peer to peer networks, extensive work in cryptography, and his gaming technologies form the basis of his beliefs and support of the crypto world. Bringing his learnings, Greg joined the Sapien tribe to contribute to create a new, better place for humans.`,
  },
  {
    name: 'Latif',
    role: 'COO',
    imageUrl: '/images/team/Latif.png',
    bio: `Latif is the Founding investor and COO for the Sapien Network. Latif’s attraction to adventure and the unknown started at 18 when he traveled across the world from India with simple change in his pocket. After completing his undergraduate studies in <span class='underline decoration-indigo-500 decoration-2 font-bold dark:text-white font-medium'>Computer Science at the University of Arizona</span>, Latif took another risk and became a software engineer at a “not very popular” company in the Pacific Northwest named Microsoft. <span class='underline decoration-indigo-500 decoration-2 font-bold dark:text-white font-medium'>Latif’s tenure at Microsoft lasted nearly 16 cumulative years, finally ending up as the General Manager of the Unlimited Potential group</span>, leading a team in India to bring benefits of technology to emerging markets. He has also been involved in many other large projects like <span class='underline decoration-indigo-500 decoration-2 font-bold dark:text-white font-medium'>co-founding eMemories, helping launch Norton360 for Symantec</span>, and most recently as the managing director for eBay India.`,
  },
  {
    name: 'Hash',
    role: 'CMO',
    imageUrl: '/images/team/Hash.png',
    bio: `Hash leads Sapien's growing marketing team as the CMO. He brings natural marketing talent as well as knowledge from his experience with both B2B and B2C marketing. As a published poet, passionate writer, musician, and graphic artist, he brings the level of creative direction needed to communicate Sapien's vision to the world. As an immigrant raised in a low-income household, Hash is passionate about leveraging emerging technologies to seek justice for underserved communities.`,
  },
  {
    name: 'Missy',
    role: 'CSO',
    imageUrl: '/images/team/Missy.png',
    bio: `As Chief Sustainability Officer, Missy leads Sapien’s community building and social/environmental impact efforts. Before Sapien, Missy helped lead business development for multiple startups - a circular economy platform, Loop, and a market research firm, Vancery. She also was the <span class='underline decoration-indigo-500 decoration-2 font-bold dark:text-white font-medium'>VP of Member Development for the environmental nonprofit, BEACN, and managed the first global onboarding mentorship program at Tesla</span>. In her free time, she mentors college students on their climate action projects and supports sustainable food communities. She <span class='underline decoration-indigo-500 decoration-2 font-bold dark:text-white font-medium'>graduated from UC Berkeley with a B.S. in Society and Environment</span>, concentrating in US Environmental Policy and Management.`,
  },
  {
    name: 'Lynn',
    role: 'Advisor',
    imageUrl: '/images/team/Lynn.png',
    bio: `Lynn has previously advised for Lykke Corporation, cryptocurrency exchange, compliance, risk management, ALM, trading strategies, ICO token structuring & due diligence. Chief Compliance Officer and Director of Research for Fossil Free Indexes (FFI), and structuring of investment fund strategies. +25 years in both industry and advisory services, <span class='underline decoration-indigo-500 decoration-2 font-bold dark:text-white font-medium'>working for firms such as Merrill Lynch, JP Morgan Chase, and Deloitte</span>. Advisory services to global financial institutions, asset managers, and funds in compliance, risk management, regulatory requirements, portfolio analysis, strategies, and valuation. Co-author whitepaper “The Missing Link: How a Distributed Ledger System Can Support Global Climate Action.” Published in the areas of asset management, risk management and valuation. Series 65 License, Uniform Investment Advisor Law Examination. <span class='underline decoration-indigo-500 decoration-2 font-bold dark:text-white font-medium'>B.S. in Economics Wharton, University of Pennsylvania</span>.`,
  },
];

const TeamPage: NextPage = () => {
  return (
    <>
      <Head title="Team" />
      <div>
        <div className="mx-auto py-12 px-4 sm:px-6 max-w-6xl lg:px-8 lg:py-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Meet our Team
            </h2>

            <ul
              role="list"
              className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                    <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-3">
                      <img
                        className="object-cover shadow-lg rounded-lg"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4 flex flex-col justify-center h-full">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-white">{person.role}</p>
                        </div>
                        <div className="text-lg">
                          <p
                            className="text-white"
                            dangerouslySetInnerHTML={{ __html: person.bio }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
