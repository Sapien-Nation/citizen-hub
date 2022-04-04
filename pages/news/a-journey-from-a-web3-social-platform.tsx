/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

// types
import { NextPage } from 'next';

// components
import { Head } from 'components/common';

const News: NextPage = () => {
  return (
    <>
      <Head
        title="News"
        description="A Journey from a Web3 Social Platform to Web3 Social Protocol"
        image="/images/Sapien_Logo.png"
      />
      <div className="relative py-16 overflow-hidden bg-neutral-900 break-words">
        <div className="relative px-4 sm:px-8 lg:px-8">
          <div className="text-lg max-w-5xl mx-auto mb-12">
            <h1 className="mt-2 max-w-prose block text-3xl text-center leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              A Journey from a Web3 Social Platform to Web3 Social Protocol
            </h1>
            <blockquote className="italic text-center mt-4 text-xl tracking-wide text-white leading-8">
              From Bitcoin to Bananas: The Evolution of Sapien
            </blockquote>
            <span className="text-center block text-gray-400">
              Ankit Bhatia
            </span>
            <img
              className="max-w-3xl w-full mx-auto rounded-xl my-12"
              src="/images/news/harambe.png"
              alt="Harambe Statue"
            />
          </div>
          <div className="mt-6 px-8 sm:px-0 font-light text-lg leading-9 tracking-wide gap-12 flex flex-col text-white mx-auto sm:px-6 max-w-6xl">
            <p>
              <span className="font-extrabold text-xl block mb-2">
                San Francisco, CA. April 04, 2022.
              </span>{' '}
              20,000 ETH worth of R&D, multiple product releases, many late
              nights, and
              <a
                href="https://www.insider.com/harambe-statue-charging-bull-wall-street-2021-10"
                target="_blank"
                className="text-sapien-60"
                rel="noreferrer"
              >
                {' '}
                one giant, bronze Harambe statue
              </a>{' '}
              later, we’ve charted a path for a novel full-stack social
              protocol. We present our solution in the
              <a
                href="https://www.sapien.network/The_Purple_Paper_v1.1.pdf"
                className="text-sapien-60"
                rel="noreferrer"
              >
                {' '}
                Purple Paper{' '}
              </a>
              as token primitives that can empower a network of tribes, from a
              group of friends to cooperative
              <a
                href="https://ethereum.org/en/dao/"
                target="_blank"
                className="text-sapien-60"
                rel="noreferrer"
              >
                {' '}
                DAOs
              </a>{' '}
              to sovereign digital nations.
            </p>
            <p>
              And we’re putting it to the test. We are in the process of
              launching the Sapien Nation, a Republic of DAOs, beginning with
              the issuance of our
              <a
                href="https://www.sapien.network/news/why-nft-passports"
                className="text-sapien-60"
                rel="noreferrer"
              >
                {' '}
                NFT Passports
              </a>
              .
            </p>

            <p>
              This blog is my reflection on the journey so far. By no means is
              it meant to be comprehensive, but it intends to provide background
              on the Sapien Tribe Protocol. As always, feel free to share your
              thoughts and feedback in our community. We look forward to hearing
              from you!
            </p>

            <h2 className="mt-2 max-w-prose text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              A trek through the Fire Trails
            </h2>
            <img
              className="max-w-md w-full mx-auto rounded-xl my-12"
              src="/images/news/a_trek_through_the_fire_trails.png"
              alt="A trek through the Fire Trails"
            />
            <p>
              I remember hiking the Berkeley Fire Trails with Rob like it was
              yesterday. We often discussed the decay of social media, the
              failure of institutions, threats to democracy, and other
              existential risks to our species. In particular, it was evident
              that many issues stemmed from misaligned incentives within social
              media, from rampant polarization and opaque content moderation to
              the attention-based business model and commodification of users.
              It just didn’t make sense why this was the status quo.
            </p>
            <p>
              Over the course of many hikes, we convinced each other that there
              had to be a better way. While there were alternatives like Reddit,
              Mastodon, and Diaspora, the solution space was largely unexplored
              and offered an opportunity to build the unthinkable.
            </p>
            <p>
              Fired up and struck with divine inspiration, we came down from one
              particular hike and bolted to Free Speech Café, obsessed with a
              singular idea: social built for humans first. Hungry and just
              naive enough, we began to write code in a blank Sublime Text file.
            </p>
            <p>On that day, Sapien was born.</p>
            <p>
              The journey has been incredible so far. And as our team and scope
              has grown, Rob and I have had the unique opportunity to work with
              some of the smartest, most compassionate people on what we feel is
              one of the most important social technologies to get right.
            </p>
            <p>
              I’d like to extend my gratitude to team members - current and
              former - our advisors, and our community, whose belief in our
              vision inspires us each and every day. Rob and I are grateful to
              have had the opportunity to evolve our vision with your continued
              support. Thank you.
            </p>

            <h2 className="mt-2 max-w-prose text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              The Sapien PoC explores the nature of identity and privacy
            </h2>

            <img
              className="max-w-2xl w-full mx-auto rounded-xl my-12"
              src="/images/news/sapien_poc_explores_the_nature.png"
              alt="The Sapien PoC explores the nature of identity and privacy"
            />

            <p>
              In our spare time in between classes, we threw together the first
              prototype of the platform. We had standard functionality for
              posting and voting, but we tested two new value propositions:
              pseudonymous identity and end-to-end encryption.{' '}
              <span className="font-semibold">
                Our thesis was (and still is to this day) that people would
                benefit from having complete control over what parts of their
                online presence should be public or private
              </span>
              . The Sapien Alpha had a slick implementation to allow people to
              seamlessly switch between their public and private profiles while
              on the site. Through this design, a user would be free to choose
              how they wanted to express themselves.
            </p>
            <p>
              The trend of centralized social media collecting as much user
              information as possible inspired the idea to end-to-end encrypt
              all posts and comments on Sapien. Much like{' '}
              <a
                href="https://www.awesomestories.com/asset/view/Odysseus-and-the-Sirens"
                target="_blank"
                rel="noreferrer"
                className="text-sapien-60"
              >
                Odysseus tying himself to his ship’s mast
              </a>{' '}
              to avoid the seductive song of the Sirens, we felt that a
              client-side encrypted network would prevent Sapien, as a company,
              from reading user data and therefore, would not have an incentive
              to collect personal data.
            </p>
            <p>The technology was clunky but worked as intended.</p>
            <p>
              However, issues arose from the UX and technical architecture
              (managing group permissions, scalability, etc.). While novel, the
              alpha also wasn’t sufficient to overcome the network effects of
              dominant social media players. Privacy was just not sexy and
              sheesh, look at our user interface design!
            </p>

            <h2 className="mt-2 max-w-prose text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              The Sapien Alpha piles on features to take back control
            </h2>

            <img
              className="max-w-2xl w-full mx-auto rounded-xl my-12"
              src="/images/news/the_sapien_alpha_piles_on_features_to_take_back_control.png"
              alt="The Sapien Alpha piles on features to take back control"
            />

            <p>
              Building on the duality of profiles of the alpha, the next release
              of Sapien sought to bring even more fine-grain control to users.
              Feed sorts, feed weights, shortcuts, custom folders, and a host of
              other powerful tools gave people the ability to tweak their feeds
              and organize their media content to use the platform intentfully.{' '}
              <span className="font-semibold">
                Our thesis was expanded to incorporate the notion that people
                should have complete transparency in the flow of information and
                control over what they are consuming
              </span>
              .
            </p>
            <p>
              This stood in stark contrast to blackbox algorithms that continue
              to reign over media today.
            </p>
            <p>
              In the beginning, the algorithmic content engine prevalent today
              made it difficult to isolate the information layer from the
              economics of social media. But over the years it became clear that
              information propagated in a way that maximized Time on Site, often
              through provocation, misinformation, or what appealed to the
              lowest common denominator. We wanted to explore how a network
              could transition away from this extractive model and could make
              sure users were being fairly rewarded for their contributions.
            </p>
            <p>
              If only there was an incorruptible, decentralized public ledger
              that could enable digital assets to quantify and reflect the value
              created in a network…
            </p>

            <h2 className="mt-2 max-w-prose text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              Enter the Blockchain and the Tokenization of Sapien
            </h2>

            <p>
              I was fortunate that a friend of mine at Berkeley had Tor
              installed on his browser and showed me how to access the dark web.
              It was there I first witnessed the power of Bitcoin as a trustless
              store of value that required no intermediaries. Transactions could
              be made without the approval of any central banks, governments, or
              authorities. I knew immediately this was the future and I was
              hooked. Despite utilizing a decentralized cryptocurrency, they
              were still insistent to send transactions through a bitcoin mixer
              (for even more privacy) before purchasing LSD online.
            </p>

            <img
              className="max-w-2xl w-full mx-auto rounded-xl my-12"
              src="/images/news/enter_the_blockchain_and_the_tokenization_of_sapien.png"
              alt="Enter the Blockchain and the Tokenization of Sapien"
            />
            <p>
              In late 2017, Rob and I sat down to write the white paper for
              Sapien, a decentralized social media network designed from the
              ground up to be Humans First. We argued that users are the true
              value creators in any social network, and they should have
              complete control of every aspect of their online experience — from
              the data they chose to share and the advertisements they opt for
              to the communities they participate in and the rewards they
              receive for their contributions.
            </p>

            <p>
              The original white paper for Sapien advanced the thesis in several
              key areas:
            </p>
            <ol className="list-decimal list-inside pl-10">
              <li>
                Pseudonymous reputation is essential to reflect expertise while
                preserving privacy.
              </li>
              <li>
                The business model for such a network must be grounded in the
                exchange of value (i.e. tokens) rather than attention.
              </li>
              <li>
                The question <span className="italic">“What is valuable?”</span>{' '}
                can only be determined via social consensus.
              </li>
            </ol>

            <img
              className="max-w-2xl w-full mx-auto rounded-xl my-12"
              src="/images/news/democratized_autonomous_platform_proposals.png"
              alt="Democratized Autonomous Platform (DAP) Proposals"
            />

            <p>
              We see DAOs making a resurgence in the blockchain space now, but
              back in 2017 Rob and I were thinking from first principles about
              what decentralized communities looked like in their final form. As
              avid readers, we were both fans of Yuval Noah Harari’s Sapiens: A
              Brief History of Humankind and believed that the concept of a
              tribe was and always will continue to be essential to the way we
              organize, build culture, and operate at scale.
            </p>

            <p>
              The vision was to launch the first Democratized Autonomous
              Platform, a social network of communities that were
              self-organizing and self-moderating.
            </p>

            <p>
              With that vision in hand, we launched the Sapien Token and our
              tokenized social network.
            </p>

            <h2 className="mt-2 max-w-prose text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              The Sapien Beta serves as a testbed for tokenomics research and
              incentive design
            </h2>

            <img
              className="max-w-2xl w-full mx-auto rounded-xl my-12"
              src="/images/news/sapien_beta.png"
              alt="Sapien Beta"
            />

            <p>
              The second version of the Sapien platform was a massive success
              for a small team shipping sophisticated software in production. In
              November of 2019, the platform, with native iOS and Android apps,
              was a top 3 Ethereum social app by daily transactions according to
              dapp.com dappradar.com.
            </p>
            <p>
              But even more than the platform, what enthralled Rob and myself
              was the extensive research that was happening behind the scenes.
            </p>
            <p>
              Over the years, while our team was actively building the
              infrastructure (walletless crypto experience, Layer 2
              transactions, gasless relayers) to support a mainstream Web3
              product, we were reading, debating, and theorizing what tools a
              tribe needs to truly flourish. Our R&D was defining the Sapien
              Tribe Protocol outlined in the
              <a
                href="https://www.sapien.network/The_Purple_Paper_v1.1.pdf"
                className="text-sapien-60"
                rel="noreferrer"
              >
                {' '}
                Purple Paper{' '}
              </a>
              today.
            </p>

            <p>
              To broadly make sense of the research and how it shapes what we
              are building today, I will break down our prior work into the
              three familiar categories: social, information, and economic
              (although there is substantial overlap and synergy among the
              three).
            </p>

            <h3 className="mt-2 max-w-prose text-xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl">
              Social:
            </h3>
            <p className="italic">“Who do we entrust with power?”</p>
            <p>
              A research paper that had an early influence on our thinking was
              Dr. Mihaela Ulieru’s paper on
              <a
                href="https://www.academia.edu/415695/The_Holonic_Enterprise_Modeling_Holarchies_As_MAS_to_Enable_Global_Collaboration"
                className="text-sapien-60"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                Holarchies
              </a>
              . Coined by Arthur Koestler in his book The Ghost in a Machine, a
              holarchy is a form of hierarchy with no absolute top and bottom.
              Holons are both autonomous wholes and cooperative parts of the
              larger system. And much like the holarchic structure from the
              Solar System to the atom in a universe, we believe that the tribe,
              from the nuclear family to vast nation states, always has and
              always will be the fundamental social unit.
            </p>
            <p>
              For digital tribes to thrive, they need to mirror the social
              dynamics of real-life communities, including a shared stake in the
              future of the community. One of the first experiments on the alpha
              release of the platform was a mandatory stake to access and
              perform actions in the network. Within a few short months our
              novel model of
              <a
                href="https://blog.sapien.network/adaptive-staking-280b163f515d"
                className="text-sapien-60"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                Adaptive Staking
              </a>{' '}
              had more than 15M tokens staked (nearly 7.5% of the circulating
              supply). A larger stake enabled a user to create more posts,
              comments, and votes. We figured that, like Bitcoin, with a greater
              stake in the network, a participant would be more likely to add
              value. In theory, a bad actor (e.g. spam or illegal content) could
              be slashed as a consequence. While certainly an interesting
              feature to build, we quickly realized that the authority for who,
              when, and how much to reward or slash had to reside with the
              community.
            </p>

            <p>
              Around this time, I stumbled on the
              <a
                href="https://thefederalist.com/2014/01/17/the-death-of-expertise/"
                className="text-sapien-60"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                The Death of Expertise
              </a>{' '}
              article and we wanted to dive deeper into the nature of power and
              reputation online. This was a rabbit hole. Here’s a list of some
              of the papers we looked at:
            </p>

            <ul className="list-disc list-inside pl-10">
              <li>
                <a
                  href="http://www.eecs.harvard.edu/cs286r/courses/fall09/papers/friedman2.pdf"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  Manipulability of PageRank under Sybil Strategies
                </a>
                . Cheng, & Alice, & Friedman, & Eric,. (2006).
              </li>
              <li>
                <a
                  href="http://ilpubs.stanford.edu:8090/562/1/2002-56.pdf"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  The EigenTrust Algorithm for Reputation Management in P2P
                  Networks
                </a>
                . Kamvar, Sepandar & Schlosser, Mario & Garcia-molina, Hector.
                (2003).
              </li>
              <li>
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S1319157815000440?via%3Dihub"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  HonestPeer: An Enhanced EigenTrust Algorithm for Reputation
                  Management in P2P Systems
                </a>
                . Kurdi, Heba. (2015).
              </li>
              <li>
                <a
                  href="https://www.researchgate.net/publication/261093756_EigenTrust_Attack_Resilient_Trust_Management"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  EigenTrust++: Attack Resilient Trust Management
                </a>
                . Fan, Xinxin & Liu, Ling & Li, Mingchu & Su, Zhiyuan. (2012).
              </li>
              <li>
                <a
                  href="https://www.researchgate.net/publication/3297318_PeerTrust_Supporting_Reputation-Based_Trust_for_Peer-to-Peer_Electronic_Communities"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  PeerTrust: Supporting Reputation-Based Trust for Peer-to-Peer
                  Electronic Communities
                </a>
                . Xiong, Li & Liu, Ling. (2004).
              </li>
              <li>
                <a
                  href="https://www2.eecs.berkeley.edu/Pubs/TechRpts/2007/EECS-2007-75.html"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  Robust Reputations for Peer-to-peer Markets
                </a>
                . Traupman, Jonathan. (2022).
              </li>
              <li>
                <a
                  href="https://arxiv.org/pdf/1210.4301v4.pdf"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  Reputation aggregation in peer-to-peer network using
                  differential gossip algorithm
                </a>
                . Gupta, Ruchir & Singh, Yatindra. (2016).
              </li>
              <li>
                <a
                  href="http://www.cs.yale.edu/homes/zhai-ennan/zhai16anonrep.pdf"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  AnonRep: Towards Tracking-Resistant Anonymous Reputation
                </a>
                . Zhai, E., Wolinsky, D., Chen, R., Syta, E., Teng, C., & Ford,
                B. (2016).
              </li>
              <li>
                <a
                  href="https://www.researchgate.net/publication/275651220_Dependency_Centrality_from_Bipartite_Social_Networks"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  Dependency Centrality from Bipartite Social Networks.
                  Connections
                </a>
                . Gerdes, Luke. (2014).
              </li>
              <li>
                <a
                  href="https://www.researchgate.net/publication/220199078_Fuzzy_reputation-based_trust_model"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  Fuzzy reputation-based trust model
                </a>
                . Tajeddine, Ayman & Kayssi, Ayman & Chehab, Ali & Artail,
                Hassan. (2011).
              </li>
              <li>
                <a
                  href="https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.141.1561&rep=rep1&type=pdf"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  Robust Content-Driven Reputation
                </a>
                . Chatterjee, Krishnendu & Alfaro, Luca & Pye, Ian. (2008).
              </li>
              <li>
                <a
                  href="https://www.usenix.org/legacy/event/nsdi06/tech/walsh/walsh.pdf"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  Experience with an object reputation system for peer-to-peer
                  filesharing
                </a>
                . Walsh, Kevin & Sirer, Emin. (2006).
              </li>
              <li>
                <a
                  href="https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/icdcs07-2.pdf"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  A Multi-dimensional Reputation System Combined with Trust and
                  Incentive Mechanisms in P2P File Sharing Systems
                </a>
                . ang, Mao & Feng, Qinyuan & Dai, Yafei & Zhang, Zheng. (2007).
              </li>
              <li>
                <a
                  href="https://dl.ifip.org/db/conf/ifiptm/ifiptm2007/Traupman07.pdf"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  Resisting Sybils in Peer-to-peer Markets
                </a>
                . Traupman, Jonathan. (2007).
              </li>
              <li>
                <a
                  href="https://crypto.stanford.edu/portia/papers/marti.pdf"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  Trust and Reputation in Peer-to-peer Networks
                </a>
                . Marti, Sergio. (2005).
              </li>
              <li>
                <a
                  href="https://github.com/golemfactory/golem-rd/wiki/Reputation-system"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  Reputation system
                </a>
                . (Golem Research, 2017)
              </li>
              <li>
                <a
                  href="https://blog.colony.io/the-colony-reputation-system-5616293c3949/"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  Reputation system
                </a>
                . (Colony, 2017)
              </li>
              <li>
                <a
                  href="http://www.cs.yale.edu/homes/zhai-ennan/Talk%20Slides%20of%20Sorcery.pdf"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  Sorcery
                </a>
                . (Robust P2P Content Sharing System)
              </li>
              <li>
                <a
                  href="https://github.com/AdamColton/trustGraph"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  TrustGraph
                </a>
                . (EigenTrust implementation in GO).
              </li>
              <li>
                <a
                  href="https://github.com/golemfactory/golem-rd/wiki/Crystal"
                  className="text-sapien-60"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  Crystal
                </a>
                . (Decentralized Reputation for Ethereum).
              </li>
            </ul>

            <p>
              Most of the algorithms we studied had different trade-offs:
              various degrees of resistance to dishonest actors, requirements
              around an initial set of honest participants, limited use cases,
              or other intractable attack vectors. In addition to the research,
              Rob created a few simple simulations of reputation distribution
              among a social network:
            </p>

            <img
              className="max-w-2xl w-full mx-auto rounded-xl my-12"
              src="/images/news/sapien_simulations.png"
              alt="Sapien Simulations"
            />

            <p>
              No magical algorithm seemed to provide a neat solution for a
              tokenized network without adding unwanted complexity or gamifying
              the social experience.
            </p>
            <p>
              I remember one particular night in Berlin, Rob and I had a
              spirited conversation until 4 am on how reputation proliferates in
              social systems. While enjoying a few cold ones, we really got deep
              into the nature of reputation and why it would be intractable to
              backpropagate (undo reputation changes to the network) from
              collusion (i.e. people trying to game the system). Reasoning
              through a few examples, it was clear that complexity grew
              exponentially and we knew that we were veering away from
              Occam&apos;s razor.
            </p>
            <p>
              It was no surprise that the answer lies with the tribe.
              <span className="font-semibold">
                We embraced the idea that “reputation” must be simple, emergent,
                and driven by people in communities.
              </span>
            </p>
            <p>
              We then proposed a system of non-fungible badge tokens in order to
              build an emergent network of trust. This was the first time we
              introduced the concept of a Social Ledger, utilizing the
              blockchain to track an individual’s status, contributions, and
              awards to construct a tamper-proof record. Conversely, badges
              could be utilized to flag bad actors and empower tribes to trust
              each other to build organic moderation networks.
            </p>
            <p>
              While community-driven, badges presented a user experience
              challenge due to everything being a token (e.g. too many tokens in
              a wallet and overloading use cases like access, subscription, and
              gated membership). And while this could be solved with a smart
              interface, it would require too much trust in a client and damage
              the composability of the social ledger with other dApps.
            </p>

            <img
              className="max-w-2xl w-full mx-auto rounded-xl my-12"
              src="/images/news/rob_ankit.png"
              alt="Rob and Ankit"
            />

            <p>
              At last, one final productive working session in a WeWork in San
              Francisco helped tie everything together and illuminate the path
              forward.
            </p>
            <p>
              We had finally found the perfect metaphor and social primitive —
              The Passport.
            </p>
            <p>
              The Sapien Passport is the natural evolution of the badges that
              further distills status, identity, access, and a social ledger
              into an upgradeable, multi-page non-fungible token. By design, the
              passport can be unsigned or signed. Upon signature, the token
              becomes non-transferrable, is linked to a wallet address, and
              unlocks additional utilities in the network. Additionally, the NFT
              has functionality to create additional key-value pairs to append
              metadata, analogous to multiple pages that a physical passport
              contains.
            </p>
            <p>
              Community-driven and managed, the Passport will establish an
              accessible standard to help interface within and among DAOs.
            </p>

            <h3 className="mt-2 max-w-prose text-xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl">
              Information:
            </h3>
            <p className="italic">
              “How do we collectively identify what is valuable?”
            </p>
            <p>
              We are big fans of Reddit, but it suffers from information
              overload. Nuanced conversations were often lost in threads and
              high-quality posts did not bubble up easily. We thought that
              tokens could be utilized to signal valuable contributions, so one
              of the first things we built out in the Beta release was a simple
              token-weighted feed sort. By making curation cost something, as
              opposed to a like or heart, the process of curation became more
              intentful and resistant to bad actors looking to game the
              algorithm. The downside was that this imposed a significant
              barrier to participation and did not fully signal the values or
              expertise of a community.
            </p>
            <p>
              We spent a great deal of time speaking with Dr. Robin Hanson, the
              author of the
              <a
                href="https://mason.gmu.edu/~rhanson/greatfilter.html"
                className="text-sapien-60"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                Great Filter
              </a>{' '}
              and a proponent of
              <a
                href="https://mason.gmu.edu/~rhanson/futarchy.html"
                className="text-sapien-60"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                Futarchy
              </a>
              , about using prediction markets for content sorts. We thought
              that perhaps there was a way to create a market for information
              and enable people to bet on content they found valuable.
            </p>
            <p>
              To make this more concrete, imagine if on Reddit, users in the
              “new” sorts could place bets on what they believed were
              high-quality posts and a different set of people in “hot” made
              evaluations. If the content was evaluated favorably by the broader
              community, then it would be profitable for the initial curators.
            </p>
            <p>
              We explored two different models: real bets with settlements and a
              liquid vote through “upstaking” and “downstaking.” The former had
              a real cost and the latter only required a stake to participate.
            </p>
            <p>
              The fundamental problem, aside from a clunky user interface, was
              creating clear separation between the betting and evaluation
              period that wasn’t prone to manipulation or collusion. Further,
              and more importantly, prediction markets for content had the vibes
              of an investment product rather than an experience that would
              forge deeper connections with friends and communities.
            </p>
            <p>
              Late 2020, the Creator Economy was also on the rise with platforms
              like Patreon, Substack, and Onlyfans. And while they validated the
              importance of disintermediating creators and their audiences, we
              felt that this should be natively addressed with cryptocurrencies
              in Web3.
            </p>
            <p>
              A lot of builders and VCs hopped on that hype train but we were
              resolute that the true problem was not in creation, but in
              curation.{' '}
              <span className="font-semibold">
                Solving curation is essential to replacing algorithmic curation
                with human-centric curation
              </span>
              . Human curation was far more intentful but it was not obvious how
              it could scale to a social network of billions of people. This is
              when we had to look both at the past and future, and dive deeper
              into free market dynamics and the
              <a
                href="https://variant.fund/writing/the-ownership-economy-crypto-and-consumer-software"
                className="text-sapien-60"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                ownership economy
              </a>{' '}
              in Web3.
            </p>
            <p>
              The solution we crafted is called{' '}
              <span className="italic">Trustless Syndication</span>.
            </p>
            <p>
              The concept of <span className="italic">Syndication</span> was
              introduced by the show,{' '}
              <span className="italic">I Love Lucy</span>, in which the original
              show creators could own the film itself and the rights for reruns
              and licensing. This made TV a goldmine. We wanted to extend this
              concept for the Web3 space by introducing a competitive market for
              communities to curate the best content for their members.
            </p>
            <p>
              The <span className="italic">Trustless</span> component of this
              model comes from the fact that tokens themselves can be acquired,
              transferred, and exchanged without intermediaries in secondary
              markets. The model is proven (think of the monthly subscription
              box model), extensible (boxes can contain NFTs, articles, videos,
              or even other boxes) and benefits from the economies of scale
              (e.g. bulk discounts). And above all, it embeds humans and
              community values at the heart of the content engine.
            </p>
            <p>
              Our team is incredibly excited to build a common information
              protocol for DAOs.
            </p>
            <p>
              A new standardization will finally empower communities to tap into
              a canonical pool of content, allowing them to ground their
              sensemaking process in a content marketplace driven by people, not
              algorithms.
            </p>
            <h3 className="mt-2 max-w-prose text-xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl">
              Economic:
            </h3>
            <p className="italic">
              “Can we create positive incentives to align values within and
              among communities?”
            </p>
            <p>
              On that first hike in the Fire Trails, the greatest motivator for
              Rob and myself to start Sapien was the extractive economics of the
              social media establishment. Users on social platforms were simply
              not getting a commensurate amount of value for their time and
              creative output.
            </p>
            <p className="italic">
              Oh wait…isn’t this just the nature of capitalism?
            </p>
            <p>
              We set out to find a way to reward people fairly for their
              contributions.
            </p>
            <img
              className="max-w-lg scale-150 mx-auto rounded-xl my-12"
              src="/images/news/sapien_weekly_rewards.png"
              alt="Sapien Weekly Rewards"
            />

            <p>
              In our first attempt, we used the SPN utility token within the
              Sapien Rewards Engine to create shared incentives for creation and
              curation.
              <a
                href="https://blog.sapien.network/the-sapien-rewards-engine-is-live-28f9e3f7cf8c"
                className="text-sapien-60"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                Rewards Engine V1
              </a>{' '}
              rewarded people for posting, commenting, and upvoting. Clearly,
              these actions must be valuable in a social network! Obviously,
              soft value was a brute force approach to tokenized social was
              primitive and unreliable at reflecting true value creation. We
              looked once again to the tribe.
            </p>
            <p>
              <a
                href="https://blog.sapien.network/sapien-rewards-engine-2-0-is-live-7d945fc3247f"
                className="text-sapien-60"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                Rewards Engine V2
              </a>{' '}
              gave the community control over the distribution of rewards. If a
              user believed a post was valuable, they could give that post a
              charge, which would increase their payout from the daily reward
              pool. Similar to a token reward pool of Minds or Steemit, tokens
              were awarded weekly for the most valuable posts. The user
              experience was seamless and the engine worked well 99% of the
              time. Unfortunately the 1% of abuse proved RE2 was not sybil
              resistant and susceptible to collusion. At this point, we could
              either research and build more advanced detection systems or
              change our approach.
            </p>
            <p>
              <a
                href="https://app.sapien.network/"
                className="text-sapien-60"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                Rewards Engine V3
              </a>{' '}
              was quite an engineering feat and introduced a primitive UBI
              through a system of charges to the platform. Our approach is now
              set on hard value, meaning that there is a cost to rewarding
              others. It also has several key infrastructure pieces necessary
              for mass adoption:
            </p>

            <ul className="list-inside list-disc pl-10">
              <li>Matic L2 instant transactions</li>
              <li>Biconomy gasless transactions</li>
              <li>Sapien non-custodial wallet on registration</li>
              <li>UBI of 10 charges per day for verified users</li>
              <li>Posts can be charged or directly sent tokens</li>
              <li>Charge-based post & comment sort</li>
              <li>5% network fee reducible via staking</li>
            </ul>

            <img
              className="max-w-2xl w-full mx-auto rounded-xl my-12"
              src="/images/news/ankit_rob.png"
              alt="Ankit Rob"
            />
            <p>
              It’s 2018 in Berlin. Rob and I were getting breakfast on a
              Saturday morning at one of our favorite German cafes. We had gone
              to a techno rave the night before and were in dire need of
              nutrition. Over some lox eggs and beers on a beautiful Sunday
              morning, we were chatting about how difficult it is to measure
              contributions in a single token, and I recall Rob conceiving the
              idea of <span className="italic">Tribe Tokens</span>.
            </p>
            <p>
              Years before the rise of social tokens, Tribe Tokens were a way
              for communities to have their own cryptocurrencies for creating,
              distributing, and capturing value. While we both thought plural
              currencies could be a better way to construct community economies,
              we did not know at the time how to implement it. Namely, how
              should currency be issued (inflation) and who should control the
              mint?
            </p>
            <p>
              Fast forward a few years, projects like $FWB, Bitclout, and Rally
              are putting social tokens on the
              <a
                href="https://www.coindesk.com/learn/2021/08/20/what-is-an-automated-market-maker/"
                className="text-sapien-60"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                Automated Market Maker
              </a>{' '}
              (AMM) curves. While certainly novel, the feedback we got from our
              research was that key design decisions are far too opinionated for
              the general use case. Further, the tokens tend to be speculative
              (not grounded in hard value; for example, marketplace fees) and
              exist in isolation on independent curves.
            </p>
            <p>
              Like a single tree, a single DAO is limited by its local
              resources.
            </p>
            <p className="font-semibold">We had to grow the forest.</p>
            <img
              className="max-w-2xl w-full mx-auto rounded-xl my-12"
              src="/images/news/grow_the_forest.png"
              alt="We had to grow the forest."
            />
            <p>
              We believe that the economic layer must function like a
              <a
                href="https://www.nationalforests.org/blog/underground-mycorrhizal-network#:~:text=Mycelium%20are%20incredibly%20tiny%20%E2%80%9Cthreads,nitrogen%2C%20carbon%20and%20other%20minerals."
                className="text-sapien-60"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                Mycelium Network
              </a>{' '}
              in order to connect local economies together. And much like trees
              exchange nutrients through a symbiotic relationship with fungi,
              different DAOs must be able take a stake in each other, sharing
              the risk and reward, in order to create a robust foundation for
              the new digital economy. The piece that was missing was the
              Treasury (a vault) for cooperative ownership of assets.
            </p>
            <p>
              We now arrive at our powerful, networked token standard —{' '}
              <span className="italic">The Tribe Treasury Token (TTT).</span>
            </p>
            <p>
              The TTT will enable DAOs to launch their own sovereign, fungible
              currency that is collateralized by a vault of assets. The beauty
              of the TTT model is that it does not exist in isolation. TTTs can
              have parent and child TTTs linked through a network of AMMs.
            </p>
            <p>
              Democratizing the power of minting with an optionally inflationary
              model means that DAOs can convert their social capital into real
              value.{' '}
              <span className="font-semibold">
                We can now choose to build on a transparent foundation of trust,
                and all it takes is the snap of our fingers to manifest new fiat
                currencies, backed by a vault of digital assets in a broader
                economic substrate. We believe that giving this power, typically
                reserved to governments, to communities empowers them to extend
                their collective time horizon to fund public goods, cooperate
                more effectively, and invest in a shared future.
              </span>
            </p>
            <p className="italic">Let it be done, by and for communities.</p>

            <h2 className="mt-2 max-w-prose text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              Apes Together Strong 🦍 🤝 💪
            </h2>
            <img
              className="max-w-2xl w-full mx-auto rounded-xl my-12"
              src="/images/news/apes_together_strong.png"
              alt="Apes Together Strong"
            />
            <p>
              {`The last few months have shed tremendous light on how the pieces of the protocol fit together. And we couldn’t have done this without the addition of key team members, including Teja Aluru. Teja dropped out of his PhD in Machine Learning to help us launch the Sapien Nation. He is also the artist and lead programmer behind`}
              <a
                href="https://www.sapien.network/news/a-trip-through-time"
                className="text-sapien-60"
              >
                {' '}
                A Trip Through Time
              </a>{' '}
              NFT Passport art collection. And as a fully awake ape, he joined
              Rob and me to form the first tribe (Tri = 3) of the{' '}
              <span className="italic">Sapien Nation</span>.
            </p>
            <p>
              With our passionate team, we are on a mission to enable people to
              reclaim their agency by building sovereign communities focused on
              collective action and cooperative ownership.
            </p>
            <h2 className="mt-2 max-w-prose text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              A Brief Summary of the Tribe Protocol
            </h2>
            <img
              className="max-w-lg w-full mx-auto rounded-xl my-12"
              src="/images/news/tribe_protocol_summary.png"
              alt="A Brief Summary of the Tribe Protocol"
            />

            <p>
              The three token primitives proposed in the
              <a
                href="https://www.sapien.network/The_Purple_Paper_v1.1.pdf"
                className="text-sapien-60"
              >
                {' '}
                Purple Paper
              </a>{' '}
              are the minimal viable axioms to support a social network of
              self-sovereign communities:
            </p>
            <ul className="list-inside list-disc pl-10">
              <li>
                The NFT Passport enables social sensemaking: status, privileges,
                and networks of trust.
              </li>
              <li>
                Trustless Syndication enables the expression, appreciation, and
                scalability of culture.
              </li>
              <li>
                The Tribe Treasury Token enables macroeconomics: trade,
                investment, and a shared stake.
              </li>
            </ul>
            <p>
              In isolation, most DAOs function like independent social networks,
              and their value is bounded by
              <a
                href="https://en.wikipedia.org/wiki/Metcalfe%27s_law"
                className="text-sapien-60"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Metcalf’s law
              </a>
              , the number of connected users of the system n2. Within a broader
              social network, DAOs bound together socially, culturally, and
              economically, have a theoretical upper bound of the value is (n2
              )2 or n4.
            </p>
            <p>
              Composed with other Web3 digital lego blocks like quadratic
              funding, decision making rules, and distribution rules, the
              potential for real-world and Internet communities is truly
              limitless.
            </p>
            <p>
              And just as privacy was core to the original PoC for Sapien, it
              will be standardized in the Tribe Protocol. Building a
              privacy-maximizing system will come with design trade-offs and we
              will need to dive deeper into zero-knowledge cryptography. The
              Passport should share only what’s needed and not leak unnecessary
              metadata. Token transactions should be public or private if
              desired.
            </p>
            <p className="font-semibold">
              With a level playing field, we can reclaim our agency — how we
              choose to allocate our time, money, and resources. We unleash our
              collective creative capacities to tackle the most pressing
              challenges of our generation.
            </p>
            <h2 className="mt-2 max-w-prose text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              <span className="italic">Harambe</span> {`("All pull together")`}
            </h2>
            <p>
              Well if you read this far, I’m sure you’re still curious about our
              400 lb gorilla statue?
            </p>
            <p>
              <a
                href="https://www.bbc.com/travel/article/20201004-harambee-the-kenyan-word-that-birthed-a-nation"
                className="text-sapien-60"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Harambee
              </a>{' '}
              is a Kenyan tradition of community self-empowerment through
              fundraising, development, and mutual aid. Collectives in Kenya,
              known as chamas, are formed by family members, friends, or
              colleagues and do everything from paying for large social
              gatherings to forming new businesses and investing in land.
            </p>
            <p>
              {`The word Harambe itself comes from Indian laborers who used the phrase "har har Ambey” (calling out to the Hindu Goddess, Amba) when performing difficult tasks that required massive collective effort `}
              <a
                href="https://en.wikipedia.org/wiki/Harambee"
                className="text-sapien-60"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                (source)
              </a>
              .
            </p>
            <p>
              In the burgeoning industry of Web3, we too have an opportunity to
              learn from traditions and build self-sustaining, regenerative
              communities that can manifest the change they want to see in the
              world.
            </p>
            <p>
              So we invite you to join us in bringing your voice and communities
              to the <span className="italic">Sapien Nation.</span>
            </p>
            <p>
              To unite under a common banner. To pull together and build our
              shared future together.
            </p>

            <img
              className="max-w-2xl w-full mx-auto rounded-xl my-12"
              src="/images/news/harambe_all_together.png"
              alt="Harambe ('All pull together')"
            />

            <p className="text-base border-[1px] border-gray-800 rounded-md p-5">
              NOTE: The views and opinions expressed in this article are those
              of the authors and do not necessarily represent official policy or
              position of Sapien Network, Inc. The information in this article
              was compiled from sources believed to be reliable and is for
              informational purposes only. Sapien Network, Inc. does not
              guarantee the accuracy of this information or any results and
              further assumes no liability in connection with this article.
            </p>

            <div className="mt-10">
              <h5 className="font-extrabold">About Sapien Network</h5>
              Sapien is the first Digital Nation in the metaverse, a Republic of
              DAOs powered by Sapien’s first-of-its-kind NFT Passport. Our
              mission is to enable people to reclaim their agency by building
              sovereign communities focused on collective action and cooperative
              ownership. <br /> For more information, visit sapien.network.{' '}
              <Link
                href="https://www.linkedin.com/company/sapien.network/mycompany/?viewAsMember=true"
                passHref
              >
                <a target="_blank" className="underline">
                  LinkedIn
                </a>
              </Link>
              ,{' '}
              <Link href="https://twitter.com/sapien_network" passHref>
                <a target="_blank" className="underline">
                  Twitter
                </a>
              </Link>{' '}
              and{' '}
              <Link href="https://discord.com/invite/AtGS2pe" passHref>
                <a target="_blank" className="underline">
                  Discord
                </a>
              </Link>
            </div>
            <div>
              <h5 className="font-extrabold">Media contacts:</h5>
              <ul className="list-none">
                <li>
                  Missy Martin <br />
                  Chief Sustainability Officer <br />
                  <a href="mailto: missy@sapien.network" className="underline">
                    missy@sapien.network
                  </a>
                </li>{' '}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
