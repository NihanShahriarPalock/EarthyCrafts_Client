import Marquee from "react-fast-marquee";

const Partner = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300'>
      <h2 className='p-4 md:p-10 text-center font-bold text-2xl lg:text-4xl'>
        Our Partners
      </h2>
      <div className=' w-full h-40 flex items-center justify-center shadow-2xl'>
        <Marquee speed={70}>
          <img
            className='mr-10 h-28'
            src='https://i.ibb.co/XSgMWx4/jute-1-removebg-preview.png'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://i.ibb.co/9wdcBxf/partner-2.png'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://i.ibb.co/0GSHqgf/partner-3.png'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://i.ibb.co/0VdHjV8/partner-4.png'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://i.ibb.co/QMQMqtW/partner-5.png'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://i.ibb.co/nrbZNqN/partner-6.png'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://i.ibb.co/kHWgsdr/partner-7.png'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://i.ibb.co/GTcgRbm/partner-8.png'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://i.ibb.co/yX9ZXRm/partner-9.png'
            alt=''
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
