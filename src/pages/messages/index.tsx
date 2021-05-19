// messages page
import {useState} from 'react'
import { Navbar } from "../../components/navbar";
import InboxCard from "../../components/inboxCard";

const Messages = () => {

  const [isSearchTrigger, setIsSearchTrigger] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<any>();


  const handleSearchTrigger = () => {
    setIsSearchTrigger(!isSearchTrigger);
  }

  const handleSearchText = (e: any) => {
    setSearchText(e.target.value)
  }


  return (
    <div className="">
      <Navbar />
      <div className="flex border border-t-gray-200 bg-red-400 w-full h-full fixed">
        <div className="w-1/4 bg-blue-200">
          <div className="flex space-x-4 bg-red-200 h-24 p-5">
            {!isSearchTrigger? 
              <div 
                className="w-5/6 rounded-full text-white flex items-center justify-center bg-yellow-500">
                Send Message
              </div>
            :
              <div className="w-5/6 rounded-full text-white flex items-center justify-center">
                <input 
                  className="p-2 focus:outline-none bg-transparent border-gray-500 border-b-2 rounded text-red-500 text-xl hover:focus:ring-4 hover:focus:ring-red-500 text-center"    
                  type="text" 
                  placeholder="Search text" 
                  onChange={handleSearchText} 
                  value={searchText}/>
              </div>
            }
            <div 
              onClick={handleSearchTrigger} 
              className="w-1/6 rounded-full text-white flex items-center justify-center cursor-pointer bg-teal-500 hover:bg-teal-700">S</div>
          </div>
          <div className="flex p-3 space-x-6 box-content bg-indigo-500 h-10">
            <div className="flex w-3/12 justify-center items-center text-center bg-pink-500">1</div>
            <div className="flex w-3/12 justify-center items-center text-center bg-blue-300">2</div>
            <div className="flex w-3/12 justify-center items-center text-center bg-red-600">3</div>
            <div className="flex w-3/12 justify-center items-center text-center bg-gray-800">4</div>
          </div>
          <div className="flex items-center pl-3 text-xl bg-yellow-400 h-16">
            Inbox
          </div>
          <div className="h-inboxContainer p-2">
            <div className="bg-transparent overflow-y-scroll h-full">
              <InboxCard />
              <InboxCard />
              <InboxCard />
              <InboxCard />
              <InboxCard /> 
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