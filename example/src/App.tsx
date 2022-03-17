import * as React from 'react';
import * as rtf from '../../src';

const App: React.FC = () => {
  const [date, setDate] = React.useState('');
  const [module, setModule] = React.useState('');
  const [result, setResult] = React.useState('');

  React.useEffect(() => {
    if (!date) return;

    switch (module) {
      case 'getrelyears':
        return setResult(rtf.getRelYears(new Date(date)));
      case 'getrelquarters':
        return setResult(rtf.getRelQuarters(new Date(date)));
      case 'getrelmonths':
        return setResult(rtf.getRelMonths(new Date(date)));
      case 'getrelweeks':
        return setResult(rtf.getRelWeeks(new Date(date)));
      case 'getreldays':
        return setResult(rtf.getRelDays(new Date(date)));
      case 'getrelhours':
        return setResult(rtf.getRelHours(new Date(date)));
      case 'getrelminutes':
        return setResult(rtf.getRelMinutes(new Date(date)));
      case 'getrelseconds':
        return setResult(rtf.getRelSeconds(new Date(date)));
      default:
        return setResult('');
    }
  }, [date, module]);

  return (
    <div className="container mx-auto px-8 max-w-lg">
      <div className="py-8 px-6 shadow rounded-lg bg-slate-200 mt-8 shadow-slate-200">
        <form action="#" className="mb-0 space-y-6">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date:
            </label>
            <div className="mt-1">
              <input
                id="date"
                type="datetime-local"
                className="w-full rounded-lg shadow-sm border-gray-300"
                onChange={({ target }) => setDate(target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="module"
              className="block text-sm font-medium text-gray-700"
            >
              Module:
            </label>
            <div className="mt-1">
              <select
                name="module"
                id="module"
                className="w-full rounded-lg shadow-sm border-gray-300"
                onChange={({ target }) => setModule(target.value)}
              >
                <option value="">Select...</option>
                <option value="getrelyears">getRelYears</option>
                <option value="getrelquarters">getRelQuarters</option>
                <option value="getrelmonths">getRelMonths</option>
                <option value="getrelweeks">getRelWeeks</option>
                <option value="getreldays">getRelDays</option>
                <option value="getrelhours">getRelHours</option>
                <option value="getrelminutes">getRelMinutes</option>
                <option value="getrelseconds">getRelSeconds</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="result"
              className="block text-sm font-medium text-gray-700"
            >
              Result:
            </label>
            <div className="mt-1">
              <input
                type="text"
                readOnly
                className="w-full rounded-lg shadow-sm border-gray-300 pointer-events-none"
                value={result}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
