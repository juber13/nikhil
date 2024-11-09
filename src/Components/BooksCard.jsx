import { FaBookOpen, FaUser, FaStar } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import Star from 'react-stars'



function BooksCard({ elem }) {
  const navigate = useNavigate();

  return (
    <div className='w-72 m-4 z-[-1] flex flex-col justify-between cursor-pointer items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200'>
      <img
        src={`https://covers.openlibrary.org/b/id/${elem?.cover_i}-M.jpg`}
        alt='Book Cover'
        className='w-full h-64 object-contains rounded-md shadow-md hover:scale-105 transition-transform duration-200 mb-4'
      />
      <div className='text-center'>
        <h2 className='font-[500] text-xl text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200'>
          {elem?.title}
        </h2>
        <p className='text-gray-600 text-sm italic'>{elem?.author_name}</p>
        {/* <star/> */}
        <>
          <Star
            value={elem?.ratings_average}
            half={true}
            edit={false}
            count={5}
          />
        </>
        <div className='flex flex-col justify-center items-center mt-2'>
          <button onClick={() => alert("asdf")} 
          className='mt-4 px-4 py-2 bg-slate-800 text-sm text-white font-[500] rounded-full hover:bg-red-600 transition-colors duration-300 flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                clipRule='evenodd'
              />
            </svg>
            Add to Favorites
          </button>

          <button
            onClick={() => navigate(`/book/${elem?.key}`)}
            className='mt-4 px-2 py-2 cursor-pointer bg-slate-800 text-xs text-white font-[500] rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2'
          >
            <FaBookOpen className='h-5 w-5' />
            Read More
          </button>        
        </div>
      </div>
    </div>
  );
}

export default BooksCard;
