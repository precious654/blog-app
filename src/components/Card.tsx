interface info {
  item: {
    author: string,
    title: string,
    description: string,
  }
}

function Card(props: info) {
  return (
    <div className='p-5 w-1/2 hover:drop-shadow-lg bg-white rounded-lg'>
      <p className="font-medium text-2xl text-gray-900 mb-5">{props.item.title}</p>
      <p className='font-medium text-mg text-gray-500 mb-5'>{props.item.description}</p>
      <p className='font-medium text-sm text-gray-700'>{props.item.author}</p>
    </div>
  )
}

export default Card;
