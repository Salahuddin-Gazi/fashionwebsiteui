import { useState } from 'react';
import AngleDown from '../icons/AngleDown';
import Image from 'next/image';
import RatingStars from './StarRating';
import ThumbsUp from '../icons/ThumbsUp';
import "./css/details_section.css";
import RatingBreakdown from './RatingBreakDown';

export default function DetailsSection({ product }) {
  const [selectedTab, setSelectedTab] = useState(1);
  const [order, setOrder] = useState('newest');

  function tabHandler(tab) {
    setSelectedTab(tab)
  }

  function handleOrder(e) {
    setOrder(e.target.value)
  }

  var reviews = [
    {
      "name": "Alice Johnson",
      "rating": 4.3,
      "review": "Amazing product, loved it!",
      "updatedAt": "2024-11-23T15:23:08.950Z",
      "liked": 10
    },
    {
      "name": "Bob Smith",
      "rating": 4.0,
      "review": "Good quality, but delivery was late.",
      "updatedAt": "2024-11-23T14:18:45.732Z",
      "liked": 7
    },
    {
      "name": "Carla Davis",
      "rating": 3.8,
      "review": "Product was okay, expected better.",
      "updatedAt": "2024-11-23T13:10:22.590Z",
      "liked": 8
    },
    {
      "name": "David Williams",
      "rating": 5.0,
      "review": "Absolutely perfect, highly recommend!",
      "updatedAt": "2024-11-23T12:45:30.123Z",
      "liked": 30
    },
    {
      "name": "Emma Brown",
      "rating": 4.2,
      "review": "Very satisfied with the purchase.",
      "updatedAt": "2024-11-23T11:33:20.456Z",
      "liked": 60
    },
    {
      "name": "Frank Martin",
      "rating": 3.5,
      "review": "Decent product, but could be improved.",
      "updatedAt": "2024-11-23T10:25:15.789Z",
      "liked": 1
    },
    {
      "name": "Grace Lee",
      "rating": 4.7,
      "review": "Exceeded my expectations!",
      "updatedAt": "2024-11-23T09:50:45.987Z",
      "liked": 6
    },
    {
      "name": "Henry Thompson",
      "rating": 4.1,
      "review": "Good value for money.",
      "updatedAt": "2024-11-23T08:40:55.654Z",
      "liked": 28
    },
    {
      "name": "Ivy Walker",
      "rating": 3.9,
      "review": "Satisfied with the product overall.",
      "updatedAt": "2024-11-23T07:30:40.321Z",
      "liked": 39
    },
    {
      "name": "Jack Harris",
      "rating": 4.6,
      "review": "Great product, fast delivery!",
      "updatedAt": "2024-11-23T06:15:25.876Z",
      "liked": 100
    }
  ];

  function sortReviews() {
    if (order === 'newest') {
      return reviews.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    } else if (order === 'oldest') {
      return reviews.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
    }
  }

  function timeAgo(updatedAt) {
    const now = new Date();
    const updatedDate = new Date(updatedAt);
    const diffMs = now - updatedDate; // Difference in milliseconds

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) return `${seconds} seconds`;
    if (minutes < 60) return `${minutes} minutes`;
    if (hours < 24) return `${hours} hours`;
    if (days < 7) return `${days} days`;
    if (weeks < 4) return `${weeks} weeks`;
    if (months < 12) return `${months} months`;
    return `${years} years`;
  }



  return <div className='max-w-[1280px] mx-auto px-4'>
    <div className='flex md:gap-x-16 gap-x-2 md:justify-start justify-between max-w-[400px]'>
      <button onClick={() => tabHandler(1)} className={`${selectedTab == 1 ? 'text-[#7E53D4]' : 'text-[#747474]'}`}>Details</button>
      <button onClick={() => tabHandler(2)} className={`${selectedTab == 2 ? 'text-[#7E53D4]' : 'text-[#747474]'}`}>Review & Rating</button>
      <button onClick={() => tabHandler(3)} className={`${selectedTab == 3 ? 'text-[#7E53D4]' : 'text-[#747474]'}`}>Discussion</button>
    </div>

    <div className='mt-6'>
      {selectedTab == 1 ?

        <div>
          <p className='font-normal md:text-[16px] text-[14px]'>{product.description}</p>
        </div>
        : selectedTab == 2 ?
          <div className='flex justify-between items-start gap-x-6 md:flex-row flex-col gap-y-8'>
            <div className='md:flex-[65] md:order-1 order-2'>

              <div className="relative w-[120px]">
                <select defaultValue={order} onChange={handleOrder} className='appearance-none focus-visible:outline-none border border-[#7E53D4] rounded-md py-2 px-3 w-full'>
                  <option value={'newest'}>Newest</option>
                  <option value={'oldest'}>Oldest</option>
                </select>
                <span className="absolute top-1/2 right-[10px] -translate-y-1/2 pointer-events-none">
                  <AngleDown />
                </span>
              </div>

              <div className='mt-6 max-h-[350px] overflow-y-scroll pl-4 custom-scrollbar' dir='rtl'>
                {[...sortReviews()].map((userReview, i) => (
                  <div className={`py-4${i != 0 ? ' border-t border-[#CECECE] border-dotted ' : ''}`} dir='ltr' key={userReview.updatedAt}>
                    <div className='flex gap-x-2'>
                      <div className='w-[40px] h-[40px] rounded-full'>
                        <Image
                          alt={userReview.name}
                          src={'/data/ui-images/user.png'}
                          width={500}
                          height={500}
                          className='aspect-square w-full rounded-full'
                        />
                      </div>

                      <div className='flex flex-col'>
                        <div className='flex gap-x-2 justify-start items-center'>
                          <h4 className='text-[16px]'>{userReview.name}</h4>
                          <span className='font-light text-[12px] mt-[2px]'>{timeAgo(userReview.updatedAt)}</span>
                        </div>
                        <RatingStars rating={userReview.rating} onRate={() => console.log('GG')} />
                      </div>
                    </div>

                    <p className='mt-6'>
                      {userReview.review}
                    </p>

                    <div className='flex gap-x-1 mt-6'>
                      <button><ThumbsUp /></button>
                      <p className='text-[12px] font-light'>{userReview.liked}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
            <div className='md:flex-[35] w-full md:order-2 order-1'>
              <div className='flex justify-start items-center gap-x-2'>
                <h4 className='md:text-[19px] text-[16px]'>Product Review</h4>
                <span className='text-[#7E53D4] md:text-[16px] text-[14px]'>{product.number_of_reviews} reviews</span>
              </div>
              <div className='mt-2 flex justify-between items-center border-b border-[#CECECE] border-dotted pb-4'>
                <RatingStars rating={product.rating} onRate={() => console.log('GG')} size={'8'} />
                <span>({product.rating})</span>
              </div>

              <div>
                <RatingBreakdown data={[
                  { stars: 5, percentage: 50 },
                  { stars: 4, percentage: 30 },
                  { stars: 3, percentage: 15 },
                  { stars: 2, percentage: 4 },
                  { stars: 1, percentage: 1 },
                ]} />
              </div>
            </div>
          </div>
          :
          <div className='flex flex-col gap-y-8'>
            {product.comments.map((comment, i) => (
              <div key={i}>
                <div className='flex gap-x-2'>
                  <div className='w-[40px] h-[40px] rounded-full'>
                    <Image
                      alt={comment.user}
                      src={'/data/ui-images/user.png'}
                      width={500}
                      height={500}
                      className='aspect-square w-full rounded-full'
                    />
                  </div>

                  <div className='flex flex-col'>
                    <div className='flex gap-x-2 justify-start items-center'>
                      <h4 className='text-[16px]'>{comment.user}</h4>
                      <span className='font-light text-[12px] mt-[2px]'>{timeAgo(comment.date)}</span>
                    </div>
                    <RatingStars rating={comment.rating} onRate={() => console.log('GG')} />
                  </div>
                </div>

                <p className='mt-6'>
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
      }
    </div>
  </div>
}