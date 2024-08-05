import React, { useState } from "react";

function UserSettingForLargeScreens() {
  const [toggleUserControl, setToggleUserControl] = useState(false);
  const handleToggleUserControl = () => {
    setTimeout(() => {
      setToggleUserControl(!toggleUserControl);
    }, 200);
  };
  return (
    <>
      <div className='sticky p-2 bg-stone-800 xl:block lg:block md:block sm:block hidden'>
        <div className='relative z-10 w-fit ms-auto'>
          <div
            onClick={handleToggleUserControl}
            className='w-fit h-fit p-2 rounded-lg cursor-pointer
               hover:bg-neutral-700 ms-auto'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='#B4B4B4'>
              <path d='M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z'></path>
            </svg>
          </div>
          {toggleUserControl && (
            <div
              onClick={handleToggleUserControl}
              className='w-screen h-screen fixed top-0 left-0 -z-10'>
              <div
                className='absolute top-14 right-6 w-72
            bg-neutral-700 border border-neutral-600
             p-2 rounded-xl'>
                <ul className='list-none'>
                  <li
                    className='relative flex justify-between items-center 
          p-3  rounded-lg cursor-pointer group
        hover:bg-neutral-600 '>
                    <div className='flex items-center gap-3'>
                      <div
                        className='h-6 w-6 rounded-full
            border-neutral-600 flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          fill='none'
                          viewBox='0 0 24 24'
                          className='h-5 w-5 shrink-0'>
                          <path
                            fill='#B4B4B4'
                            fillRule='evenodd'
                            d='M11.568 3.5a1 1 0 0 0-.863.494l-.811 1.381A3 3 0 0 1 7.33 6.856l-1.596.013a1 1 0 0 0-.858.501l-.44.761a1 1 0 0 0-.003.992l.792 1.4a3 3 0 0 1 0 2.954l-.792 1.4a1 1 0 0 0 .004.992l.439.76a1 1 0 0 0 .858.502l1.596.013a3 3 0 0 1 2.564 1.48l.811 1.382a1 1 0 0 0 .863.494h.87a1 1 0 0 0 .862-.494l.812-1.381a3 3 0 0 1 2.563-1.481l1.596-.013a1 1 0 0 0 .859-.501l.439-.761a1 1 0 0 0 .004-.992l-.793-1.4a3 3 0 0 1 0-2.953l.793-1.401a1 1 0 0 0-.004-.992l-.439-.76a1 1 0 0 0-.859-.502l-1.596-.013a3 3 0 0 1-2.563-1.48L13.3 3.993a1 1 0 0 0-.862-.494zM8.98 2.981A3 3 0 0 1 11.568 1.5h.87a3 3 0 0 1 2.588 1.481l.81 1.382a1 1 0 0 0 .855.494l1.597.013a3 3 0 0 1 2.575 1.502l.44.76a3 3 0 0 1 .011 2.975l-.792 1.4a1 1 0 0 0 0 .985l.792 1.401a3 3 0 0 1-.012 2.974l-.439.761a3 3 0 0 1-2.575 1.503l-1.597.012a1 1 0 0 0-.854.494l-.811 1.382a3 3 0 0 1-2.588 1.481h-.87a3 3 0 0 1-2.588-1.481l-.811-1.382a1 1 0 0 0-.855-.494l-1.596-.012a3 3 0 0 1-2.576-1.503l-.439-.76a3 3 0 0 1-.012-2.975l.793-1.4a1 1 0 0 0 0-.985l-.793-1.4a3 3 0 0 1 .012-2.975l.44-.761A3 3 0 0 1 5.717 4.87l1.596-.013a1 1 0 0 0 .855-.494z'
                            clipRule='evenodd'></path>
                          <path
                            fill='#B4B4B4'
                            fillRule='evenodd'
                            d='M12.003 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M8.502 12a3.5 3.5 0 1 1 7 .001 3.5 3.5 0 0 1-7-.001'
                            clipRule='evenodd'></path>
                        </svg>
                      </div>
                      <div>
                        <p className='text-stone-200'>Setting</p>
                      </div>
                    </div>
                  </li>
                  <li
                    className='relative flex justify-between items-center 
          p-3 rounded-lg cursor-pointer group
        hover:bg-neutral-600 '>
                    <div className='flex items-center gap-3'>
                      <div
                        className='h-6 w-6 rounded-full
            border-neutral-600 flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          fill='none'
                          viewBox='0 0 24 24'>
                          <path
                            fill='#B4B4B4'
                            fillRule='evenodd'
                            d='M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4a1 1 0 1 1 0 2zm9.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.586 13H11a1 1 0 1 1 0-2h6.586l-2.293-2.293a1 1 0 0 1 0-1.414'
                            clipRule='evenodd'></path>
                        </svg>
                      </div>
                      <div>
                        <p className='text-stone-200'>Log out</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserSettingForLargeScreens;
