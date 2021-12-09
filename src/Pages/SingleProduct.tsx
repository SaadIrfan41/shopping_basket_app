import { useParams } from 'react-router-dom'
import { addToCart } from '../store/CartSlice'
import { useGetSingleProductQuery } from '../store/ProductsApi'
import { useAppDispatch } from '../store/store'
import { productTypes } from './Home'

const SingleProduct = () => {
  // const dispatch = useAppDispatch()
  const { id } = useParams()
  const { data, error, isLoading } = useGetSingleProductQuery(id)
  const dispatch = useAppDispatch()
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const handleAddToCart = (product: productTypes) => {
    dispatch(addToCart(product))
  }
  return (
    <div>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <div className='lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                Product Name
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-4'>
                {data.title}
              </h1>
              <div className='flex mb-4'>
                <span className='flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1'>
                  Description
                </span>
              </div>
              <p className='leading-relaxed mb-4'>{data.description}</p>
              <div className='flex border-t border-gray-200 py-2'>
                <span className='text-gray-500'>Category</span>
                <span className='ml-auto text-gray-900'>{data.category}</span>
              </div>

              <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
                <span className='text-gray-500'>Rating</span>
                <span className='ml-auto text-gray-900'>
                  {data.rating.rate}
                </span>
              </div>
              <div className='flex'>
                <span className='title-font font-medium text-2xl text-gray-900'>
                  ${data.price}
                </span>
                <button
                  onClick={() => handleAddToCart(data)}
                  className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <img
              width={400}
              height={400}
              alt='ecommerce'
              className=''
              src={data.image}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleProduct
