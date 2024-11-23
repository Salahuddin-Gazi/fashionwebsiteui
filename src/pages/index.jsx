import BigDeal from '@/components/ui/BigDeal';
import Collections from '@/components/ui/Collections';
import HeroMain from '@/components/ui/HeroMain';
import NewArrival from '@/components/ui/NewArrival';
import SummerBigDeal from '@/components/ui/SummerBigDeal';

export default function Home() {
  return (
    <div className=''>
      <HeroMain />
      <div className='md:px-8 px-4'>
        <NewArrival />
      </div>
      <div className="sm:mt-16 mt-12">
        <BigDeal />
      </div>
      <div className="sm:mt-16 mt-12">
        <Collections />
      </div>
      <div className="sm:mt-16 mt-12 md:px-8 px-4">
        <SummerBigDeal />
      </div>
    </div>
  );
}