import { CheckIcon } from '@heroicons/react/solid';
import { useAuth } from 'context/user';
import Link from 'next/link';

// constants
import { View as PassportViews } from 'pages/passport/[linkID]';

interface Step {
  id: number;
  name: String;
  view?: PassportViews;
  status: String;
}

interface Props {
  active: number;
  steps: Array<Step>;
  setView: (view: PassportViews) => void;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Steps = ({ steps, active }: Props) => {
  const { me } = useAuth();

  steps.forEach((step) => {
    if (step.id === active) {
      step.status = 'current';
    } else if (step.id < active) {
      step.status = 'complete';
    } else {
      step.status = 'upcoming';
    }
  });

  return (
    <div className="">
      <div className="flex justify-center flex-col gap-3">
        <p className="text-xs">
          Logged in as{' '}
          <span className="font-extrabold underline">{me.email}</span>{' '}
        </p>
        <Link passHref href="/logout">
          <a className="text-blue-600 text-sm">Logout</a>
        </Link>
      </div>
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8"
        aria-label="Progress"
      >
        <ol role="list" className="rounded-md flex lg:rounded-none">
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative flex-1">
              <div
                className={classNames(
                  stepIdx === 0 ? 'left-1/2' : '',
                  stepIdx === steps.length - 1 ? 'right-1/2' : '',
                  step.status === 'steps.length - 1' ? 'right-1/2' : '',
                  'absolute inset-0 flex items-center'
                )}
                aria-hidden="true"
                x-description="Completed Step"
              >
                <div
                  className={classNames(
                    step.status === 'complete' || step.status === 'current'
                      ? 'bg-sapien-80'
                      : 'bg-gray-200',
                    'h-0.5 w-full'
                  )}
                />
                {step.status === 'current' && (
                  <div className="h-0.5 w-full bg-gray-200" />
                )}
              </div>
              <div
                className={classNames(
                  stepIdx === 0 ? 'rounded-t-md' : '',
                  stepIdx === steps.length - 1 ? 'rounded-b-md' : '',
                  'overflow-hidden lg:border-0'
                )}
              >
                {step.status === 'complete' ? (
                  <a className="group cursor-not-allowed">
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'px-6 py-5 flex flex-col items-center text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0 z-10">
                        <span className="w-8 h-8 flex items-center justify-center bg-sapien-80 rounded-full">
                          <CheckIcon
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                      <span className="text-xs font-semibold tracking-wide absolute top-16">
                        {step.name}
                      </span>
                    </span>
                  </a>
                ) : step.status === 'current' ? (
                  <a aria-current="step" className="cursor-pointer">
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'px-6 py-5 flex flex-col items-center text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0 z-10">
                        <span className="w-8 h-8 flex items-center justify-center bg-white border-2 border-sapien-80 rounded-full">
                          <span className="text-sapien-80">{step.id}</span>
                        </span>
                      </span>
                      <span className="text-xs font-semibold text-white tracking-wide absolute top-16">
                        {step.name}
                      </span>
                    </span>
                  </a>
                ) : (
                  <a className="group cursor-not-allowed">
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'px-6 py-5 flex flex-col items-center text-sm font-medium'
                      )}
                    >
                      {/* don't allow progress to next steps without going through regular flow */}
                      <span className="flex-shrink-0 z-10">
                        <span className="w-8 h-8 flex items-center justify-center border-2  bg-white rounded-full">
                          <span className="text-gray-500">{step.id}</span>
                        </span>
                      </span>
                      <span className="text-xs font-semibold text-white tracking-wide absolute top-16">
                        {step.name}
                      </span>
                    </span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Steps;
