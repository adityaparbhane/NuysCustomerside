

import React, { useState } from 'react';
import axios from 'axios';

const TrackingComponent = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTrack = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:5000/track?trackingNumber=${trackingNumber}`);
      const htmlString = response.data;

      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');
      
      const consignmentNumber = doc.querySelector('#lblDocNumber')?.textContent;
      const fromCenter = doc.querySelector('#txtFromCenter')?.textContent;
      const toCenter = doc.querySelector('#txtToCenter')?.textContent;
      const date = doc.querySelector('#txtDate')?.textContent;
      const receiver = doc.querySelector('#txtReceiver')?.textContent;
      const status = doc.querySelector('#lblStatus')?.textContent;
      
      const transitRows = Array.from(doc.querySelectorAll('#tblTrack tr')).map(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length === 4) {
          return {
            job: cells[0].textContent,
            date: cells[1].textContent,
            route: cells[2].innerHTML,
            time: cells[3].textContent
          };
        }
        return null;
      }).filter(Boolean);

      const deliveryRows = Array.from(doc.querySelectorAll('#tblDelivery tr')).map(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length === 4) {
          return {
            dateTime: cells[0].textContent,
            branch: cells[1].innerHTML,
            receiver: cells[2].textContent,
            status: cells[3].textContent
          };
        }
        return null;
      }).filter(Boolean);

      setTrackingInfo({
        consignmentNumber,
        fromCenter,
        toCenter,
        date,
        receiver,
        status,
        transitDetails: transitRows,
        deliveryDetails: deliveryRows
      });
    } catch (err) {
      setError('Unable to fetch tracking details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-40 mx-40">
      <h1 className="text-4xl">Track Your Parcel</h1>
      <div className="form-group mt-4">
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="form-control border py-2 border-indigo-400 px-4 rounded-lg"
          placeholder="Enter tracking number"
        />
        <button onClick={handleTrack} className="ml-6 bg-orange-400 text-white px-4 py-2" disabled={loading}>
          {loading ? 'Tracking...' : 'Track'}
        </button>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {trackingInfo && (
        <div className="tracking-info border-2  p-4 mt-5">
          <h2>Consignment No: {trackingInfo.consignmentNumber}</h2>
          <p><strong>From Center:</strong> {trackingInfo.fromCenter}</p>
          <p><strong>To Center:</strong> {trackingInfo.toCenter}</p>
          <p><strong>Date / Time:</strong> {trackingInfo.date}</p>
          <p><strong>Consignee:</strong> {trackingInfo.receiver}</p>
          <h2>Transit Details</h2>
          <table className="bordered">
            <thead>
              <tr>
                <th>Job</th>
                <th>Date</th>
                <th>Transit Route</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {trackingInfo.transitDetails.map((row, index) => (
                <tr key={index}>
                  <td>{row.job}</td>
                  <td>{row.date}</td>
                  <td dangerouslySetInnerHTML={{ __html: row.route }} />
                  <td>{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Delivery Details</h2>
          <table className="bordered">
            <thead>
              <tr>
                <th>Date/Time</th>
                <th>Delivery Branch</th>
                <th>Receiver</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {trackingInfo.deliveryDetails.map((row, index) => (
                <tr key={index}>
                  <td>{row.dateTime}</td>
                  <td dangerouslySetInnerHTML={{ __html: row.branch }} />
                  <td>{row.receiver}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Status: {trackingInfo.status}</h2>
        </div>
      )}
    </div>
  );
};

export default TrackingComponent;
