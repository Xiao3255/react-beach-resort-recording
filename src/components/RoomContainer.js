import { withRoomConsumer } from '../context';
import RoomList from './RoomList';
import RoomFilter from './RoomFilter';
import Loading from '../components/Loading';

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomList from './RoomList';
// import RoomFilter from './RoomFilter';
// import { RoomConsumer } from '../context';
// import Loading from '../components/Loading';

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           <Loading />;
//         }
//         return (
//           <div>
//             hello from room container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
