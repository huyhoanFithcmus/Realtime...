import Countdown from 'react-countdown'

export default function CountDownPage() {
  const DeadlineTime = new Date('2024-07-30T00:00:00')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return (
        <>
          <h1 className='text-5xl p-4'>Robocus 2024 is over!</h1>
          <h2 className='text-2xl'>Thank you for participating!</h2>
        </>
      )
    } else {
      // Render a countdown
      return (
        <>
          <div className='w-full h-screen bg-gradient-to-bl from-teal-400 to-blue-500 flex flex-col justify-center items-center text-white p-0'>
            <h1 className='text-5xl p-4'>
              <b>ROBOCUS 2024</b> is coming!
            </h1>
            <h2 className='text-2xl'>Will be held after</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 lg:mt-20'>
              <div className='bg-transparent border text-center'>
                <p className='text-5xl px-10 py-5'>{days}</p>
                <hr />
                <p className='px-10 py-5'>days</p>
              </div>

              <div className='bg-transparent border text-center'>
                <p className='text-5xl px-10 py-5'>{hours}</p>
                <hr />
                <p className='px-10 py-5'>hours</p>
              </div>

              <div className='bg-transparent border text-center'>
                <p className='text-5xl px-10 py-5'>{minutes}</p>
                <hr />
                <p className='px-10 py-5'>mins</p>
              </div>
              <div className='bg-transparent border text-center'>
                <p className='text-5xl px-10 py-5'>{seconds}</p>
                <hr />
                <p className='px-10 py-5'>secs</p>
              </div>
            </div>
          </div>
        </>
      )
    }
  }
  return (
    <>
      <div>
        <Countdown date={DeadlineTime} renderer={renderer} />
      </div>
    </>
  )
}
