import { useState, useEffect } from 'react';

const TableRow = (company) => {
    let categoryClassName = 'text-green-800';
    const [url, setUrl] = useState("");
  
    if (company.category === 'Public') {
      categoryClassName = 'text-blue-800';
    } else if (company.category === 'Private') {
      categoryClassName = 'text-orange-800';
    }
  
    useEffect(() => {
      setUrl(`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${company.careers}&size=128`);
    }, []);
  
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      }

    return (
        <tr className='tr-class hover:bg-gray-100 hover:cursor-pointer' onClick={() => openInNewTab(company.careers)}>
          <td className="px-6 py-4 whitespace-no-wrap td-class">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-16 w-16">
                <img
                  loading="lazy"
                  className="h-16 w-16"
                  src={url}
                  alt={company.name}
                />
              </div>
              <div className="ml-4">
                <div className="text-sm leading-5 font-medium text-gray-900">
                  {company.name}
                </div>
                <div className="text-sm leading-5 text-gray-500">
                  {company.city}
                </div>
              </div>
            </div>
          </td>
          <td className="pl-6 sm:pl-4 pr-10 py-4 whitespace-no-wrap td-class max-w-3xl">
            <div className="text-sm leading-5 text-gray-900">
              {company.description}
            </div>
          </td>
          <td className="px-6 sm:px-6 sm:py-4 whitespace-no-wrap td-class">
            <span
              className={`${categoryClassName} px-2 inline-flex text-xs leading-5 font-semibold `}
            >
              {company.category}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap td-class">
            <button className="h-6 px-4 font-semibold rounded-full bg-violet-600 text-white text-right text-sm leading-5 text-xs " type="submit">
              <a href={company.careers} className="">Visit</a>
            </button>
          </td>
        </tr>
    );
  };

  export default TableRow;