import AOS from 'aos';
import { useEffect, useState } from 'react';
import { matchSorter } from 'match-sorter';

// types
import { NextPage } from 'next';

// components
import { Head, Query } from 'components/common';

const list = [
  { name: 'Arminius' },
  { name: 'Siddhārtha Gautama' },
  { name: 'Edsger W. Dijkstra' },
  { name: 'Mozart' },
  { name: 'Nicolaus Copernicus' },
  { name: 'Lao Tzu' },
  { name: 'Frida Kahlo' },
  { name: 'Stephen Hawking' },
  { name: 'Charles Darwin' },
  { name: 'Adam Smith' },
  { name: 'Muhammad Al-Bukhari' },
  { name: 'Maya Angelou' },
  { name: 'Abraham Lincoln' },
  { name: 'Rachel Carson' },
  { name: 'Malcolm X' },
  { name: 'Benoit Mandelbrot' },
];

interface Figure {
  name: string;
}

const ReserverList = ({ figures = [] }: { figures: Array<Figure> }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head
        title="Reserved Historical Figures"
        description="View the list of reserved historical figures on our NFT passports. See which figures have been claimed and pick your avatar during an NFT drop before it’s gone!"
      />
      <div className="h-full">
        <div className="mx-auto py-12 px-4 max-w-6xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Reserved Historical Figures
            </h2>
            <div className="mx-auto px-8 max-w-6xl sm:px-6 lg:px-0">
              <p className="text-lg">
                The future is murky, but it’s easier to see the path forward
                when you’re standing on the shoulders of giants. The collective
                achievements and contributions of our heroes from history have
                brought us to where we stand now. It is time to choose your
                avatar and be their champion as we blaze a new path with the{' '}
                <i>Sapien Tribe</i>.
              </p>
            </div>
            <input
              id="search"
              name="search"
              autoComplete="off"
              className="block text-gray-900 w-full h-12 px-5 py-2 border border-gray-600 rounded-3xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Search by Name"
              type="text"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <ul
              role="list"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
            >
              {matchSorter(figures, searchTerm, { keys: ['name'] }).map(
                (person) => (
                  <div
                    key={person.name}
                    data-aos="zoom-y-out"
                    data-aos-delay="450"
                  >
                    <li className="bg-black px-4 text-center py-5 rounded-2xl overflow-hidden text-white">
                      <div className="space-y-4">
                        <div className="sm:col-span-2">
                          <div className="space-y-4 flex flex-col justify-center h-full">
                            <div className="text-lg font-extrabold leading-6 font-medium space-y-1">
                              <h3>{person.name}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const ReservedListPage: NextPage = () => {
  return (
    <Query api="/api/v3/passport/reserved/list">
      {({ figures }: { figures: Array<{ name: string }> }) => (
        <ReserverList figures={figures} />
      )}
    </Query>
  );
};
export default ReservedListPage;
