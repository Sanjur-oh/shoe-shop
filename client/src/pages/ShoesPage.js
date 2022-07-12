import React from 'react';
// import {useSelector, useDispatch} from 'react-redux'
// import {fetchShoes} from '../redux/features/shoeSlice'
import ShoeCard from './ShoeCard'
import './ShoesPage.css'

function ShoesPage() {
  // const shoes = useSelector((state) => state);
  // console.log(shoes)
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchShoes());
  // }, []);

  return (
    <>
        <h1>Browse Shoes</h1>
      <div id="container">
            <ul className='cards'>
                {(<ShoeCard />)}
            </ul>
        </div>
    </>
  );
}

export default ShoesPage

