// inboxCard.tsx

const InboxCard = () => {

  return (
    <div className="flex space-x-3 bg-gray-100 shadow-md h-40 p-2 border border-b-gray-200 cursor-pointer rounded-md mb-2">
      <div className="flex w-2/12 justify-center items-center bg-green-400 h-16 rounded-full text-xl">P</div>
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

export default InboxCard