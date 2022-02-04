import AOS from 'aos';
import { useEffect } from 'react';

// types
import { NextPage } from 'next';

// components
import { Head } from 'components/common';

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

const ReservedListPage: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head title="Reserved Historical Figures" />
      <div className="h-full">
        <div className="mx-auto py-12 px-4 max-w-6xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Reserved Historical Figures
            </h2>

            <ul
              role="list"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
            >
              {list?.map((person) => (
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
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservedListPage;
