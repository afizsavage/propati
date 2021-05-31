// messages page
import {useState} from 'react'
import { Navbar } from "../../components/navbar";
import { InboxCard, SentCard, DraftCard, DeletedCard } from "../../components/mailCard";

const Messages = () => {

  const [isSearchTrigger, setIsSearchTrigger] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<any>();
  const [navIndex, setNavIndex] = useState<number>(0);

  const activeMailNav ="flex w-3/12 justify-center items-center text-center border-b-2 border-teal-500 cursor-pointer";
  const inactiveMailNav ="flex w-3/12 justify-center items-center text-center border-b-2 cursor-pointer"
  const activeMailTotal = "flex justify-center items-center bg-teal-500 rounded-full p-1 ml-1 w-6 h-6 text-white font-semibold";
  const inactiveMailTotal = "flex justify-center items-center bg-gray-300 rounded-full p-1 ml-1 w-6 h-6 font-semibold";

  const handleSearchTrigger = () => {
    setIsSearchTrigger(!isSearchTrigger);
  }

  const handleSearchText = (e: any) => {
    setSearchText(e.target.value)
  }

  const handleMailNavChange = (index: number) => {
    setNavIndex(index);
  }


  return (
    <div className="">
      <Navbar />
      <div className="flex border border-t-gray-200 bg-gray-200 w-full h-full fixed">
        <div className="w-1/4 bg-blue-200">
          <div className="flex space-x-4 bg-gray-200 h-24 p-5">
            {!isSearchTrigger? 
              <div 
                className="w-5/6 rounded-full text-white flex items-center justify-center bg-teal-500 shadow-lg">
                  <svg aria-hidden="true" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-paper-plane fa-w-16 fa-7x w-5 mr-4"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                Send Message
              </div>
            :
              <div className="w-5/6 rounded-full text-white flex items-center justify-center">
                <input 
                  className="p-2 focus:outline-none bg-transparent border-teal-500 border-b-2 rounded text-gray-600 text-xl hover:focus:ring-4 hover:focus:ring-red-500 text-center"    
                  type="text" 
                  placeholder="Search text" 
                  onChange={handleSearchText} 
                  value={searchText}/>
              </div>
            }
            <div 
              onClick={handleSearchTrigger} 
              className="w-1/6  cursor-pointer my-auto">
                <span className="w-10 h-10 border border-gray-400 text-gray-400 hover:border-gray-600 hover:text-gray-600 flex items-center justify-center rounded-full">
                  <svg aria-hidden="true" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16 fa-7x w-6 "><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
                </span>
              </div>
          </div>
          <div className="flex space-x-1 box-content bg-gray-200 h-16 border-t-2 border-b-2 border-gray-300">
            <div onClick={() => handleMailNavChange(0)} 
              className={ navIndex === 0? activeMailNav : inactiveMailNav }>
              <svg aria-hidden="true" data-prefix="far" data-icon="inbox" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-inbox fa-w-18 fa-7x w-6 text-teal-600"><path fill="currentColor" d="M567.403 235.642L462.323 84.589A48 48 0 0 0 422.919 64H153.081a48 48 0 0 0-39.404 20.589L8.597 235.642A48.001 48.001 0 0 0 0 263.054V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V263.054c0-9.801-3-19.366-8.597-27.412zM153.081 112h269.838l77.913 112H378.334l-32 64H229.666l-32-64H75.168l77.913-112zM528 400H48V272h120l32 64h176l32-64h120v128z"></path></svg>
              <span className={navIndex === 0? activeMailTotal : inactiveMailTotal}>5</span>
            </div>
            <div onClick={() => handleMailNavChange(1)} 
              className={ navIndex === 1? activeMailNav : inactiveMailNav }>
              <svg aria-hidden="true" data-prefix="far" data-icon="box-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg-inline--fa fa-box-check fa-w-20 fa-7x w-6 text-teal-600"><path fill="currentColor" d="M492.5 133.4L458.9 32.8C452.4 13.2 434.1 0 413.4 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-1.6 4.9-2.5 10-2.5 15.2V464c0 26.5 21.5 48 48 48h400c106 0 192-86 192-192 0-90.7-63-166.5-147.5-186.6zM280 48h133.4l26.8 80.4c-49.8 2-94.7 22.7-127.7 55.6H280V48zM98.6 48H232v136H53.3L98.6 48zM48 464V232h229.5c-13.6 26.4-21.5 56.3-21.5 88 0 57.4 25.3 108.8 65.3 144H48zm400 0c-79.4 0-144-64.6-144-144s64.6-144 144-144 144 64.6 144 144-64.6 144-144 144zm64.6-205.7c-3.1-3.1-8.1-3.1-11.2 0l-69.9 69.3-30.3-30.6c-3.1-3.1-8.1-3.1-11.2 0l-18.7 18.6c-3.1 3.1-3.1 8.1 0 11.2l54.4 54.9c3.1 3.1 8.1 3.1 11.2 0l94.2-93.5c3.1-3.1 3.1-8.1 0-11.2l-18.5-18.7z"></path></svg>
              <span className={navIndex === 1? activeMailTotal : inactiveMailTotal}>3</span>
            </div>
            <div onClick={() => handleMailNavChange(2)} 
              className={ navIndex === 2? activeMailNav : inactiveMailNav }>
              <svg aria-hidden="true" data-prefix="far" data-icon="exclamation-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-exclamation-circle fa-w-16 fa-7x w-6 text-teal-600"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm42-104c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42zm-81.37-211.401l6.8 136c.319 6.387 5.591 11.401 11.985 11.401h41.17c6.394 0 11.666-5.014 11.985-11.401l6.8-136c.343-6.854-5.122-12.599-11.985-12.599h-54.77c-6.863 0-12.328 5.745-11.985 12.599z"></path></svg>
              <span className={navIndex === 2? activeMailTotal : inactiveMailTotal}>4</span>
            </div>
            <div onClick={() => handleMailNavChange(3)} 
              className={ navIndex === 3? activeMailNav : inactiveMailNav }>
              <svg aria-hidden="true" data-prefix="far" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-trash fa-w-16 fa-7x w-6 text-teal-600"><path fill="currentColor" d="M381.6 80l-34-56.7C338.9 8.8 323.3 0 306.4 0H205.6c-16.9 0-32.5 8.8-41.2 23.3l-34 56.7H40c-13.3 0-24 10.7-24 24v12c0 6.6 5.4 12 12 12h16.4L76 468.4c2.3 24.7 23 43.6 47.8 43.6h264.5c24.8 0 45.5-18.9 47.8-43.6L467.6 128H484c6.6 0 12-5.4 12-12v-12c0-13.3-10.7-24-24-24h-90.4zm-176-32h100.8l19.2 32H186.4l19.2-32zm182.6 416H123.8L92.6 128h326.7l-31.1 336z"></path></svg>
              <span className={navIndex === 3? activeMailTotal : inactiveMailTotal}>3</span>
            </div>
          </div>
          <div className="flex items-center pl-5 text-md bg-gray-200 font-semibold h-16">
            {navIndex === 0? "Inbox" : 
            navIndex === 1? "Sent Messages" :
            navIndex === 2? "Drafts Messages" : "Deleted Messages"
            }
          </div>
          <div className="h-inboxContainer p-2">
            <div className="bg-transparent overflow-y-scroll h-full">
              {navIndex === 0?
              <>
                <InboxCard />
                <InboxCard />
                <InboxCard />
                <InboxCard />
                <InboxCard />
              </>
              :navIndex === 1?
              <>
                <SentCard />
                <SentCard />
                <SentCard />
                <SentCard />
                <SentCard />
              </>
              :navIndex === 2?
              <>
                <DraftCard />
                <DraftCard />
                <DraftCard />
                <DraftCard />
                <DraftCard />
              </>
              :
              <>
                <DeletedCard />
                <DeletedCard />
                <DeletedCard />
                <DeletedCard />
                <DeletedCard />
              </>
              }
            </div>
          </div>
        </div>
        <div className="w-2/4 bg-teal-200 h-full">
            
        </div>
        <div className="w-1/4 bg-yellow-200 h-full">

        </div>
      </div>
    </div>
  )

}

export default Messages