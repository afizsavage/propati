// mailCard.tsx

export const InboxCard = () => {
  return (
    <div className="flex space-x-3 bg-gray-100 shadow-md h-40 p-2 border border-b-gray-200 cursor-pointer rounded-md mb-2">
      <div className="flex w-2/12 justify-center h-10 mt-2">
        <span className="flex justify-center w-10 bg-indigo-500 rounded-full text-lg text-center items-center text-white font-semibold">IC</span>
      </div>
      <div className="w-10/12 p-2">
        <div className="flex justify-between">
          <div className="font-semibold text-lg text-gray-600">John Doe</div>
          <div className="font-semibold text-md text-gray-500">09:47 AM</div>
        </div>
        <div className="text-md text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Temporibus alias id laborum doloremque facere ...
        </div>
        <div className="flex justify-between items-end">
          <div></div>
          <div className="bg-yellow-200 rounded-full p-1 w-20 text-center">Buyer</div>
        </div>
      </div>
    </div>
  )
}

export const SentCard = () => {
  return (
    <div className="flex space-x-3 bg-gray-100 shadow-md h-40 p-2 border border-b-gray-200 cursor-pointer rounded-md mb-2">
      <div className="flex w-2/12 justify-center h-10 mt-2">
        <span className="flex justify-center w-10 bg-yellow-700 rounded-full text-lg text-center items-center text-white font-semibold">ST</span>
      </div>
      <div className="w-10/12 p-2">
        <div className="flex justify-between">
          <div className="font-semibold text-lg text-gray-600">John Doe</div>
          <div className="font-semibold text-md text-gray-500">09:47 AM</div>
        </div>
        <div className="text-md text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Temporibus alias id laborum doloremque facere ...
        </div>
        <div className="flex justify-between items-end">
          <div></div>
          <div className="bg-yellow-200 rounded-full p-1 w-20 text-center">Buyer</div>
        </div>
      </div>
    </div>
  )
}

export const DraftCard = () => {
  return (
    <div className="flex space-x-3 bg-gray-100 shadow-md h-40 p-2 border border-b-gray-200 cursor-pointer rounded-md mb-2">
      <div className="flex w-2/12 justify-center h-10 mt-2">
        <span className="flex justify-center w-10 bg-blue-500 rounded-full text-lg text-center items-center text-white font-semibold">DC</span>
      </div>
      <div className="w-10/12 p-2">
        <div className="flex justify-between">
          <div className="font-semibold text-lg text-gray-600">John Doe</div>
          <div className="font-semibold text-md text-gray-500">09:47 AM</div>
        </div>
        <div className="text-md text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Temporibus alias id laborum doloremque facere ...
        </div>
        <div className="flex justify-between items-end">
          <div></div>
          <div className="bg-yellow-200 rounded-full p-1 w-20 text-center">Buyer</div>
        </div>
      </div>
    </div>
  )
}

export const DeletedCard = () => {
  return (
    <div className="flex space-x-3 bg-gray-100 shadow-md h-40 p-2 border border-b-gray-200 cursor-pointer rounded-md mb-2">
      <div className="flex w-2/12 justify-center h-10 mt-2">
        <span className="flex justify-center w-10 bg-red-500 rounded-full text-lg text-center items-center text-white font-semibold">DL</span>
      </div>
      <div className="w-10/12 p-2">
        <div className="flex justify-between">
          <div className="font-semibold text-lg text-gray-600">John Doe</div>
          <div className="font-semibold text-md text-gray-500">09:47 AM</div>
        </div>
        <div className="text-md text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Temporibus alias id laborum doloremque facere ...
        </div>
        <div className="flex justify-between items-end">
          <div></div>
          <div className="bg-yellow-200 rounded-full p-1 w-20 text-center">Buyer</div>
        </div>
      </div>
    </div>
  )
}
