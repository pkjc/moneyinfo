"use client";
import { COMPANIES } from '../companies';
import dynamic from "next/dynamic";
const TableRow = dynamic(() => import("./TableRow"), { ssr: false, loading: () => <span></span> });

const formatFilePath = (name) => name.replace(/ /g, '_').toLowerCase();

export default function HomePage() {
  return (
    <div className="flex items-center sm:justify-center mx-4">
        <table className="divide-y divide-gray-200 max-w-7xl mx-auto">
          <thead>
            <tr className='tr-class-h'>
              <th className="px-4 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="px-4 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Type
              </th>
              {/* <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Social
              </th> */}
              <th className="px-4 py-3 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {COMPANIES.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
            }).map((company) => (
              <TableRow key={company.name} {...company}/>
            ))}
          </tbody>
        </table>
        </div>
  );
}
