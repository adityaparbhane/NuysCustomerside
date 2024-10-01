// import React, { useState } from 'react';
// import axios from 'axios';

// const Track1 = () => {
//   const [trackingNumber, setTrackingNumber] = useState('');
//   const [trackingInfo, setTrackingInfo] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleTrack = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(`http://localhost:5000/track?trackingNumber=${trackingNumber}`);
//       setTrackingInfo(response.data);
//     } catch (err) {
//       setError('Unable to fetch tracking details');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container my-40 mx-40">
//       <h1 className="text-4xl">Track Your Parcel</h1>
//       <div className="form-group mt-4">
//         <input
//           type="text"
//           value={trackingNumber}
//           onChange={(e) => setTrackingNumber(e.target.value)}
//           className="form-control border py-2 border-indigo-400 px-4 rounded-lg"
//           placeholder="Enter tracking number"
//         />
//         <button onClick={handleTrack} className="ml-6 bg-orange-400 text-white px-4 py-2" disabled={loading}>
//           {loading ? 'Tracking...' : 'Track'}
//         </button>
//       </div>
//       {error && <div className="alert alert-danger">{error}</div>}
//       {trackingInfo && (
//         <div className="tracking-info mt-5">
//           <h2>Consignment No: {trackingInfo.consignmentNumber}</h2>
//           <p><strong>From Center:</strong> {trackingInfo.fromCenter}</p>
//           <p><strong>To Center:</strong> {trackingInfo.toCenter}</p>
//           <p><strong>Date / Time:</strong> {trackingInfo.date}</p>
//           <p><strong>Consignee:</strong> {trackingInfo.receiver}</p>
//           <h2>Transit Details</h2>
//           <table className="bordered">
//             <thead>
//               <tr>
//                 <th>Job</th>
//                 <th>Date</th>
//                 <th>Transit Route</th>
//                 <th>Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {trackingInfo.transitDetails.map((row, index) => (
//                 <tr key={index}>
//                   <td>{row.job}</td>
//                   <td>{row.date}</td>
//                   <td dangerouslySetInnerHTML={{ __html: row.route }} />
//                   <td>{row.time}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <h2>Delivery Details</h2>
//           <table className="bordered">
//             <thead>
//               <tr>
//                 <th>Date/Time</th>
//                 <th>Delivery Branch</th>
//                 <th>Receiver</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {trackingInfo.deliveryDetails.map((row, index) => (
//                 <tr key={index}>
//                   <td>{row.dateTime}</td>
//                   <td dangerouslySetInnerHTML={{ __html: row.branch }} />
//                   <td>{row.receiver}</td>
//                   <td>{row.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <h2>Status: {trackingInfo.status}</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Track1;


import React, { useState } from 'react';
import axios from 'axios';

const Track1 = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTrack = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:5000/track-dtdc?trackingNumber=${trackingNumber}`);
      setTrackingInfo(response.data);
    } catch (err) {
      setError('Unable to fetch tracking details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-40 mx-40">
      <h1 className="text-4xl">Track Your DTDC Parcel</h1>
      <div className="form-group mt-4">
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="form-control border py-2 border-indigo-400 px-4 rounded-lg"
          placeholder="Enter DTDC tracking number"
        />
        <button onClick={handleTrack} className="ml-6 bg-orange-400 text-white px-4 py-2" disabled={loading}>
          {loading ? 'Tracking...' : 'Track'}
        </button>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {trackingInfo && (
        <div className="tracking-info mt-5">
          <h2>Consignment No: {trackingInfo.consignmentNumber}</h2>
          <p>Current Status: {trackingInfo.currentStatus}</p>
          <p>Delivery Date: {trackingInfo.deliveryDate}</p>
          <p>Delivery Time: {trackingInfo.deliveryTime}</p>
          <p>Receiver Name: {trackingInfo.receiverName}</p>
          <p>Sender Name: {trackingInfo.senderName}</p>
          <p>Pickup Date: {trackingInfo.pickupDate}</p>
          <p>Pickup Time: {trackingInfo.pickupTime}</p>
        </div>
      )}
    </div>
  );
};

export default Track1;
