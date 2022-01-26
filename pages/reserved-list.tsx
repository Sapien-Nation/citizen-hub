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
  return (
    <>
      <Head title="Reserved List" />
      <div>
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Reserved List
            </h2>

            <ul
              role="list"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {list?.map((person) => (
                <li
                  key={person.name}
                  className="col-span-1 p-2 border border-gray-400 rounded-lg shadow-sm shadow-[4px_4px_#eaeaea] dark:shadow-[4px_4px_#27272a] divide-y divide-gray-200"
                >
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                    <div className="sm:col-span-2">
                      <div className="space-y-4 flex flex-col justify-center h-full">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
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

export default ReservedListPage;
