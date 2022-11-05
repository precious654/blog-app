interface info {
  item: {
    author: string,
    title: string,
    description: string,
  }
}

function Card(props: info) {
  return (
    <div className='p-5 w-1/2 hover:drop-shadow-lg bg-white rounded-lg mt-5'>
      <p className="font-medium text-xl text-gray-900 mb-3">{props.item.title}</p>
      <p className='font-medium text-lg text-gray-700 mb-5'>{props.item.description}</p>
      <p className='font-medium text-sm text-gray-300'>{props.item.author}</p>
    </div>
  )
}

export default Card;
