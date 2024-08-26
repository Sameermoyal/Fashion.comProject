
import React from 'react'

function Home() {
  return (
    <>
      <div  classNameName='flex flex-col md:flex-row'>
        <div  classNameName='relative'>
          <img
             classNameName='w-full md:w-100 h-64 md:h-auto object-cover'
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg"
            alt=""
          />
          {/* <div  classNameName='absolute top-1/2 left-8 transform -translate-y-1/2 md:left-12 md:top-1/3 text-xl md:text-2xl font-extrabold'>
            <h2  classNameName='font-semibold'>WOMEN COLLECTION</h2>
            <h1>
              <span  classNameName='text-blue-600'>Show</span> Your Personal{' '}
              <span  classNameName='text-blue-700'>Style</span>
            </h1>
            <h4>Beat Old Fashion TRUSTED</h4>
            <button  classNameName='mt-4 bg-green-500 h-10 w-48 md:w-60 rounded-xl text-white'>
              VIEW COLLECTION
            </button>
          </div> */}
        </div>
      </div>
     
      <div  className="">
            <div  className="flex w-full flex-col">
                <div  className="flex justify-center w-full flex-row"><a href=""><h1>MENS FASHIONS</h1></a></div>
                <div  className="">
                    <div  className=" flex justify-evenly flex-wrap">
                        <img src="./men/m7.png" alt=""/>
                        <img src="./men/m8.png" alt=""/>
                        <img src="./men/m4.png" alt=""/>
                        <img src="./men/m2.png" alt=""/>
                    </div>
                </div>
            </div>
            <div  className="flex w-full flex-col">
                <div  className="flex justify-center w-full flex-row"><a href=""><h1>WOMEN FASHIONS</h1></a></div>
                <div  className="">
                    <div  className="flex justify-evenly flex-wrap">
                        <img src="./women/w4.png" alt=""/>
                        <img src=" ./women/w3.png" alt=""/>
                        <img src=" ./women/w8.png" alt=""/>
                        <img src="./women/w1.png" alt=""/>
                    </div>
                </div>
            </div>
            <div  className="flex w-full flex-col">
                <div  className="flex justify-center w-full flex-row"><a href=""><h1>CHILD FASHIONS</h1></a></div>
                <div  className="">
                    <div  className="flex justify-evenly flex-wrap">
                        <img src="/kids/k5.png" alt=""/>
                        <img src="kids/k7.png" alt=""/>
                        <img src="/kids/k8.png" alt=""/>
                        <img src="kids/k4.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Home
