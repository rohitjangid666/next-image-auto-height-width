import Image from 'next/image';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='m-2 grid grid-cols-12 gap-2'>
        {Array.from({ length: 12 }).map((_, i) => {
          const randomId = (Math.random() * 1000).toFixed(0);
          return (
            <div
              key={i}
              className='col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full bg-gray-100 relative'
            >
              {/* //* WAY 1 */}
              {/* <Image
                src={`https://picsum.photos/id/${randomId}/640/340`}
                objectFit='cover'
                layout='fill'
                alt={`alt`}
              /> */}

              {/* //* WAY 2 */}
              <Image
                src={`https://picsum.photos/id/${randomId}/640/340`}
                fill
                className='object-cover'
                alt={`alt`}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
