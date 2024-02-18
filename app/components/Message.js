import Image from 'next/image';

export default function Message({ image, name, message, time, status }) {
  return (
    <div className="bg-white rounded-[20px] p-5 inline-block flex items-center w-[700px] mx-auto">
      <div className="flex items-center gap-5 flex-col">
        <div className="flex flex-row justify-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              className="rounded-full"
              src={image}
              alt="Me image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col flex-grow w-[600px] p-4 border border-gray-200 bg-blue-300 rounded-lg dark:bg-blue-700">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {name}
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {time}
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
              {message}
            </p>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {status}
            </span>
          </div>
        </div>
        <div className="ml-[2rem]">
          <form className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800 w-[600px]">
              <label htmlFor="comment" className="sr-only">
                Your message
              </label>
              <textarea
                id="comment"
                rows="4"
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200 dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
